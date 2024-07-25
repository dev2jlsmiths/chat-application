import React from 'react';
import { Badge } from '../ui/Badge';
import { Button } from "@/components/ui/button"

const ProductDetails = () => {
  return (
    <div className="w-1/4 bg-gray-50 p-4 ">
      <div className="flex space-x-2 mb-4">
        <Button className="flex-1 hover:underline hover:border-none text-sm px-2 py-1">Order</Button>
        <Button className="flex-1 hover:underline hover:border-none text-sm px-2 py-1">Product</Button>
        <Button className="flex-1 hover:underline hover:border-none text-sm px-2 py-1">Quickly reply</Button>
        <Button className="flex-1 hover:underline hover:border-none text-sm px-2 py-1">Todo</Button>
      </div>
      <div className="flex items-center justify-between mb-2">
        <Badge className="bg-black text-white" variant="primary">Offer Details</Badge>
        <input
          type="text"
          placeholder="Search"
          className="p-2 border rounded"
        />
      </div>
      <div className="overflow-y-auto" style={{ height: 'calc(100vh - 180px)' }}>
        {/* Product list */}
        <div className="mb-4 p-3 bg-white rounded shadow">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-12 h-12 bg-gray-300 rounded"></div>
            <div className="flex-1">
              <div className="font-bold">Lorem ipsum dolor sit amet</div>
              <div>Price: ₹ 20000</div>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-gray-200 p-1 rounded">send</button>
            <button className="flex-1 bg-gray-200 p-1 rounded">invite</button>
            <button className="flex-1 bg-gray-200 p-1 rounded">send order</button>
          </div>
        </div>
        {/* Repeat for each product */}
      </div>
    </div>
  );
};

export default ProductDetails;
