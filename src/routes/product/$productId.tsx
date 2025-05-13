import { createFileRoute } from "@tanstack/react-router";
import Header from "../../components/header";
import { products } from "../../lib/products";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../components/ui/accordion";
import { useState } from "react";

export const Route = createFileRoute("/product/$productId")({
    component: ProductDetail,
  });
  

function ProductDetail() {
  const { productId } = Route.useParams();
  const product = products.find((product) => product.id === Number(productId));

  if (!product) {
    return(
      <div className="min-h-screen w-full"> 
        <Header />
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
      content: '<p>KEM NỀN FIT ME® MATTE + PORELESS FOUNDATION. KEM NỀN SIÊU NHẸ NÀY LÀM MỊN VÀ LÀM MỜ LỖ CHÂN LÔNG, CHO LỚP NỀN MỊN MÀNG, TỰ NHIÊN.</p>'
    },
    {
      title: 'CÔNG DỤNG',
      content: '<p>LÀ LỰA CHỌN LÝ TƯỞNG CHO DA THƯỜNG VÀ DA DẦU, CÔNG THỨC KEM NỀN MỊN ĐỘC QUYỀN CỦA CHÚNG TÔI CÓ CÁC HẠT PHẤN SIÊU NHỎ GIÚP KIỂM SOÁT BÓNG NHỜN VÀ LÀM MỜ LỖ CHÂN LÔNG.</p><br/><p>KEM NỀN THU NHỎ LỖ CHÂN LÔNG.</p><br/><p>ĐÃ ĐƯỢC BÁC SĨ DA LIỄU KIỂM NGHIỆM.</p><br/><p>ĐÃ ĐƯỢC KIỂM NGHIỆM DỊ ỨNG.</p><br/><p>KHÔNG GÂY MỤN.</p>'
    },
    {
      title: 'CÁCH SỬ DỤNG',
      content: '<p>THOA KEM NỀN LÊN DA VÀ TÁN ĐỀU VỚI ĐẦU NGÓN TAY HOẶC MÚT TRANG ĐIỂM.</p>'
    },
    {
      title: 'THÀNH PHẦN',
      content: '<p>G853331 THÀNH PHẦN: AQUA / NƯỚC / EAU CYCLOHEXASILOXANE NYLON-12 ISODODECANE ALCOHOL DENAT. CYCLOPENTASILOXANE PEG-10 DIMETHICONE CETYL PEG/PPG-10/1 DIMETHICONE PEG-20 POLYGLYCERYL-4 ISOSTEARATE DISTEARDIMONIUM HECTORITE PHENOXYETHANOL MAGNESIUM SULFATE DISODIUM STEAROYL GLUTAMATE HDI/TRIMETHYLOL HEXYLLACTONE CROSSPOLYMER TITANIUM DIOXIDE METHYLPARABEN ACRYLATES COPOLYMER TOCOPHEROL BUTYLPARABEN ALUMINUM HYDROXIDE ALUMINA SILICA GLYCERIN [+/- CÓ THỂ CHỨA CI 77891 / TITANIUM DIOXIDE CI 77491, CI 77492, CI 77499 / IRON OXIDES ] F.I.L. D166390/3</p>'
    }
  ];

  const colorTabs = [
    "Tất cả các màu",
    "Màu Beige",
  ];

  function getColorFamily(title: string) {
    if (title.toLowerCase().includes("beige")) return "Màu Beige";
    if (title.toLowerCase().includes("light")) return "Màu Light";
    if (title.toLowerCase().includes("nude")) return "Màu Nude";
    return "Tất cả các màu";
  }

  const [selectedTab, setSelectedTab] = useState("Tất cả các màu");
  const [selectedSwatch, setSelectedSwatch] = useState(0);

  const filteredProducts = selectedTab === "Tất cả các màu"
    ? products
    : products.filter(p => getColorFamily(p.title) === selectedTab);

  const selectedProductSwatch = filteredProducts[selectedSwatch] || filteredProducts[0];

  // Color mapping for product swatches
  const colorMap: Record<number, string> = {
    1: "#ffe1c9",
    2: "#ffecd9",
    3: "#ffdec9",
    4: "#f3d7c7",
    5: "#ebc5ac",
    6: "#e8c4a6",
    7: "#e9bf9a",
    8: "#eac0ac",
    9: "#eab59c",
    10: "#ebc0a5",
  };

  function getProductColor(productId: number) {
    return colorMap[productId] || "#e0cfc0";
  }

  return (
    <div className="min-h-screen w-full">
        <Header />
        <div className="flex flex-col w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 py-12 container mx-auto">
            {/* Left: Product Image & Swatch */}
            <div className="flex flex-col items-center col-span-2 space-y-6">
              <div className="w-[400px] h-[400px] flex flex-row gap-4">
                <img
                  src={selectedProductSwatch.img}
                  alt="Product"
                  className="w-full h-full object-contain mb-6"
                />
                <img 
                  src={selectedProductSwatch.sub_img}
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
              <h1 className="text-4xl font-black mb-2">FIT ME®</h1>
              <h2 className="text-xl font-bold mb-2 uppercase">KEM NỀN DẠNG LỎNG MATTE + PORELESS LIQUID FOUNDATION</h2>
              <div className="text-2xl font-semibold text-gray-800 mb-4">₫{product.price?.toLocaleString('vi-VN')}</div>
              {/* Tabs */}
              <div className="flex space-x-6 border-b border-black mb-4 overflow-x-auto">
                {colorTabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => {
                      setSelectedTab(tab);
                      setSelectedSwatch(0);
                    }}
                    className={`pb-2 uppercase text-sm whitespace-nowrap ${
                      selectedTab === tab
                        ? "border-b-2 border-black font-bold"
                        : "text-gray-500"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {/* Color Swatches */}
              <div className="flex flex-wrap gap-4 mb-2">
                {filteredProducts.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedSwatch(i)}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-150 ${
                      i === selectedSwatch ? "border-black" : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: getProductColor(p.id),
                    }}
                  />
                ))}
              </div>
              {/* Selected shade name */}
              <div className="font-black text-xs mt-3 mb-6 uppercase">
                {selectedProductSwatch?.title}
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
                        <div className="p-4 text-xs font-normal" dangerouslySetInnerHTML={{ __html: section.content }} />
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
