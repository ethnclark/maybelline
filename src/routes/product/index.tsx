import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import { products } from "../../lib/products";
import Header from "../../components/header";

export const Route = createFileRoute("/product")({
    component: ProductList,
});

function ProductList() {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-100 min-h-screen w-full">
            <Header />
            
            {/* Products Section */}
            <section className="w-full px-4 md:px-8 py-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">Tất cả sản phẩm</h1>
                        <p className="text-gray-600 mt-2">Khám phá bộ sưu tập sản phẩm của chúng tôi</p>
                    </div>

                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {products.map((product, idx) => (
                            <div
                                onClick={() => {
                                    navigate({ to: `/product/${product.id}` });
                                }}
                                key={idx}
                                className="flex flex-col items-center bg-white rounded-xl border border-gray-200 shadow-sm px-6 py-8 relative transition-all duration-200 hover:border-4 hover:border-black hover:shadow-lg cursor-pointer"
                            >
                                <img 
                                    src={product.img} 
                                    alt={product.title} 
                                    className="h-48 object-cover mb-4" 
                                />
                                <div className="text-lg font-extrabold text-center mb-2 uppercase leading-tight">
                                    {product.title}
                                </div>
                                {product.price && (
                                    <div className="text-lg font-bold mb-4">
                                        {product.price.toLocaleString('vi-VN')}đ
                                    </div>
                                )}
                                <button className="w-full bg-black text-white font-bold py-3 rounded text-base uppercase hover:bg-gray-900 transition">
                                    Mua ngay
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductList;