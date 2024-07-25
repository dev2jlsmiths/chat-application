import React from "react";

const ProductCard = () => {
    return (
        <div className="product-card">
    <div className="mb-4 p-2 bg-white border">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-12 h-12 bg-gray-300 rounded"></div>
            <div className="flex-1">
              <div className="font-bold">Lorem ipsum dolor sit amet</div>
              <div className="text-sm">Price: ₹ 20000</div>
            </div>
          </div>
          <div className="w-11/12 flex justify-between my-4 items-center space-x-2 mb-2">
            <p className="text-sm font-semibold">Inventory: 27000</p>    
            <p className="text-sm font-semibold">Sales: 6106</p>
            <p className="text-sm font-semibold">Waiting: 0</p>    
          </div>
          <div className="flex space-x-2">
            <button className="flex-1 bg-gray-200 p-1 rounded text-xs font-medium">send</button>
            <button className="flex-1 bg-gray-200 p-1 rounded text-xs font-medium">invite</button>
            <button className="flex-1 bg-gray-200 p-1 rounded text-xs font-medium">send order</button>
            <button className="flex-1 bg-gray-200 p-1 rounded text-xs font-medium">SKU</button>
            <button className="flex-1 bg-gray-200 p-1 rounded text-xs font-medium">Commodity</button>
          </div>
        </div>
        </div>
    )
}

export default ProductCard