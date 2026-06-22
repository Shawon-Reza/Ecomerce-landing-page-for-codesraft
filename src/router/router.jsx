import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage"
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CheckoutPage from "../pages/CheckoutPage";
import CartPage from "../pages/CartPage";
import Not_FoundPage from "../pages/Not_FoundPage";
import Products from "../pages/Products";


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    label: 'Home'
  },
  {
    path: '/product/:id',
    element: <ProductDetailsPage />,
    label: 'Product Details'
  },
  {
    path: '/cart',
    element: <CartPage />,
    label: 'Shopping Cart'
  },
  {
    path: '/checkout',
    element: <CheckoutPage />,
    label: 'Checkout'
  },
  {
    path: '/all_products',
    element: <Products />,
    label: 'All Products'
  },


  {
    path: "*",
    element: <Not_FoundPage />,
    label: "Not Found"
  }
]);

export default router;