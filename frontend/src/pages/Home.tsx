import Card from "@/components/ui/Card.tsx";
import { Button } from "@/components/ui/button";
import { DollarSign, Truck } from "lucide-react";
import imgHome from "@/assets/img/imgHome.jpg";
import bag from "@/assets/img/bag.png";
import CardProduct from "@/components/ui/CardProduct";

function Home() {
  return (
    <main>
      <section className="flex flex-col px-4">
        <div className="flex h-screen py-4 w-full gap-4">
          <div className="flex flex-col gap-4 w-1/2">
            <div className="flex flex-col justify-between rounded-2xl h-3/5 bg-first px-8 py-14 gap-4">
              <h1 className="text-4xl/18 font-boldonse">
                PRÉPAREZ-VOUS POUR LES VOYAGES D'AFFAIRES DE FIN D'ANNÉE
              </h1>
              <p>
                Préparez-vous pour les voyages d'affaires de fin d'année en
                toute simplicité. Maximisez la productivité, simplifiez les
                plans et profitez de voyages sans stress.
              </p>
              <Button variant="outline" className="w-fit p-5">
                Acheter maintenant
              </Button>
            </div>
            <div className="flex gap-4 h-2/5">
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
          <img
            src={imgHome}
            alt="voyage"
            className="w-1/2 rounded-2xl object-cover"
          />
        </div>
      </section>
      <section className="flex flex-col pt-20 px-4">
        <div className="flex flex-col items-center py-4 w-full gap-4">
          <div className="flex flex-col text-center w-2/5 gap-y-2">
            <h4 className="text-gray-500 font-black">MEILLEUR PRODUIT</h4>
            <h1 className="text-2xl font-black font-boldonse">
              PACK DE VOYAGE ESSENTIEL
            </h1>
            <p className="text-sm text-gray-500">
              Conçu pour les aventures, ce pack offre un espace ample, une
              durabilité et un confort pour tous vos voyages à venir.
            </p>
          </div>
          <div className="flex gap-x-10 justify-center items-center">
            <div className="flex flex-col gap-4 w-1/3">
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
            <img src={bag} alt="sac" className="w-1/3 object-cover" />
            <div className="flex flex-col gap-4 w-1/3">
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
      <section className="flex flex-col pt-20">
        <div className="flex flex-col items-center py-4 w-full gap-4">
          <div className="flex w-full justify-between items-end px-20">
            <div className="flex flex-col w-2/5 gap-y-2">
              <h4 className="text-gray-500 font-black">
                COLLECTION DE SAC À DOS
              </h4>
              <h1 className="text-2xl font-black font-boldonse">
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
          <div className="flex gap-x-10 justify-center items-center">
            <div className="relative w-full !size-4/12">
              <img
                src={imgHome}
                alt="voyage"
                className="rounded-2xl size-[650px] object-cover"
              />
              <div className="absolute rounded-2xl m-5 p-4 flex flex-col gap-y-4 bg-foreground text-accent bottom-0">
                <h1 className="font-boldonse">PRÉPAREZ-VOUS POUR L'ANNÉE</h1>
                <p className="text-sm">
                  Rendez les voyages d'affaires plus faciles avec notre sac à
                  dos valise 2-en-1 breveté.
                </p>
                <Button variant="outline" className="w-fit p-5">
                  Explorer
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 w-1/2">
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
      <section className="flex flex-col pt-20">
        <div className="flex flex-col items-center py-4 w-full gap-4">
          <div className="flex w-full justify-between items-end px-20">
            <div className="flex flex-col w-2/5 gap-y-2">
              <h4 className="text-gray-500 font-black">ACCESSOIRES</h4>
              <h1 className="text-2xl font-black font-boldonse">
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
          <div className="flex gap-x-10 justify-center items-center">
            <div className="grid grid-cols-4 gap-4">
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
