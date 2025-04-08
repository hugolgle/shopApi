import React from "react";
import { DialogFooter, DialogHeader, DialogTitle } from "../dialog";
import { Button } from "../button";
import { Label } from "../label";
import { Input } from "../input";

function FormProduct({ editMode }: { editMode?: boolean }) {
  return (
    <>
      <DialogHeader>
        <DialogTitle>
          {editMode ? "Modifier le" : "Ajouter un"} produit
        </DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Nom
          </Label>
          <Input id="name" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="description" className="text-right">
            Description
          </Label>
          <Input id="description" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="brand" className="text-right">
            Marque
          </Label>
          <Input id="brand" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="price" className="text-right">
            Prix
          </Label>
          <Input id="price" className="col-span-3" type="number" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="reference" className="text-right">
            Réference
          </Label>
          <Input id="reference" className="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit"> {editMode ? "Modifier" : "Ajouter"}</Button>
      </DialogFooter>
    </>
  );
}

export default FormProduct;
