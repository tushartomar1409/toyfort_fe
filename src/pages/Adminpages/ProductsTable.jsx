import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";


const initialProducts = [
    {
        id: 3043,
        name: "Tushar",
        sku: "",
        type: "Physical",
        category: ["School Items", "Kids Bed", "Books", "Sticker Books"],
        plan: "Promote",
        status: "Active",
        stock: 4,
        views: 4,
        date: "2025-03-04 / 13:01",
        image: "https://via.placeholder.com/100x100?text=Tushar",
    },
    {
        id: 3042,
        name: "Checking",
        sku: "",
        type: "Physical",
        category: ["Baby Gear", "Breast Pump"],
        plan: "Promote",
        status: "In Stock (1)",
        stock: 1,
        views: 4,
        date: "2024-12-09 / 11:20",
        image: "https://via.placeholder.com/100x100?text=Tushar", // Simulate image fail
    },
];

function ProductsTable() {
    const [products, setProducts] = useState(initialProducts);
    const [search, setSearch] = useState("");

    const handleDelete = (id) => {
        console.log("Deleting ID:", id);
        if (window.confirm("Are you sure you want to delete this product?")) {
            setProducts(products.filter((product) => product.id !== id));
        }
    };

    return (
        <div className="p-4 sm:p-6">
            <h1 className="text-xl sm:text-2xl font-bold mb-6">Products</h1>

            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                <select className="p-2 border border-gray-300 rounded w-full">
                    <option value="">Product Type</option>
                    <option value="all">All</option>
                    <option value="physical">Physical</option>
                </select>

                <select className="p-2 border border-gray-300 rounded w-full">
                    <option value="">Category</option>
                    <option value="all">All</option>
                </select>

                <select className="p-2 border border-gray-300 rounded w-full">
                    <option value="">Subcategory</option>
                    <option value="all">All</option>
                </select>

                <select className="p-2 border border-gray-300 rounded w-full">
                    <option value="">Stock</option>
                    <option value="all">All</option>
                    <option value="in">In Stock</option>
                    <option value="out">Out of Stock</option>
                </select>

                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="p-2 border border-gray-300 rounded w-full"
                />

                <button className="bg-[#00C897] text-white px-4 py-2 rounded w-full font-semibold">
                    Filter
                </button>
            </div>

            {/* Product Table */}
            <div className="overflow-x-auto">
                <table className="min-w-[1000px] w-full text-sm border border-gray-200 rounded-md overflow-hidden">
                    <thead className="bg-gray-100 text-gray-600 text-left">
                        <tr>
                            <th className="p-3">ID</th>
                            <th className="p-3">Product</th>
                            <th className="p-3">SKU</th>
                            <th className="p-3">Type</th>
                            <th className="p-3">Category</th>
                            <th className="p-3">Plan</th>
                            <th className="p-3">Stock</th>
                            <th className="p-3">Views</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Options</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {products
                            .filter((product) =>
                                product.name.toLowerCase().includes(search.toLowerCase())
                            )
                            .map((product) => (
                                <tr key={product.id} className="border-t hover:bg-gray-50">
                                    <td className="p-3 font-semibold">{product.id}</td>

                                    {/* Product Name + Image */}
                                    <td className="p-3 flex items-center gap-3">
                                        <img
                                            src={product.image}
                                            onError={(e) =>
                                                (e.target.src = "https://via.placeholder.com/100x100?text=No+Image")
                                            }
                                            alt={product.name}
                                            className="w-16 h-16 object-cover bg-gray-100 rounded"
                                        />
                                        <span className="font-medium">{product.name}</span>
                                    </td>

                                    <td className="p-3 text-gray-500">{product.sku || "--"}</td>
                                    <td className="p-3">{product.type}</td>

                                    <td className="p-3 whitespace-pre-line">
                                        {product.category.map((cat, i) => `${i + 1}. ${cat}`).join("\n")}
                                    </td>

                                    <td className="p-3">
                                        <button className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 text-sm rounded flex items-center gap-1">
                                            <span>+</span> Promote
                                        </button>
                                    </td>

                                    <td
                                        className={`p-3 font-semibold ${product.status.toLowerCase().includes("out")
                                            ? "text-red-500"
                                            : "text-green-600"
                                            }`}
                                    >
                                        {product.status}
                                    </td>

                                    <td className="p-3">{product.views}</td>
                                    <td className="p-3 whitespace-nowrap">{product.date}</td>

                                    {/* Edit + Delete */}
                                    <td className="p-3 flex gap-2">
                                        <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded">
                                            <Pencil size={16} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="p-2 bg-gray-100 hover:bg-gray-200 rounded"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductsTable;
