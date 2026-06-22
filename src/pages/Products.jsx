import React, { useState, useEffect } from 'react';
import { useCartStore } from '../store/cartStore';
import { products } from '../data/products';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const addItem = useCartStore((state) => state.addItem);

    const itemsPerPage = 8;

    // Filter products
    useEffect(() => {
        let result = [...products];

        // Search filter
        if (searchTerm) {
            result = result.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Category filter
        if (selectedCategory !== 'All') {
            result = result.filter(product => product.category === selectedCategory);
        }

        setFilteredProducts(result);
        setCurrentPage(1);
    }, [searchTerm, selectedCategory]);

    // Pagination
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const currentProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleAddToCart = (product) => {
        addItem(product);
        // Optional: Show toast notification
        alert(`${product.name} added to cart!`);
    };

    const categories = ['All', ...new Set(products.map(p => p.category))];

    return (
        <div>
            <Navigation />
            <div className="max-w-7xl mx-auto px-4 py-8">


                <h1 className="text-4xl font-bold text-center mb-8">All Products</h1>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <input
                        type="text"
                        placeholder="Search watches..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    />

                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                    {currentProducts.map(product => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-700 border border-gray-100 hover:scale-103"
                        >
                            <div className="relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover"
                                />
                                {product.bestSeller && (
                                    <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        Best
                                    </div>
                                )}
                            </div>

                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
                                    <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                                        {product.category}
                                    </span>
                                </div>

                                <div className="flex items-center gap-1 text-yellow-500 mb-3">
                                    ★★★★☆ <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
                                </div>

                                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                                    {product.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div className="text-2xl font-bold text-yellow-600">
                                        ${product.price.toLocaleString()}
                                    </div>
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-3 rounded-xl flex items-center gap-2 transition-colors font-medium"
                                    >
                                        🛒 Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-3 mt-12">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 border rounded-lg disabled:opacity-50 hover:bg-gray-100"
                        >
                            Previous
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-10 h-10 rounded-lg font-medium transition-colors ${currentPage === page
                                    ? 'bg-yellow-500 text-white'
                                    : 'border hover:bg-gray-100'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 border rounded-lg disabled:opacity-50 hover:bg-gray-100"
                        >
                            Next
                        </button>
                    </div>
                )}

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-gray-500">
                        No products found matching your criteria.
                    </div>
                )}
            </div>


            <Footer />
        </div>
    );
};

export default Products;