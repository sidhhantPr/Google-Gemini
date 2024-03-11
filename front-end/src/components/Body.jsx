import React, { useEffect, useState } from "react";
import axios from "axios";

const RenderShimmer = () => {
  const width = ["w-2/3", "w-2/5", "w-1/3", "w-1/4"];
  return (
    <div className="animate-pulse flex flex-col  p-4 gap-1 w-1/2 relative left-1/4">
      {Array(4)
        .fill("")
        .map((_, index) => (
          <div key={index} className={`${width[index]} h-4 bg-gray-300`}></div>
        ))}
    </div>
  );
};

const Body = () => {
  const [btn, setBtn] = useState(false);
  const [gemini, setGemini] = useState();

  const [burger, setBurger] = useState("hidden");

  const [searchText, setSearchText] = useState("");
  async function getData() {
    const { data } = await axios.post("http://localhost:3000/api", {
      searchText,
    });
    setGemini(data.message);
  }
  useEffect(() => {
    setSearchText("");

    if (btn) {
      getData();
      setBtn(false);
    }
  }, [btn]);

  return (
    <div className="grid grid-cols-12 h-screen w-screen overflow-hidden">
      <div className={`bg-gray-200 p-4 ${burger}`}></div>
      <div className="col-span-11 p-4 relative ">
        <div className="flex gap-4">
          <img
            className="cursor-pointer"
            onClick={() =>
              burger === "hidden" ? setBurger("block") : setBurger("hidden")
            }
            src="../../menu-2-line.png"
          />
          <h2>Gemini</h2>
        </div>
        <div className="flex justify-center items-center mt-8 font-semibold">
          <h1 style={{ color: "#C4C7C5" }} className="text-5xl">
            <span style={{ color: "#8f65bb" }}>Hello, Sidhhant</span>
            <br />
            How can I help you today?
          </h1>
        </div>
        {gemini === "processing" ? (
          <RenderShimmer />
        ) : (
          <div className="flex flex-col items-center m-5 w-1/2 relative left-1/4">
            <div>{gemini}</div>
          </div>
        )}
        <div className="absolute text-center bottom-2.5 w-full">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="w-1/2 px-4 p-4 border rounded-md outline-none shadow-lg"
            value={searchText}
            placeholder="Type here..."
          />
          <button
            className="m-5 bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600"
            onClick={() => {
              setBtn(true);
              setGemini("processing");
            }}
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
