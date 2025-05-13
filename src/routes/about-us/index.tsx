import { createFileRoute } from "@tanstack/react-router";
import Header from "../../components/header";

export const Route = createFileRoute("/")({
    component: AboutUs
});

function AboutUs() {
    return(
        <div className="min-h-screen w-full bg-white">
            <Header />
            
            {/* Hero Section */}
            <div className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.maybelline.vn/-/media/project/loreal/brand-sites/mny/apac/vn/about-us/maybelline_about-us_gigi_banner_1440x540_r2.jpg?rev=9ad74d4a193f4e909424d6de87e46507&cx=0.37&cy=0.38&cw=1440&ch=540&hash=79306CD0B42DB36B4577367C7748E742')] bg-cover bg-center bg-no-repeat"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
                <div className="relative h-full flex items-center justify-center">
                    <h1 className="text-6xl font-bold text-center text-white drop-shadow-lg">
                        HEY, CHÚNG TÔI LÀ MAYBELLINE
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                {/* Mission Statement */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-gray-800">Sứ Mệnh Của Chúng Tôi</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Chúng tôi đến từ New York, và ở thành phố này bạn phải sẵn sàng cho mọi thứ. 
                            Đó là lý do tại sao chúng tôi tạo ra phong cách trang điểm không phức tạp, 
                            hiệu quả cao - đã được thử và kiểm nghiệm trên đường phố.
                        </p>
                    </div>

                    {/* Vision & Mission Cards */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Tầm Nhìn</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Trở thành doanh nghiệp tiên phong tại New York. Tất cả các sản phẩm của Maybelline đều đạt được các tiêu chuẩn khắt khe nhất trên thế giới và được các thị trường khó tính nhất chấp nhận.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Sứ Mệnh</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Bằng cách áp dụng và kết hợp các công thức công nghệ tiên tiến để cho ra đời các dòng sản phẩm nổi bật. Với chuyên môn luôn bắt kịp theo xu hướng và lợi thế của New York, sứ mệnh của Maybelline là cung cấp mỹ phẩm sáng tạo, dễ tiếp cận và dễ sử dụng cho mọi phụ nữ.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;