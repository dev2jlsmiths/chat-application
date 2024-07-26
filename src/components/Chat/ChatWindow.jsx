import React, { useState } from "react";
import ChatCard from "./ChatCard";
import { CopyPlusIcon } from "lucide-react";
import { CouponModal } from "./CouponModal";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import ChatBox from "./ChatBox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const ChatWindow = () => {
  const [showModal, setShowModal] = useState();

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const toggleColorTooltip = () => {
    setShowColors((prev) => !prev);
  };

  return (
    <div className="w-1/2 bg-white  flex flex-col border-r">
      <div className="flex items-center justify-between mb-4 border-b">
        <div className="flex items-center p-4 space-x-2">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div>
            <div className="font-bold">Client Name</div>
            <div className="text-sm text-gray-500">Add a note</div>
          </div>
        </div>
        <div className="flex space-x-4 p-4">
          <button>🔔</button>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button onClick={toggleColorTooltip}>⭐</button>
              </TooltipTrigger>
              <TooltipContent
                className="bg-white p-2 rounded shadow-lg flex space-x-2"
                side="top"
                align="center"
                sideOffset={5}
              >
                <div
                  className="w-4 h-4 bg-green-500 rounded-full cursor-pointer"
                  title="Green"
                ></div>
                <div
                  className="w-4 h-4 bg-red-500 rounded-full cursor-pointer"
                  title="Red"
                ></div>
                <div
                  className="w-4 h-4 bg-blue-500 rounded-full cursor-pointer"
                  title="Blue"
                ></div>
                <div
                  className="w-4 h-4 bg-yellow-500 rounded-full cursor-pointer"
                  title="Yellow"
                ></div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Chat messages */}
        <ChatCard />
      </div>
      <div className="mt-4 flex items-center space-x-4">
        {/* Chat input and actions */}
        <ChatBox />
        {/* <input
          type="text"
          placeholder="Type a message"
          className="flex-1 p-2 border rounded"
        /> */}
        {/* <CouponModal />
        <button>📎</button>
        <button>📸</button> */}
      </div>
    </div>
  );
};

export default ChatWindow;
