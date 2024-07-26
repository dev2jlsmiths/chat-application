// src/ChatBox.js
import React, { useState } from "react";
import {
  FaSmile,
  FaImage,
  FaVideo,
  FaPaperclip,
  FaMoneyBillAlt,
  FaUserPlus,
  FaBoxOpen,
} from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
// import { Picker } from "emoji-mart";
// import data from "@emoji-mart/data";
import EmojiPicker from "emoji-picker-react";

const ChatBox = () => {
  const [text, setText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiSelect = (emoji) => {
    setText((prevText) => prevText + emoji.native);
    setShowEmojiPicker(false);
  };

  return (
    <div className="w-full h-32 border border-gray-300 flex flex-col justify-between bg-white">
      <div className="flex justify-between p-3 border-b border-gray-300">
        <div className="flex space-x-3">
          <FaSmile
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="text-gray-600 cursor-pointer"
          />
          <FaImage className="text-gray-600 cursor-pointer" />
          <FaVideo className="text-gray-600 cursor-pointer" />
          <FaPaperclip className="text-gray-600 cursor-pointer" />
        </div>
        {showEmojiPicker && (
            <EmojiPicker />
        )}
    
        <div className="flex space-x-3">
          <p className="text-xs">payment</p>
          <p className="text-xs">collection</p>
          <p className="text-xs">invite</p>
          <BsThreeDots className="text-gray-600 cursor-pointer" />
        </div>
      </div>
      <textarea
        placeholder="Type a message..."
        className="flex-1 p-3 border-none focus:outline-none focus:ring-0 resize-none"
      />
    </div>
  );
};

export default ChatBox;
