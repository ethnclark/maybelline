import { createFileRoute } from "@tanstack/react-router";
import Header from "../../components/header";
import { products } from "../../lib/products";
import React, { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../components/ui/accordion";

export const Route = createFileRoute("/product/$productId")({
    component: ProductDetail,
  });
  

function ProductDetail() {
  const { productId } = Route.useParams();
  const [openIndex, setOpenIndex] = useState<number>(0);
  const product = products.find((product) => product.id === Number(productId));

  if (!product) {
    return(
      <div className="min-h-screen w-full"> 
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
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Sản phẩm không tồn tại</h1>
          <p className="text-gray-600">Vui lòng kiểm tra lại ID sản phẩm</p>
        </div>
      </div>
    );
  }

  const sections = [
    {
      title: 'MÔ TẢ SẢN PHẨM',
      content: 'KEM NỀN FIT ME® MATTE + PORELESS FOUNDATION. KEM NỀN SIÊU NHẸ NÀY LÀM MỊN VÀ LÀM MỜ LỖ CHÂN LÔNG, CHO LỚP NỀN MỊN MÀNG, TỰ NHIÊN.'
    },
    {
      title: 'CÔNG DỤNG',
      content: 'Kiểm soát dầu, che phủ lỗ chân lông, cho lớp nền lì tự nhiên.'
    },
    {
      title: 'CÁCH SỬ DỤNG',
      content: 'Lấy một lượng vừa đủ, chấm lên mặt và tán đều bằng cọ, mút hoặc tay.'
    },
    {
      title: 'THÀNH PHẦN',
      content: 'Xem chi tiết trên bao bì sản phẩm.'
    }
  ];

  return (
    <div className="min-h-screen w-full">
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
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 py-12 container mx-auto">
            {/* Left: Product Image & Swatch */}
            <div className="flex flex-col items-center col-span-2 space-y-6">
              <div className="w-[400px] h-[400px] flex flex-row gap-4">
                <img
                  src={product.img} // placeholder
                  alt="Product"
                  className="w-full h-full object-contain mb-6"
                />
                <img 
                  src={product.sub_img} 
                  alt="Product" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="flex flex-row gap-4">
                <img 
                  src="https://www.maybelline.vn/-/media/project/loreal/brand-sites/mny/apac/vn/products/face/foundation/fit-me-matte-poreless-foundation/maybelline-fit-me-matte-poreless-foundation-105-fair-ivory-041554538328-o.jpg?rev=f067611f94354e9f80e6dc15397c1aa5&cx=0.46&cy=0.5&cw=380&ch=565&hash=10E345158D737F4A8F224C7B33E41109" 
                  alt="" 
                  className="w-[300px] h-[300px] object-contain mb-6"
                />
                <img 
                  src="https://www.maybelline.vn/-/media/project/loreal/brand-sites/mny/apac/vn/products/face/foundation/fit-me-matte-poreless-foundation/maybelline-fit-me-matte-poreless-foundation-105-fair-ivory-041554538328-back.jpg?rev=68b58aa8e44d4c7fa791907f40f3a73c&cx=0.46&cy=0.5&cw=380&ch=565&hash=A41DDE6957F995B9C25FD61A05ED992A" 
                  alt="" 
                  className="w-[300px] h-[300px] object-contain mb-6" 
                />
              </div>
            </div>
            {/* Right: Product Info & Options */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-black mb-2">{product.title}</h1>
              <h2 className="text-xl font-bold mb-2 uppercase">{product.description}</h2>
              <div className="text-2xl font-semibold text-gray-800 mb-4">₫{product.price}</div>
              {/* Tabs */}
              <div className="flex space-x-6 border-b border-black mb-4 overflow-x-auto">
                <button className="pb-2 border-b-2 border-black uppercase text-sm">Tất cả các màu</button>
                <button className="pb-2 uppercase text-gray-500 text-sm">Màu Beige</button>
                <button className="pb-2 uppercase text-gray-500 text-sm">Màu Light</button>
                <button className="pb-2 uppercase text-gray-500 text-sm">Màu Nude</button>
              </div>
              {/* Color Swatches */}
              <div className="flex flex-wrap gap-4 mb-6">
                {[...Array(10)].map((_, i) => (
                  <button
                    key={i}
                    className={`w-10 h-10 rounded-full border-2 ${i === 0 ? 'border-black' : 'border-gray-300'} bg-gray-200`}
                  />
                ))}
              </div>
              {/* Buy Now Button */}
              <button className="bg-black text-white font-bold uppercase py-4 rounded w-full text-lg hover:underline transition-colors">Mua ngay</button>
              {/* information product */}
              <div className="mt-8 w-full">
                <Accordion type="single" collapsible>
                  {sections.map((section, idx) => (
                    <AccordionItem value={`item-${idx}`} key={section.title}>
                      <AccordionTrigger>
                        <span className="text-sm font-black">{section.title}</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="p-4 text-xs font-normal">
                          {section.content}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ProductDetail;
