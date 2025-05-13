import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../lib/products";
import { useNavigate } from "@tanstack/react-router";
import Header from "../components/header";

export const Route = createFileRoute("/")({
    component: Index,
});

const heroBg =
  "https://www.maybelline.vn/-/media/project/loreal/brand-sites/mny/apac/vn/carousel/fitme-matte-poreless-foundation-carousel.jpg?rev=ff6e267692d4477f911e86f6cd0df643&cx=0.17&cy=0.34&cw=1440&ch=540&hash=E99097910DDC6416E300421F8C185250";
const fitmeBottle =
  "https://www.maybelline.vn/-/media/project/loreal/brand-sites/mny/apac/vn/products/face/foundation/fit-me-matte-poreless-foundation/maybelline-fitme-liquid-bottle-30ml-sasia-110-primary.png?rev=7f70fe606cc446aba2e36d11e41c8dcb&cx=0.25&cy=0.31&cw=169&ch=169&hash=8D4CE65A18F3817612E1DF29088D0587";

function Index() {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-100 min-h-screen w-full">
            <Header />

            {/* Hero Section - Redesigned */}
            <section className="relative w-full bg-white flex items-center justify-center overflow-hidden" style={{ minHeight: '480px' }}>
                {/* Background Image */}
                <img
                src={heroBg}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover object-center z-0"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-10" />
                {/* Main Content */}
                <div className="absolute bottom-0 left-0 z-20 flex flex-row items-end justify-between w-full px-10">
                {/* Left: Product and Text */}
                <div className="flex flex-col justify-end items-start h-full max-w-lg pb-8">
                    <div className="flex items-end gap-4 mb-6">
                    <img src={fitmeBottle} alt="Fit Me Bottle" className="w-44 h-44 object-contain" />
                    </div>
                    <h1 className="text-5xl font-extrabold text-white mb-2 tracking-tight">FIT ME<sup className="text-2xl align-super">®</sup></h1>
                    <div className="text-lg md:text-xl text-white font-medium mb-6">KEM NỀN DẠNG LỎNG MATTE + PORELESS LIQUID FOUNDATION</div>
                </div>
                
                </div>
            </section>

            {/* Products Section Header */}
            <section className="w-full flex flex-col gap-6 px-8 py-6 bg-white border-b border-gray-200">
                <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">Sản phẩm</span>
                </div>
                <button className="flex items-center gap-2 text-lg font-bold uppercase border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
                    Tất cả sản phẩm <ChevronRight className="w-6 h-6" />
                </button>
                </div>

                {/* Product Carousel */}
                <div className="relative">
                {/* Carousel Left Arrow */}
                <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-100">
                    <ChevronLeft className="w-7 h-7 text-black" />
                </button>
                <div className="flex gap-6 overflow-x-auto scrollbar-hide px-12">
                    {/* Product Cards */}
                    {products.map((product, idx) => (
                        <div
                            onClick={() => {
                            navigate({ to: `/product/${product.id}` });
                            }}
                            key={idx}
                            className="flex flex-col items-center bg-white rounded-xl border border-gray-200 shadow-sm px-6 py-8 min-w-[220px] max-w-[240px] w-full mx-auto relative transition-all duration-200 hover:border-4 hover:border-black hover:shadow-lg cursor-pointer"
                        >
                            <img src={product.img} alt={product.title} className="h-48 object-cover mb-4" />
                            <div className="text-lg font-extrabold text-center mb-2 uppercase leading-tight">{product.title}</div>
                            <button className="w-full bg-black text-white font-bold py-3 rounded text-base uppercase hover:bg-gray-900 transition">Mua ngay</button>
                        </div>
                    ))}
                </div>
                {/* Carousel Right Arrow */}
                <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-gray-100">
                    <ChevronRight className="w-7 h-7 text-black" />
                </button>
                </div>
            </section>
        </div>
    );
}

export default Index;
