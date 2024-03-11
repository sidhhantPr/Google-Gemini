import React from "react";

const Message = ({ message }) => {
  const isYou = message.sender === "You";

  const messageClass = `flex items-start p-3 rounded-md ${
    isYou ? "bg-blue-100 text-gray-800" : "bg-gray-100 text-gray-600"
  }`;

  const senderClass = `font-bold ${isYou ? "text-blue-500" : "text-gray-700"}`;

  return (
    <div className={messageClass}>
      <p className={senderClass}>{message.sender}</p>
      <p className="ml-2">{message.text}</p>
    </div>
  );
};

export default Message;
