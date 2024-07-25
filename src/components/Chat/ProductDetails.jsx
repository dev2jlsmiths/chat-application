import React from "react";
import { Badge } from "../ui/Badge";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductDetailsCard";
import { Combobox } from "../ui/combobox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductChatTabs from "./ProductChatTabs";

const ProductDetails = () => {
  return (
    <div className="w-1/3  bg-gray-50 p-4 ">
      <div className="flex space-x-2">
        <ProductChatTabs />
        {/* <Button className="flex-1 hover:underline hover:border-none text-sm px-2 py-1">
          Order
        </Button>
        <Button className="flex-1 hover:underline hover:border-none text-sm px-2 py-1">
          Product
        </Button>
        <Button className="flex-1 hover:underline hover:border-none text-sm px-2 py-1">
          Quickly reply
        </Button>
        <Button className="flex-1 hover:underline hover:border-none text-sm px-2 py-1">
          Todo
        </Button> */}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <Badge className="" variant="secondary">
            Offer
          </Badge>
          <Badge className="bg-black text-white" variant="primary">
            Offer Details
          </Badge>
        </div>
        <div className="flex gap-x-2 mb-2">
          <Select className="border-none">
            <SelectTrigger className="w-[110px] z-30 bg-gray-50">
              <SelectValue placeholder="Product" />
            </SelectTrigger>
            <SelectGroup>
              <SelectContent>
                <SelectLabel>Product</SelectLabel>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </SelectGroup>
          </Select>
          <input
            type="text"
            placeholder="Search"
            className="w-3/5 p-2 border rounded bg-gray-200"
          />
        </div>
      </div>
      <div className="">
        <ProductChatTabs />
      </div>
      <div
        className="overflow-y-auto"
        style={{ height: "calc(100vh - 180px)" }}
      >
        {/* Product list */}
        <ProductCard />
        {/* Repeat for each product */}
      </div>
    </div>
  );
};

export default ProductDetails;
