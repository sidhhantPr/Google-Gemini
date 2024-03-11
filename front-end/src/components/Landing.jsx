import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="realtive">
      <nav className="flex justify-between items-center p-4">
        <h2 className="font-bold">Gemini</h2>
        <ul className="flex justify-between font-bold text-sm w-1/5 mr-3">
          <li>Try Gemini Advanced</li>
          <li>For business</li>
          <li>FAQs</li>
        </ul>
      </nav>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex gap-8">
          <div>
            <img
              className="h-24 m-3"
              src="https://www.gstatic.com/lamda/images/gemini_wordmark_landing_page_238102af073d0ae2763aa5.svg"
              alt="logo"
            />
            <h3 className="font-bold text-2xl m-3">
              Supercharge your creativity and productivity
            </h3>
            <p className="m-3 mt-4 mb-4">
              Chat to start writing, planning, learning and more with Google AI
            </p>
            <Link to="/body">
              <button className="p-4 m-2 bg-blue-600 rounded-3xl font-bold text-white">
                Chat with Gemini
              </button>
            </Link>
          </div>
          <div className="h-96">
            <img
              className="h-full object-cover"
              src="https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="bg-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
