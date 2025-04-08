import { DataTableDemo } from "@/components/ui/admin/DataTable";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAuthContext } from "@/context/AuthProvider";
import moment from "moment";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "N° de commandes",
  },
  {
    accessorKey: "createdAt",
    header: "Date de commande",
    cell: ({ row }) => {
      const now = moment(row).format("DD/MM/YYYY");

      return <div>{now}</div>;
    },
  },
  {
    accessorKey: "status.name",
    header: "Status de la commande",
  },
  {
    accessorKey: "details",
    header: "Prix",
    cell: ({ row }) => {
      return (
        <div>
          {row.original.details.reduce(
            (acc, next) => (acc += next.product.price * next.quantity),
            0
          )}
          €
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="text-right"></div>,
    cell: ({ row }) => {
      return (
        <Drawer>
          <DrawerTrigger asChild>
            <div className="w-full flex items-center justify-end">
              <Button variant={"outline"}>Détails</Button>
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>
                Commande du {moment(row.original.date).format("DD/MM/YYYY")}
              </DrawerTitle>
              <DrawerDescription>
                <p>Référence : {row.original.id}</p>
                <p>Status : {row.original.status.name}</p>
              </DrawerDescription>
            </DrawerHeader>
            <p className="pl-4 mt-10">Détails de votre commande :</p>
            <Table className="w-ful">
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead>Nom</TableHead>
                  <TableHead>Quantité</TableHead>
                  <TableHead>Prix TTC</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {row.original.details.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="rounded-lg bg-gray-100 w-16 h-16 overflow-hidden">
                        <img
                          src={item.product.imagePath}
                          alt={item.product.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </TableCell>
                    <TableCell>{item.product.name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>
                      {(item.product.price * item.quantity).toFixed(2)} €
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button className="w-fit ms-auto">Fermer</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      );
    },
  },
];

function CustomerCommands() {
  const { user } = useAuthContext();

  const data = user?.commands;
  console.log(user);

  return (
    <section className="container mx-auto mt-10">
      <h1 className="text-2xl font-boldonse font-bold">
        Bonjour {user?.firstName},
      </h1>

      <p className="text-xl mt-10">Vos commandes</p>
      <DataTableDemo data={data} columns={columns} />
    </section>
  );
}

export default CustomerCommands;
