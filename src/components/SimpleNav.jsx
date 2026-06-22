import { Link } from 'react-router'
import { FaShoppingCart } from 'react-icons/fa'
import { useCartStore } from '../store/cartStore'

export default function SimpleNav() {
  const totalItems = useCartStore((state) => state.getTotalItems())

  return (
    <nav className="bg-[#0F1624] text-white p-4">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          REZA
        </Link>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-yellow-500">Home</Link>
          <Link to="/cart" className="flex items-center gap-2 hover:text-yellow-500">
            <FaShoppingCart />
            <span>{totalItems}</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
