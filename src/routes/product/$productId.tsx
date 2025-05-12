import { createFileRoute } from "@tanstack/react-router";
import Header from "../../components/header";


export const Route = createFileRoute("/product/$productId")({
    component: ProductDetail,
  });
  

function ProductDetail() {
  const { productId } = Route.useParams();
  return (
    <div className="bg-gray-100 min-h-screen w-full">
        <Header />
        <nav className="w-full bg-black text-white flex justify-center items-center py-2 border-b border-gray-800">
          <ul className="flex flex-wrap gap-8 font-bold uppercase text-sm md:text-base tracking-wide">
            <li className="cursor-pointer hover:text-pink-400">Tất cả sản phẩm</li>
            <li className="cursor-pointer hover:text-pink-400">Mắt</li>
            <li className="cursor-pointer hover:text-pink-400">Mặt</li>
            <li className="cursor-pointer hover:text-pink-400">Môi</li>
            <li className="cursor-pointer hover:text-pink-400">Mẹo & Xu hướng</li>
            <li className="cursor-pointer hover:text-pink-400">Studio làm đẹp ảo</li>
            <li className="cursor-pointer hover:text-pink-400">Về Maybelline</li>
          </ul>
        </nav>
    </div>
  );
}

export default ProductDetail;
