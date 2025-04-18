import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import city from "@/assets/img/city.jpg";
import bagFooter from "@/assets/img/bagFooter.jpg";
import { Fragment } from "react/jsx-runtime";

function Footer() {
  return (
    <Fragment>
      <section
        className="flex flex-col pt-20 h-[70vh] bg-no-repeat bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${bagFooter})` }}
      >
        <div className="container mx-auto h-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between h-full w-full p-4">
            <div className="flex flex-col justify-center gap-20 w-1/3 pb-10 md:flex-row">
              <div>
                <h1 className="text-3xl font-boldonse text-white">80+</h1>
                <p className="text-white">Nouveaux produits</p>
              </div>
              <div>
                <h1 className="text-3xl font-boldonse text-white">120K</h1>
                <p className="text-white">Clients dans le monde</p>
              </div>
            </div>
            <div className="flex flex-col lg:items-center lg:w-1/2 gap-2 pb-10">
              <p className="font-boldonse text-white">
                ABONNEZ-VOUS À NOTRE NEWSLETTER
              </p>
              <div className="flex flex-col gap-2 lg:flex-row">
                <Input
                  type="email"
                  placeholder="Entrez votre email"
                  className="w-full focus:bg-white focus:text-black"
                />
                <Button variant="secondary">S'abonner</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-col pt-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="flex flex-col gap-y-2 w-1/2">
              <h1 className="text-white font-boldonse">RANDOO</h1>
              <p className="text-zinc-500 text-sm">
                Votre compagnon de voyage ultime. Durable, élégant et spacieux,
                conçu pour le confort et la commodité lors de toutes vos
                aventures ou déplacements.
              </p>
            </div>
            <div className="flex justify-end w-1/2 gap-x-4">
              <i className="fa-brands fa-twitter text-accent transition-all cursor-pointer hover:scale-105"></i>
              <i className="fa-brands fa-instagram text-accent transition-all cursor-pointer hover:scale-105"></i>
              <i className="fa-brands fa-facebook text-accent transition-all cursor-pointer hover:scale-105"></i>
              <i className="fa-brands fa-linkedin text-accent transition-all cursor-pointer hover:scale-105"></i>
            </div>
          </div>
          <hr className="bg-zinc-500 h-[1.5px] mx-auto w-4/5 my-10" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center gap-y-2 md:w-1/2">
              <img
                src={city}
                alt="city"
                className="rounded-2xl md:w-1/2 mb-2 object-cover"
              />
              <div className="flex gap-2 items-center">
                <MapPin color="white" size={20} />
                <p className="text-white text-sm">Vannes 56000, France</p>
              </div>
              <div className="flex gap-2 items-center">
                <Phone color="white" size={20} />
                <p className="text-white text-sm">+33 6 78 91 23 45</p>
              </div>
              <div className="flex gap-2 items-center">
                <Mail color="white" size={20} />
                <p className="text-white text-sm">vannes@gmail.com</p>
              </div>
            </div>
            <div className="flex justify-center gap-x-20 md:w-1/2 text-white text-sm">
              <div className="flex flex-col gap-y-2">
                <p>MENU RAPIDE</p>
                <p className="text-zinc-500">Derniers produits</p>
                <p className="text-zinc-500">Sac à dos</p>
                <p className="text-zinc-500">Sacs</p>
                <p className="text-zinc-500">Accessoires</p>
                <p className="text-zinc-500">Collection</p>
                <p className="text-zinc-500">Service</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p>SUPPORT</p>
                <p className="text-zinc-500">Contactez-nous</p>
                <p className="text-zinc-500">Instructions du produit</p>
                <p className="text-zinc-500">FAQ</p>
                <p className="text-zinc-500">Options de livraison</p>
              </div>
            </div>
          </div>
          <hr className="bg-zinc-500 h-[1.5px] mx-auto w-4/5 my-10" />
          <p className="text-zinc-500 text-xs text-center mb-2">
            © 2025 Randoo. Tous droits réservés. Conçu avec ❤️ par{" "}
            <a href="https://github.com/hugolgle" target="blank">
              @hugolgle
            </a>{" "}
            <a href="https://github.com/tanguymln" target="blank">
              @tanguymln
            </a>
          </p>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
