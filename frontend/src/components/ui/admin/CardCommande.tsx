import { formatCurrency } from "@/utils/utils";

function CardCommande({
  img,
  name,
  price,
}: {
  img: string;
  name: string;
  price: number;
}) {
  return (
    <div className="flex gap-4 w-full h-52 rounded-2xl hover:ring-1 transition shadow p-2 cursor-pointer">
      <div className="flex w-fit h-full rounded-2xl bg-first">
        <img
          src={img}
          alt="product"
          className="aspect-square h-full object-cover group-hover:scale-95 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col gap-2 py-4">
        <h1 className="font-boldonse">{name}</h1>
        <p className="italic">{formatCurrency.format(price)}</p>
      </div>
    </div>
  );
}

export default CardCommande;
