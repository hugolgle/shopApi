import React, { Fragment, useState } from "react";
import { DialogFooter, DialogHeader, DialogTitle } from "../dialog";
import { Button } from "../button";
import { Label } from "../label";
import { Input } from "../input";
import { useFormik } from "formik";
import * as yup from "yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { productService } from "@/services/Product.service";
import { ProductForm } from "@/interface/product.interface";
import { toast } from "sonner";
import { AxiosError } from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { categoryService } from "@/services/Category.service";
import { Category } from "@/interface/category.interface";

const validationSchema = yup.object().shape({
  name: yup.string().required("Product name is required"),
  description: yup.string().required("Product description is required"),
  price: yup
    .number()
    .positive("Price must be a positive number")
    .required("Product price is required"),
  brand: yup.string().required("Brand is required"),
  reference: yup.string().required("Reference is required"),
  categoryId: yup.number().required("Category ID is required"),
});

function FormProduct({
  editMode,
  refetch,
}: {
  editMode?: boolean;
  refetch: () => void;
}) {
  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const response = await categoryService.getAll();
      return response.data.result;
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });

  const [url, setUrl] = useState<string>("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);

      // Envoie au backend
      const URL = import.meta.env.VITE_BACKEND_URL + "file";
      const response = await fetch(URL, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const data = await response.json();
      setUrl(data.url);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      brand: "",
      price: 1,
      reference: "",
      imagePath: "",
      categoryId: "",
    },
    validationSchema,
    validateOnMount: true,
    onSubmit: async (values: ProductForm) => {
      const newValues = {
        ...values,
        imagePath: url,
        categoryId: parseFloat(values.categoryId),
      };

      mutation.mutate({ data: newValues });
    },
  });

  const mutation = useMutation({
    mutationFn: productService.create,
    onSuccess: () => {
      toast.success("Ajout réussie");
      refetch();
    },
    onError: (err: AxiosError) => {
      toast.error(err.message);
    },
  });

  return (
    <Fragment>
      <DialogHeader>
        <DialogTitle>
          {editMode ? "Modifier le" : "Ajouter un"} produit
        </DialogTitle>
      </DialogHeader>
      <div className="flex items-center gap-4">
        <Label htmlFor="imagePath" className="w-1/4 text-right truncate">
          Image
        </Label>
        <div className="w-3/4">
          <Input
            id="imagePath"
            className="col-span-3"
            type="file"
            onChange={handleFileChange}
          />
          {formik.touched.imagePath && formik.errors.imagePath && (
            <p className="text-[10px] text-left flex items-start w-full text-red-500 pl-2 pt-2">
              {formik.errors.imagePath}
            </p>
          )}
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid gap-4 py-4">
          <div className="flex items-center gap-4">
            <Label htmlFor="name" className="w-1/4 text-right truncate">
              Nom
            </Label>
            <div className="w-3/4">
              <Input
                id="name"
                className="col-span-3"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-[10px] text-left flex items-start w-full text-red-500 pl-2 pt-2">
                  {formik.errors.name}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="description" className="w-1/4 text-right truncate">
              Description
            </Label>
            <div className="w-3/4">
              <Input
                id="description"
                className="col-span-3"
                {...formik.getFieldProps("description")}
              />
              {formik.touched.description && formik.errors.description && (
                <p className="text-[10px] text-left flex items-start w-full text-red-500 pl-2 pt-2">
                  {formik.errors.description}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="brand" className="w-1/4 text-right truncate">
              Marque
            </Label>
            <div className="w-3/4">
              <Input
                id="brand"
                className="col-span-3"
                {...formik.getFieldProps("brand")}
              />
              {formik.touched.brand && formik.errors.brand && (
                <p className="text-[10px] text-left flex items-start w-full text-red-500 pl-2 pt-2">
                  {formik.errors.brand}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="price" className="w-1/4 text-right truncate">
              Prix
            </Label>
            <div className="w-3/4">
              <Input
                id="price"
                className="col-span-3"
                type="number"
                {...formik.getFieldProps("price")}
              />
              {formik.touched.price && formik.errors.price && (
                <p className="text-[10px] text-left flex items-start w-full text-red-500 pl-2 pt-2">
                  {formik.errors.price}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="reference" className="w-1/4 text-right truncate">
              Référence
            </Label>
            <div className="w-3/4">
              <Input
                id="reference"
                className="col-span-3"
                {...formik.getFieldProps("reference")}
              />
              {formik.touched.reference && formik.errors.reference && (
                <p className="text-[10px] text-left flex items-start w-full text-red-500 pl-2 pt-2">
                  {formik.errors.reference}
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="reference" className="w-1/4 text-right truncate">
              Catégorie
            </Label>
            <div className="w-3/4">
              <Select
                name="categoryId"
                value={formik.values.categoryId.toString()}
                onValueChange={(value) =>
                  formik.setFieldValue("categoryId", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Entrez la catégorie" />
                </SelectTrigger>
                <SelectContent>
                  {data?.map((category: Category) => (
                    <SelectItem
                      key={category.id}
                      className="hover:bg-accent"
                      value={category.id.toString()}
                    >
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {formik.touched.categoryId && formik.errors.categoryId && (
                <p className="text-[10px] text-left flex items-start w-full text-red-500 pl-2 pt-2">
                  {formik.errors.categoryId}
                </p>
              )}
            </div>
          </div>
          <div>
            <input
              type="hidden"
              id="imagePath"
              {...formik.getFieldProps("imagePath")}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">{editMode ? "Modifier" : "Ajouter"}</Button>
        </DialogFooter>
      </form>
    </Fragment>
  );
}

export default FormProduct;
