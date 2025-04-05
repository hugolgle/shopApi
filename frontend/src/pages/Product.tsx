import bag from "@/assets/img/bag.png";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

function Product() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex flex-col pt-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto py-4">
        <div className="flex flex-col gap-4">
          <div className="bg-zinc-100 rounded-2xl flex justify-center">
            <img
              src={bag}
              alt="product"
              className="aspect-square w-full max-w-xs sm:max-w-sm md:max-w-md object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-zinc-100 rounded-2xl flex justify-center hover:ring ring-blue-500 transition cursor-pointer">
              <img
                src={bag}
                alt="product"
                className="aspect-square w-full max-w-[100px] object-cover"
              />
            </div>
            <div className="bg-zinc-100 rounded-2xl flex justify-center hover:ring ring-blue-500 transition cursor-pointer">
              <img
                src={bag}
                alt="product"
                className="aspect-square w-full max-w-[100px] object-cover"
              />
            </div>
            <div className="bg-zinc-100 rounded-2xl flex justify-center hover:ring ring-blue-500 transition cursor-pointer">
              <img
                src={bag}
                alt="product"
                className="aspect-square w-full max-w-[100px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 py-4">
          <h1 className="text-2xl md:text-3xl font-boldonse">SAC À DOS LV</h1>
          <p className="text-lg italic text-black font-black">1223,45 €</p>
          <p className="text-sm">
            <span>Par </span>
            <a href="#" className="underline italic">
              Louis Vuitton
            </a>
          </p>

          <p className="text-sm">#PL0001</p>

          <p className="text-sm text-justify text-zinc-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            nobis enim nam ab, similique natus at laboriosam officia hic modi?
          </p>
          <div className="flex gap-2">
            <div className="flex items-center w-fit gap-2">
              <Button variant="secondary" className="w-1/3">
                -
              </Button>
              <p className="w-1/3 text-center">1</p>
              <Button variant="secondary" className="w-1/3">
                +
              </Button>
            </div>
            <Button className="w-fit px-6 py-3">Ajouter au panier</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
