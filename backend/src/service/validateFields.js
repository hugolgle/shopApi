const yup = require("yup");

/**
 *  Service permettant de valider les champs entrés par l'utilisateur
 *
 *  Retourne un Boolean en fonction de la validité des champs.
 *  Si les champs sont invalides, un message d'erreur est retourné.
 */
module.exports = {
  user: yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format"
      ),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    address: yup.string().optional(),
    city: yup.string().optional(),
  }),

  product: yup.object({
    name: yup.string().required("Product name is required"),
    description: yup.string().required("Product description is required"),
    price: yup
      .number()
      .positive("Price must be a positive number")
      .required("Product price is required"),
    brand: yup.string().required("Brand is required"),
    reference: yup.string().required("Reference is required"),
    categoryId: yup.number().required("Category ID is required"),
  }),

  category: yup.object({
    name: yup.string().required("Category name is required"),
  }),

  commands: yup.object({
    userId: yup.number().required("User ID is required"),
    commandStateId: yup.number().required("Command state ID is required"),
    stripeSession: yup.string().required("stripeSession is required"),
  }),

  commandsDetails: yup.object({
    commandId: yup.string().required("Command Id is required"),
    productId: yup.string().required("Product Id is required"),
    quantity: yup.number().required("quantity is required"),
  }),

  commandsState: yup.object({
    name: yup.string().required("Command state name is required"),
  }),

  role: yup.object({
    name: yup.string().required("Role name is required"),
  }),
};
