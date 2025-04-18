import React from "react";
import { formatCurrency } from "@/utils/utils";
import { Link } from "react-router-dom";
import { ROUTES } from "../Routes";

function CardProduct({
  img,
  price,
  name,
  id,
}: {
  img: string;
  price: number;
  name: React.ReactNode;
  id?: string;
}) {
  return (
    <Link
      to={ROUTES.PRODUCT_ID.replace(":id", id || "")}
      className="flex flex-col group gap-y-3 cursor-pointer"
    >
      <div className="flex justify-center w-72 rounded-2xl items-center bg-first lg:w-full">
        <img
          src={img}
          alt="product"
          className="aspect-square w-72 object-cover group-hover:scale-95 transition-transform duration-300"
        />
      </div>
      <div className="flex w-full flex-col gap-y-2 justify-end px-4">
        <div className="flex justify-between items-center">
          <p className="font-boldonse text-xs">{name}</p>
          <div className="flex gap-x-1">
            <div className="w-3 h-3 rounded-[3px] bg-black" />
            <div className="w-3 h-3 rounded-[3px] bg-blue-500" />
            <div className="w-3 h-3 rounded-[3px] bg-red-500" />
          </div>
        </div>
        <p className="text-sm">{formatCurrency.format(price)}</p>
      </div>
    </Link>
  );
}

export default CardProduct;
