import React from 'react';

const ChatWindow = () => {
  return (
    <div className="w-1/2 bg-white p-4 flex flex-col border-r">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div>
            <div className="font-bold">Client Name</div>
            <div className="text-sm text-gray-500">Add a note</div>
          </div>
        </div>
        <div className="flex space-x-4">
          <button>🔔</button>
          <button>⭐</button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {/* Chat messages */}
        <div className="mb-4">
          <div className="bg-gray-100 p-3 rounded">
            <div>Client came through this product page</div>
            <div className="mt-2 bg-white p-3 rounded">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded"></div>
                <div className="ml-3">
                  <div>Lorem ipsum dolor sit amet consectetur.</div>
                  <div>Price: ₹ 20000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center space-x-4">
        {/* Chat input and actions */}
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 p-2 border rounded"
        />
        <button>🎤</button>
        <button>📎</button>
        <button>📸</button>
      </div>
    </div>
  );
};

export default ChatWindow;
