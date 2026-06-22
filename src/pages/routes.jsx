import HomePage from '../pages/HomePage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'

export const routes = [
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
  }
]
