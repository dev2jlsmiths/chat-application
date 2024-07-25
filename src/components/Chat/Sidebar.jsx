import React from 'react';
import { Button } from "@/components/ui/button"



const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-100 p-4 border-r">

      <div className="mb-2">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4 flex space-x-2">
        <Button className="rounded-lg bg-white hover:bg-black hover:text-white">Today</Button>
        <Button className="rounded-lg bg-white hover:bg-black hover:text-white">All</Button>
        <Button className="rounded-lg bg-white hover:bg-black hover:text-white">Pending</Button>
        {/* <button className="flex-1 bg-black text-white p-2 rounded">All</button>
        <button className="flex-1 bg-gray-200 p-2 rounded">Pending</button> */}
      </div>
      <div className="overflow-y-auto" style={{ height: 'calc(100vh - 180px)' }}>
        <div className="flex items-center space-x-2 py-2 border-b">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="flex-1">
            <div className="font-bold">Client Name</div>
            <div className="text-gray-500">20:10</div>
          </div>
        </div>
        {/* Repeat for each chat item */}
      </div>
    </div>
  );
};

export default Sidebar;
