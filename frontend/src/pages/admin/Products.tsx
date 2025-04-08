import { DataTableDemo } from "@/components/ui/admin/DataTable";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { productService } from "@/services/Product.service";
import { useQuery } from "@tanstack/react-query";
import bag from "@/assets/img/bag.png";
import Loader from "@/components/ui/loader";
import { Product } from "@/interface/product.interface";
import { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical, Pencil, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatCurrency } from "@/utils/utils";
import FormProduct from "@/components/ui/admin/formProduct";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "imagePath",
    header: "Image",
    cell: () => (
      <img src={bag} alt="Produit" className="w-12 h-12 object-cover" />
    ),
  },
  {
    accessorKey: "name",
    header: "Nom",
  },
  {
    accessorKey: "brand",
    header: "Marque",
  },
  {
    accessorKey: "reference",
    header: "Référence",
  },

  {
    accessorKey: "price",
    header: "Prix",
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      return <div>{formatCurrency.format(price)}</div>;
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="text-right"></div>,
    cell: () => {
      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <EllipsisVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent side="left">
              <DropdownMenuItem>
                <Trash className="mr-2 h-4 w-4" />
                Suprimer
              </DropdownMenuItem>
              <Dialog>
                <DialogTrigger asChild>
                  <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                    <Pencil className="mr-2 h-4 w-4" />
                    Modifier
                  </DropdownMenuItem>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <FormProduct editMode />
                </DialogContent>
              </Dialog>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

function Products() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await productService.getAll();
      return response.data.result;
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-lg mb-4">
          Liste des produits disponibles dans la boutique.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="btn btn-primary">Ajouter un produit</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <FormProduct />
          </DialogContent>
        </Dialog>
      </div>
      <DataTableDemo data={data} columns={columns} />
    </>
  );
}

export default Products;
