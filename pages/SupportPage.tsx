import React from 'react';
import { ChevronRight, SearchIcon } from '../components/Icons';

const supportNav = [
  { name: 'iPhone', image: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_navicons/image-grid-iphone-nav_2x.png', width: 34 },
  { name: 'Mac', image: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_navicons/image-grid-mac-nav_2x.png', width: 110 },
  { name: 'iPad', image: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_navicons/image-grid-ipad-tn_2x.png', width: 68 },
  { name: 'Watch', image: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_navicons/image-grid-watch_2x.png', width: 42 },
  { name: 'AirPods', image: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_navicons/image-grid-airpods_2x.png', width: 66 },
  { name: 'TV', image: 'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_navicons/image-grid-tv_2x.png', width: 72 },
];

const tools = [
    { title: "Đặt lại mật khẩu Tài khoản Apple", url: "#" },
    { title: "Kiểm tra chương trình bảo hành hoặc gói AppleCare", url: "#" },
    { title: "Thay đổi gói đăng ký", url: "#" },
];

const features = [
    {
        title: "Được xử lý thông qua AppleCare",
        desc: "Mọi gói AppleCare đều cung cấp dịch vụ bảo dưỡng tập trung cho sản phẩm Apple, với dịch vụ sửa chữa nhanh chóng, dễ dàng cho các sự cố như đánh rơi và làm đổ chất lỏng.",
        linkText: "Tìm hiểu thêm",
        image: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_content/tile-side-applecare.image.large_2x.png",
    },
    {
        title: "Sửa chữa và bảo dưỡng Apple",
        desc: "Chúng tôi có thể giúp bạn tìm trường hợp sửa chữa được Apple chứng nhận, do các chuyên đáng tin cậy thực hiện bằng linh kiện chính hãng của Apple.",
        linkText: "Bắt đầu sửa chữa",
        image: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_content/tile-feature-repair-and-service.image.large_2x.png",
    },
     {
        title: "Ứng dụng hỗ trợ của Apple",
        desc: "Yêu cầu trợ giúp cho tất cả các sản phẩm Apple của bạn ở một nơi hoặc kết nối với chuyên gia",
        linkText: "Tải về",
        image: "https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_content/tile-side-apple-support.image.large_2x.png",
    }
];

const servicePrograms = [
    "Chương trình bảo dưỡng cho Mac mini gặp sự cố không bật nguồn",
    "Chương trình bảo dưỡng cho iPhone 14 Plus gặp sự cố với camera sau",
    "15-inch MacBook Pro Battery Recall Program",
    "Xem tất cả chương trình"
];

const SupportPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans pt-[44px]">
      
      {/* Hero Section */}
      <section className="bg-no-repeat bg-center bg-cover py-16 md:py-24 text-center px-4" style={{backgroundImage: 'url(https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_heroes/hero-banner-homepage.image.large_2x.jpg)'}}>
         <div className="max-w-[980px] mx-auto flex flex-col items-center">
             <img 
                src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_heroes/support-home-apple-logo-circle-blue.png" 
                alt="Apple Support Logo" 
                className="w-[80px] h-[80px] md:w-[159px] md:h-[159px] mb-6 object-contain"
             />
             <h1 className="text-[32px] md:text-[48px] font-semibold text-[#1d1d1f] mb-4">Hỗ trợ của Apple</h1>
             <p className="text-[20px] md:text-[24px] text-[#1d1d1f]">Bạn cần trợ giúp? Bắt đầu tại đây.</p>
         </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 max-w-[980px] mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {supportNav.map((item, index) => (
                  <a key={index} href="#" className="flex flex-col items-center gap-4 group min-w-[80px]">
                      <div className="h-[70px] flex items-end">
                          <img src={item.image} alt={item.name} style={{ width: item.width }} className="object-contain" />
                      </div>
                      <span className="text-[14px] md:text-[17px] text-[#1d1d1f] group-hover:text-[#0066cc] group-hover:underline">{item.name}</span>
                  </a>
              ))}
          </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 max-w-[980px] mx-auto px-4">
          <h2 className="text-[24px] md:text-[32px] font-semibold text-[#1d1d1f] mb-8 text-center">Công cụ hỗ trợ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                  <a key={index} href={tool.url} className="bg-[#f5f5f7] rounded-[18px] p-6 text-center hover:bg-[#e8e8ed] transition-colors flex items-center justify-center min-h-[120px] shadow-sm">
                      <span className="text-[17px] font-semibold text-[#1d1d1f]">{tool.title}</span>
                  </a>
              ))}
          </div>
      </section>

      {/* Callout */}
      <section className="py-6 max-w-[980px] mx-auto px-4">
          <div className="bg-[#f5f5f7] rounded-[18px] p-6 text-center">
              <p className="text-[17px] text-[#1d1d1f]">
                  Cách lọc và chặn tin nhắn không mong muốn. <a href="#" className="text-[#0066cc] hover:underline">Tìm hiểu thêm</a>
              </p>
          </div>
      </section>

      {/* Search Section */}
      <section className="py-16 max-w-[700px] mx-auto px-4 text-center">
          <h2 className="text-[24px] md:text-[32px] font-semibold text-[#1d1d1f] mb-6">Tìm kiếm các chủ đề khác</h2>
          <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <SearchIcon />
              </div>
              <input 
                type="text" 
                placeholder="Hỗ trợ tìm kiếm" 
                className="w-full h-12 pl-12 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[17px]" 
              />
          </div>
      </section>

      {/* Feature Tiles */}
      <section className="py-12 px-4 bg-white">
          <div className="max-w-[980px] mx-auto space-y-8">
              {features.map((feature, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-[18px] overflow-hidden flex flex-col md:flex-row items-center md:items-stretch shadow-sm">
                      <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center items-start text-left order-2 md:order-1">
                          <h3 className="text-[24px] md:text-[32px] font-semibold text-[#1d1d1f] mb-4">{feature.title}</h3>
                          <p className="text-[17px] text-[#1d1d1f] mb-6 leading-relaxed">{feature.desc}</p>
                          <a href="#" className="text-[#0066cc] hover:underline text-[17px] flex items-center font-medium">
                              {feature.linkText} <span className="ml-1 text-[12px]"><ChevronRight /></span>
                          </a>
                      </div>
                      <div className="md:w-1/2 w-full bg-[#f5f5f7] flex items-center justify-center order-1 md:order-2 h-[300px] md:h-auto">
                          <img src={feature.image} alt={feature.title} className="max-w-[80%] max-h-[80%] object-contain" />
                      </div>
                  </div>
              ))}
              
              {/* Counterfeit Warning Tile */}
               <div className="bg-white border border-gray-200 rounded-[18px] p-8 md:p-12 shadow-sm">
                   <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-2 uppercase text-gray-500">Thận trọng với linh kiện giả</h3>
                   <div className="text-[17px] text-[#1d1d1f] space-y-4 leading-relaxed">
                       <p>Một số bộ chuyển đổi điện và pin giả của bên thứ ba có thể không được thiết kế đúng cách và có nguy cơ gây ra các sự cố về an toàn. Để đảm bảo nhận được pin chính hãng của Apple trong quá trình thay thế pin, bạn nên tìm đến <a href="#" className="text-[#0066cc] hover:underline">Nhà cung cấp dịch vụ ủy quyền của Apple</a>. Nếu cần bộ chuyển đổi thay thế để sạc thiết bị Apple, bạn nên mua bộ chuyển đổi điện của Apple.</p>
                       <p>Ngoài ra, màn hình thay thế không chính hãng có thể làm giảm chất lượng hình ảnh và hoạt động không đúng cách. Dịch vụ sửa chữa màn hình được Apple chứng nhận sẽ do các chuyên gia đáng tin cậy thực hiện, sử dụng linh kiện chính hãng của Apple.</p>
                   </div>
               </div>
          </div>
      </section>

      {/* Service Programs */}
      <section className="py-16 px-4 bg-white border-t border-gray-200">
          <div className="max-w-[980px] mx-auto">
              <h2 className="text-[21px] font-semibold text-[#1d1d1f] mb-6">Chương trình bảo dưỡng của Apple</h2>
              <ul className="space-y-4">
                  {servicePrograms.map((program, idx) => (
                      <li key={idx}>
                          <a href="#" className="text-[#0066cc] hover:underline text-[17px] flex items-center">
                              {program} {idx === servicePrograms.length - 1 && <span className="ml-1 text-[12px]"><ChevronRight /></span>}
                          </a>
                      </li>
                  ))}
              </ul>
          </div>
      </section>

    </div>
  );
};

export default SupportPage;