import { DollarSign, Truck } from "lucide-react";
import imgHome from "@/assets/img/imgHome.jpg";
import bag from "@/assets/img/bag.png";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/Card";
import CardProduct from "@/components/ui/CardProduct";

function Home() {
  return (
    <main className="container mx-auto">
      <section className="flex flex-col lg:flex-row gap-4 lg:max-h-full xl:max-h-[587px] mb-30">
        <div className="flex flex-col justify-start items-center gap-4 w-full lg:w-1/2">
          <div className="flex flex-col justify-between rounded-2xl bg-first p-8 gap-4">
            <h1 className="text-4xl/18 font-boldonse">
              PRÉPAREZ-VOUS POUR LES VOYAGES D'AFFAIRES DE FIN D'ANNÉE
            </h1>
            <p>
              Préparez-vous pour les voyages d'affaires de fin d'année en toute
              simplicité. Maximisez la productivité, simplifiez les plans et
              profitez de voyages sans stress.
            </p>
            <Button variant="outline" className="w-fit p-5">
              Acheter maintenant
            </Button>
          </div>
          <div className="flex gap-4">
            <Card
              title="LIVRAISON GRATUITE"
              text="Obtenez de l'aide instantanée de représentants compétents"
              icon={<DollarSign />}
            />
            <Card
              title="PAIEMENT SÉCURISÉ"
              text="Profitez d'une expérience d'achat sûre et fluide à chaque fois"
              icon={<Truck />}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={imgHome}
            alt="Voyage"
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="flex flex-col">
        <div className="flex flex-col items-center py-4 w-full gap-4">
          <div className="flex flex-col text-center gap-y-2 w-4/5">
            <h4 className="text-gray-500 font-black">MEILLEUR PRODUIT</h4>
            <h1 className="text-xl font-black font-boldonse">
              PACK DE VOYAGE ESSENTIEL
            </h1>
            <p className="text-sm text-gray-500">
              Conçu pour les aventures, ce pack offre un espace ample, une
              durabilité et un confort pour tous vos voyages à venir.
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center md:flex-row">
            <div className="flex flex-col gap-4 w-full">
              <Card
                title="DESIGN SPACIEUX"
                text="Transportez vos essentiels et plus avec un espace organisé suffisant."
                icon={<Truck />}
                bis
              />
              <Card
                title="RÉSISTANT AUX INTEMPÉRIES"
                text="Matériaux durables et fermetures éclair résistantes aux intempéries."
                icon={<DollarSign />}
                bis
              />
            </div>
            <img
              src={bag}
              alt="sac"
              className="w-1/3 object-cover hidden md:block"
            />
            <div className="flex flex-col gap-4 w-full">
              <Card
                title="CONFORTABLE"
                text="Bretelles et dos rembourrés pour un transport confortable."
                icon={<Truck />}
                bis
              />
              <Card
                title="COMPATIBLE AVEC LA TECHNOLOGIE"
                text="Compartiment dédié pour ordinateur portable et fonctionnalités conviviales pour la technologie."
                icon={<DollarSign />}
                bis
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col pt-10 px-4">
        <div className="flex flex-col items-center py-4 w-full gap-4">
          <div className="flex flex-col gap-2 w-full justify-between items-end lg:flex-row lg:px-20">
            <div className="flex flex-col gap-y-2 lg:w-3/5">
              <h4 className="text-gray-500 font-black">
                COLLECTION DE SAC À DOS
              </h4>
              <h1 className="text-xl font-black font-boldonse">
                PARCOURIR LA COLLECTION DE SAC À DOS
              </h1>
              <p className="text-sm text-gray-500">
                Découvrez notre collection de sacs à dos élégants, proposant des
                designs tendance, des styles polyvalents et une qualité
                exceptionnelle pour chaque aventure.
              </p>
            </div>
            <Button variant="outline" className="w-fit p-5">
              Voir plus
            </Button>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center md:flex-row md:justify-between">
            <div className="relative hidden justify-center w-full md:block md:w-1/2 lg:flex">
              <img
                src={imgHome}
                alt="voyage"
                className="rounded-2xl lg:aspect-square object-cover"
              />
              <div className="absolute rounded-2xl m-5 p-4 flex flex-col gap-y-4 bg-foreground bottom-0">
                <h1 className="font-boldonse text-accent">
                  PRÉPAREZ-VOUS POUR L'ANNÉE
                </h1>
                <p className="text-sm text-accent">
                  Rendez les voyages d'affaires plus faciles avec notre sac à
                  dos valise 2-en-1 breveté.
                </p>
                <Button variant="outline" className="w-fit p-5">
                  Explorer
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:w-1/2">
              <CardProduct
                img={bag}
                name="Sac Louis Vuitton"
                price="1228.00 €"
                id="1"
              />
              <CardProduct
                img={bag}
                name="Sac Louis Vuitton"
                price="1228.00 €"
              />
              <CardProduct
                img={bag}
                name="Sac Louis Vuitton"
                price="1228.00 €"
              />
              <CardProduct
                img={bag}
                name="Sac Louis Vuitton"
                price="1228.00 €"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col pt-10 px-4">
        <div className="flex flex-col items-center py-4 w-full gap-4">
          <div className="flex flex-col gap-2 w-full justify-between items-end lg:flex-row lg:px-20">
            <div className="flex flex-col gap-y-2 lg:w-3/5">
              <h4 className="text-gray-500 font-black">ACCESSOIRES</h4>
              <h1 className="text-xl font-black font-boldonse">
                ESSENTIELS POUR SAC À DOS
              </h1>
              <p className="text-sm text-gray-500">
                Découvrez les essentiels pour sac à dos conçus pour la
                fonctionnalité et le style, vous assurant d'être toujours prêt
                pour votre prochaine aventure.
              </p>
            </div>
            <Button variant="outline" className="w-fit p-5">
              Voir plus
            </Button>
          </div>
          <div className="flex gap-10 justify-center items-center">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <CardProduct
                img={bag}
                name="Sac Louis Vuitton"
                price="1228.00 €"
              />
              <CardProduct
                img={bag}
                name="Sac Louis Vuitton"
                price="1228.00 €"
              />
              <CardProduct
                img={bag}
                name="Sac Louis Vuitton"
                price="1228.00 €"
              />
              <CardProduct
                img={bag}
                name="Sac Louis Vuitton"
                price="1228.00 €"
              />
              <CardProduct
                img={bag}
                name="Sac Louis Vuitton"
                price="1228.00 €"
              />
              <CardProduct
                img={bag}
                name="Sac Louis Vuitton"
                price="1228.00 €"
              />
              <CardProduct
                img={bag}
                name="Sac Louis Vuitton"
                price="1228.00 €"
              />
              <CardProduct
                img={bag}
                name="Sac Louis Vuitton"
                price="1228.00 €"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
