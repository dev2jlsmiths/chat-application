import React, { useState } from "react";

const ProductChatTabs = () => {
    // State to keep track of the selected tab
    const [selectedTab, setSelectedTab] = useState(0);

    // Array of tab names
    const tabs = ["Order", "Product", "Quick reply", "Todo"];

    return (
        <div className="flex gap-x-6 mb-2">
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className={`cursor-pointer px-4 py-2 transition-colors duration-300 ${
                        selectedTab === index ? "text-black text-sm font-bold border-b-2 border-black" : "text-sm text-gray-600"
                    }`}
                    onClick={() => setSelectedTab(index)}
                >
                    {tab}
                </div>
            ))}
        </div>
    );
};

export default ProductChatTabs;
