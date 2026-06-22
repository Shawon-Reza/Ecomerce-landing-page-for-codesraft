import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage"
import ProductDetailsPage from "../pages/ProductDetailsPage";


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
  // {
  //   path: '/cart',
  //   element: <CartPage />,
  //   label: 'Shopping Cart'
  // },
  // {
  //   path: '/checkout',
  //   element: <CheckoutPage />,
  //   label: 'Checkout'
  // }
]);

export default router;