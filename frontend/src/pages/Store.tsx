import CardProduct from "@/components/ui/CardProduct";
import bag from "@/assets/img/bag.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

function Store() {
  return (
    <section className="flex flex-col pt-10 px-4 container mx-auto">
      <div className="flex flex-col items-center py-4 w-full gap-4">
        <div className="flex flex-col gap-2 w-full lg:px-20">
          <h1 className="text-xl font-black font-boldonse">NOS PRODUITS</h1>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-4 md:w-1/5 md:mt-10 justify-start">
            <Input
              type="search"
              className="w-full placeholder:text-muted-foreground"
              placeholder="Rechercher"
            />
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filtrer par catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sacs">Sacs</SelectItem>
                <SelectItem value="accessoires">Accessoires</SelectItem>
                <SelectItem value="nouveautes">Nouveautés</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="prix_asc">Prix croissant</SelectItem>
                <SelectItem value="prix_desc">Prix décroissant</SelectItem>
                <SelectItem value="recent">Plus récents</SelectItem>
              </SelectContent>
            </Select>
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
      </div>
    </section>
  );
}

export default Store;
