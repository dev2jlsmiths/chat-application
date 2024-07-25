import React from "react";

const ChatCard = () => {
  return (
    <div className="chat-card">
      <div className="mb-4">
        <div className="bg-gray-100 rounded">
          <div className="border-b-2 py-3">
            <p className=" mx-4">Client came through this product page</p>
          </div>
          <div className="p-3 rounded">
            <div className="flex items-center justify-between ">
                <div className="flex justify-center items-center ">
              <div className="w-10 h-10 bg-gray-300 rounded"></div>
              <div className="ml-3 ">
                <div className="text-sm">Lorem ipsum dolor sit amet consectetur.<br/> Duis fringilla at nisl arcu hendrerit ipsum a..</div>
                
              </div>
              </div>
              <div className="text-sm">Price: ₹ 20000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
