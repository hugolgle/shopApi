import Card from "@/components/ui/Card.tsx";
import { Button } from "@/components/ui/button";
import { DollarSign, Truck } from "lucide-react";
import imgHome from "@/assets/img/imgHome.jpg";
import bag from "@/assets/img/bag.png";

function Home() {
  return (
    <main className="px-4">
      <section className="flex flex-col">
        <div className="flex h-screen py-4 w-full gap-4">
          <div className="flex flex-col gap-4 w-1/2">
            <div className="flex flex-col justify-between rounded-2xl h-3/5 bg-first px-8 py-14 gap-4">
              <h1 className="text-4xl/18 font-boldonse">
                GET READY FOR YEAR-END BUSINNESS TRAVEL
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium autem saepe ullam placeat, esse explicabo!
              </p>
              <Button variant="outline" className="w-fit p-5">
                Acheter maintenant
              </Button>
            </div>
            <div className="flex gap-4 h-2/5">
              <Card
                title="SECURE CHECKOUT"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quasi."
                icon={<Truck />}
              />
              <Card
                title="FREE SHIPPING"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quasi."
                icon={<DollarSign />}
              />
            </div>
          </div>
          <img
            src={imgHome}
            alt="travel"
            className="w-1/2 rounded-2xl object-cover"
          />
        </div>
      </section>
      <section className="flex flex-col pt-20">
        <div className="flex flex-col items-center py-4 w-full gap-4">
          <div className="flex flex-col text-center w-2/5 gap-y-2">
            <h4 className="text-gray-500 font-black">BEST PRODUCT</h4>
            <h1 className="text-2xl font-black font-boldonse">
              GO-TO TRAVEL PACK
            </h1>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              laudantium odio culpa, tempora distinctio tempore!
            </p>
          </div>
          <div className="flex gap-x-10 justify-center items-center">
            <div className="flex flex-col gap-4 w-1/3">
              <Card
                title="SECURE CHECKOUT"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing."
                icon={<Truck />}
                bis
              />
              <Card
                title="FREE SHIPPING"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing."
                icon={<DollarSign />}
                bis
              />
            </div>
            <img src={bag} alt="bag" className="w-1/3 object-cover" />
            <div className="flex flex-col gap-4 w-1/3">
              <Card
                title="SECURE CHECKOUT"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing."
                icon={<Truck />}
                bis
              />
              <Card
                title="FREE SHIPPING"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing."
                icon={<DollarSign />}
                bis
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col pt-20">
        <div className="flex flex-col items-center py-4 w-full gap-4">
          <div className="flex w-full justify-between items-end px-20">
            <div className="flex flex-col w-2/5 gap-y-2">
              <h4 className="text-gray-500 font-black">BACKPACK COLLECTION</h4>
              <h1 className="text-2xl font-black font-boldonse">
                BROWSE BACKPACK COLLECTION
              </h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus laudantium odio culpa, tempora distinctio tempore!
              </p>
            </div>
            <Button variant="outline" className="w-fit p-5">
              Show more
            </Button>
          </div>
          <div className="flex gap-x-10 justify-center items-center">
            <div className="relative w-full !size-4/12">
              <img
                src={imgHome}
                alt="travel"
                className="rounded-2xl aspect-square object-cover"
              />
              <div className="absolute rounded-2xl h-1/3 m-5 p-4 flex flex-col gap-y-4 bg-foreground text-accent bottom-0">
                <h1 className="font-boldonse">GET READY FOR YEAR</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  architecto amet, asperiores vel enim quasi ut, nostrum quis
                </p>
                <Button variant="outline" className="w-fit p-5">
                  Explore
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-1/2">
              <Card
                title="SECURE CHECKOUT"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing."
                icon={<Truck />}
                bis
              />
              <Card
                title="FREE SHIPPING"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing."
                icon={<DollarSign />}
                bis
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
