function CardProduct({
  img,
  price,
  name,
}: {
  img: string;
  price: React.ReactNode;
  name: React.ReactNode;
}) {
  return (
    <div className="flex flex-col group gap-y-3">
      <div className="flex justify-center rounded-2xl items-center bg-first w-fit">
        <img
          src={img}
          alt="product"
          className="aspect-square w-full max-w-72 object-cover group-hover:scale-95 transition-transform duration-300"
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
        <p className="text-sm">{price}</p>
      </div>
    </div>
  );
}

export default CardProduct;
