import Card from "@/components/ui/Cards";
import { DollarSign, Truck } from "lucide-react";
import imgHome from "@/assets/img/imgHome.jpg";
import bag from "@/assets/img/bag.png";
import { Button } from "@/components/ui/button";
import CardProduct from "@/components/ui/CardProduct";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { ROUTES } from "@/components/Routes";

function Home() {
  const bagRef = useRef(null);
  const collectionRef = useRef(null);
  const accessoiryRef = useRef(null);
  const isInView = useInView(bagRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  const collectionIsView = useInView(collectionRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardVariant = {
    hidden: (i: number) => ({
      opacity: 0,
      scale: 0.8,
      y: 50,
      x: i % 4 < 2 ? 200 : -200,
    }),
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariant = {
    hidden: { x: -500, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const productsVariant = {
    hidden: { x: 500, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <main className="container mx-auto px-4 md:px-0">
      <section className="flex flex-col lg:flex-row gap-10 lg:max-h-full xl:max-h-[587px] mb-30">
        <div className="flex flex-col justify-start items-center gap-4 w-full lg:w-1/2">
          <div className="flex flex-col justify-between rounded-2xl bg-first p-8 gap-4">
            <h1 className="text-2xl/12 md:text-4xl/18 font-boldonse">
              PRÉPAREZ-VOUS POUR LES VOYAGES D'AFFAIRES DE FIN D'ANNÉE
            </h1>
            <p>
              Préparez-vous pour les voyages d'affaires de fin d'année en toute
              simplicité. Maximisez la productivité, simplifiez les plans et
              profitez de voyages sans stress.
            </p>
            <Link to={ROUTES.STORE}>
              <Button variant="outline" className="w-fit p-5">
                Acheter maintenant
              </Button>
            </Link>
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
            className="rounded-2xl w-full h-[200px] md:h-full object-cover"
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
              {[0, 1].map((i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariant}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <Card
                    title={
                      i === 0 ? "DESIGN SPACIEUX" : "RÉSISTANT AUX INTEMPÉRIES"
                    }
                    text={
                      i === 0
                        ? "Transportez vos essentiels et plus avec un espace organisé suffisant."
                        : "Matériaux durables et fermetures éclair résistantes aux intempéries."
                    }
                    icon={i === 0 ? <Truck /> : <DollarSign />}
                    bis
                  />
                </motion.div>
              ))}
            </div>

            <motion.img
              ref={bagRef}
              src={bag}
              alt="sac"
              className="w-1/3 object-cover hidden md:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
            />

            <div className="flex flex-col gap-4 w-full">
              {[2, 3].map((i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariant}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  <Card
                    title={
                      i === 2 ? "CONFORTABLE" : "COMPATIBLE AVEC LA TECHNOLOGIE"
                    }
                    text={
                      i === 2
                        ? "Bretelles et dos rembourrés pour un transport confortable."
                        : "Compartiment dédié pour ordinateur portable et fonctionnalités conviviales pour la technologie."
                    }
                    icon={i === 2 ? <Truck /> : <DollarSign />}
                    bis
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col pt-20">
        <div className="flex flex-col items-center py-4 w-full gap-4">
          <div className="flex flex-col gap-2 w-full justify-between items-end lg:flex-row">
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
            <Link to={ROUTES.STORE}>
              <Button variant="outline" className="w-fit p-5">
                Voir plus
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-10 justify-center items-center md:flex-row md:justify-between">
            <motion.div
              ref={collectionRef}
              className="relative hidden justify-center w-full md:block md:w-1/2 lg:flex"
              variants={imageVariant}
              initial="hidden"
              animate={collectionIsView ? "visible" : "hidden"}
            >
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
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-4 md:grid-cols-2 md:w-1/2"
              variants={productsVariant}
              initial="hidden"
              animate={collectionIsView ? "visible" : "hidden"}
            >
              <CardProduct
                img={bag}
                name="Sac Louis Vuitton"
                price={1228.0}
                id="1"
              />
              <CardProduct img={bag} name="Sac Louis Vuitton" price={1228.0} />
              <CardProduct img={bag} name="Sac Louis Vuitton" price={1228.0} />
              <CardProduct img={bag} name="Sac Louis Vuitton" price={1228.0} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="flex flex-col pt-20 mb-40">
        <div className="flex flex-col items-center py-4 w-full gap-4">
          <div className="flex flex-col gap-2 w-full justify-between items-end lg:flex-row">
            <div className="flex flex-col gap-y-2">
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
            <Link to={ROUTES.STORE}>
              <Button variant="outline" className="w-fit p-5">
                Voir plus
              </Button>
            </Link>
          </div>
          <div className="flex gap-10 justify-center items-center">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              <CardProduct img={bag} name="Sac Louis Vuitton" price={1228.0} />
              <CardProduct img={bag} name="Sac Louis Vuitton" price={1228.0} />
              <CardProduct img={bag} name="Sac Louis Vuitton" price={1228.0} />
              <CardProduct img={bag} name="Sac Louis Vuitton" price={1228.0} />
              <CardProduct img={bag} name="Sac Louis Vuitton" price={1228.0} />
              <CardProduct img={bag} name="Sac Louis Vuitton" price={1228.0} />
              <CardProduct img={bag} name="Sac Louis Vuitton" price={1228.0} />
              <CardProduct img={bag} name="Sac Louis Vuitton" price={1228.0} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
