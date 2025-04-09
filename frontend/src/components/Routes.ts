export const ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
  HOME: "/",
  STORE: "/store",
  CART: "/cart",
  PRODUCT_ID: "/product/:id",
  DASHBOARD_CUSTOMER: {
    COMMANDS: "/dashboard/commands",
  },
  ADMIN: {
    HOME: "/admin/dashboard",
    COMMANDS: "/admin/dashboard/commands",
    USERS: "/admin/dashboard/users",
    PRODUCTS: "/admin/dashboard/products",
  },
  PAYMENT: {
    SUCCESS: "/payment/:sessionId/success",
    CANCEL: "/payment/:sessionId/cancel",
  },
};
