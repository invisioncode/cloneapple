import React from 'react';

// --- Data extracted from HTML ---

const storeNav = [
  { name: 'Mac', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-mac-nav-202510?wid=400&hei=260&fmt=png-alpha' },
  { name: 'iPhone', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-iphone-nav-202509?wid=1200&hei=780&fmt=png-alpha' },
  { name: 'iPad', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha' },
  { name: 'Apple Watch', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-watch-nav-202509_GEO_VN?wid=400&hei=260&fmt=png-alpha' },
  { name: 'AirPods', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airpods-nav-202509?wid=400&hei=260&fmt=png-alpha' },
  { name: 'AirTag', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha' },
  { name: 'Apple TV 4K', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha' },
  { name: 'Phụ Kiện', image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-accessories-nav-202509?wid=400&hei=260&fmt=png-alpha' },
];

const latestProducts = [
  {
    title: 'iPhone 17 Pro',
    sub: 'Apple Intelligence',
    price: 'Từ 34.999.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-holiday-iphone-17-pro-202511?wid=960&hei=1000&fmt=jpeg&qlt=90',
    dark: false
  },
  {
    title: 'MacBook Pro 14" với M5',
    sub: 'Apple Intelligence',
    price: 'Từ 41.999.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-holiday-macbook-pro-202511?wid=960&hei=1000&fmt=jpeg&qlt=90',
    dark: false
  },
  {
    title: 'iPad Pro',
    sub: 'Apple Intelligence',
    price: 'Từ 29.999.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-holiday-ipad-pro-202511?wid=960&hei=1000&fmt=jpeg&qlt=90',
    dark: false
  },
  {
    title: 'Apple Watch Series 11',
    price: 'Từ 11.499.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-holiday-watch-s11-202511_GEO_VN?wid=960&hei=1000&fmt=jpeg&qlt=90',
    dark: false
  },
  {
    title: 'iPhone Air',
    sub: 'Apple Intelligence',
    price: 'Từ 31.999.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-holiday-iphone-air-202511?wid=960&hei=1000&fmt=jpeg&qlt=90',
    dark: false
  },
  {
    title: 'MacBook Air',
    sub: 'Apple Intelligence',
    price: 'Từ 26.508.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-holiday-macbook-air-202511?wid=960&hei=1000&fmt=jpeg&qlt=90',
    dark: false
  },
  {
    title: 'iPhone 17',
    sub: 'Apple Intelligence',
    price: 'Từ 24.999.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-holiday-iphone-17-202511?wid=960&hei=1000&fmt=jpeg&qlt=90',
    dark: false
  },
  {
    title: 'Apple Watch Ultra 3',
    price: 'Từ 23.999.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-holiday-watch-ultra-202511_GEO_VN?wid=960&hei=1000&fmt=jpeg&qlt=90',
    dark: false
  },
  {
    title: 'Apple Watch SE 3',
    price: 'Từ 6.999.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-holiday-watch-se-202511?wid=960&hei=1000&fmt=jpeg&qlt=90',
    dark: false
  }
];

const personalization = [
  {
    tag: 'KHẮC MIỄN PHÍ',
    title: 'Từ bạn, đặc biệt cho người ấy.',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-holiday-engraving-202511?wid=800&hei=1000&fmt=png-alpha',
    size: 'small',
    dark: false
  },
  {
    title: 'Tùy chỉnh máy Mac.',
    sub: 'Chọn chip, bộ nhớ, dung lượng lưu trữ và cả màu sắc.',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-customize-202510?wid=960&hei=1000&fmt=png-alpha',
    size: 'large',
    dark: false
  }
];

const holiday = [
  {
    tag: 'PHỤ KIỆN',
    title: 'Thêm chút đặc biệt nữa.',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-holiday-quick-picks-202511?wid=800&hei=1000&fmt=png-alpha',
    size: 'small',
    dark: false
  },
  {
    tag: 'MỚI',
    title: 'Ốp Lưng TechWoven MagSafe cho iPhone 17 Pro Max – Xanh Dương',
    price: '1.668.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGF94?wid=400&hei=400&fmt=jpeg&qlt=90',
    size: 'product',
    dark: false
  },
  {
    title: 'AirPods Pro 3',
    price: '6.799.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-3-hero-select-202509?wid=400&hei=400&fmt=jpeg&qlt=90',
    size: 'product',
    dark: false
  },
  {
    title: 'AirTag',
    price: '785.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airtag-single-select-202104?wid=400&hei=400&fmt=jpeg&qlt=90',
    size: 'product',
    dark: false
  },
  {
    title: 'AirPods Max - Cam',
    price: '14.999.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-select-202409-orange?wid=400&hei=400&fmt=jpeg&qlt=90',
    size: 'product',
    dark: false
  },
   {
    title: 'Apple Pencil Pro',
    price: '3.435.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX2D3?wid=400&hei=400&fmt=jpeg&qlt=90',
    size: 'product',
    dark: false
  },
    {
    title: 'iPad mini',
    price: '13.744.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-mini-select-wifi-starlight-202410?wid=400&hei=400&fmt=jpeg&qlt=90',
    size: 'product',
    dark: false
  },
    {
    title: 'AirPods 4 với Chủ Động Khử Tiếng Ồn',
    price: '4.999.000đ',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-anc-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90',
    size: 'product',
    dark: false
  }
];

const services = [
    {
        tag: 'APPLE MUSIC',
        title: 'Tặng 3 tháng sử dụng Apple Music miễn phí.',
        sub: 'Đi kèm khi mua một số thiết bị Apple.',
        image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-holiday-apple-music-202511_GEO_VN?wid=800&hei=1000&fmt=p-jpg&qlt=95',
        size: 'small',
        dark: false
    },
    {
        tag: 'APPLE TV',
        title: 'Tặng 3 tháng sử dụng Apple TV miễn phí khi bạn mua thiết bị Apple.',
        image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-holiday-apple-tv-202511?wid=800&hei=1000&fmt=p-jpg&qlt=95',
        size: 'small',
        dark: true
    },
    {
        title: 'Bốn dịch vụ của Apple. Một gói đăng ký dễ dàng.',
        image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-subscriptions-202108?wid=960&hei=1000&fmt=jpeg&qlt=90',
        size: 'large',
        dark: false
    }
]

const unique = [
  {
    tag: 'CHUYÊN GIA APPLE',
    title: 'Tìm quà tặng trực tuyến cùng Chuyên Gia Apple.',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-holiday-specialist-help-202511?wid=800&hei=833&fmt=p-jpg',
    size: 'small',
    dark: false
  },
  {
    tag: 'ỨNG DỤNG APPLE STORE',
    title: 'Cho họ biết quà đang trên đường tới.',
    sub: 'Gửi lời nhắn số đi kèm quà. Lên lịch dễ dàng, vui lúc trao, mừng khi nhận.',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-holiday-gifting-202511?wid=800&hei=1000&fmt=p-jpg',
    size: 'small',
    dark: false
  },
  {
    title: 'Đổi thiết bị cũ đủ điều kiện, nhận điểm tín dụng để mua thiết bị mới.',
    icon: 'tradein',
    size: 'xs',
    gradient: 'from-blue-50 to-blue-100',
    dark: false
  },
  {
    title: 'Thanh toán hàng tháng thật dễ dàng. Bao gồm lựa chọn lãi suất 0%.',
    icon: 'finance',
    size: 'xs',
    gradient: 'from-gray-50 to-gray-100',
    dark: false
  },
   {
    title: 'Trải nghiệm mua sắm được cá nhân hóa với ứng dụng Apple Store.',
    icon: 'app',
    size: 'xs',
    gradient: 'from-pink-50 to-pink-100',
    dark: false
  },
  {
      title: 'Tùy chỉnh một máy Mac, tạo phong cách cho một Apple Watch, riêng cho người ấy.',
      icon: 'custom',
      size: 'xs',
      gradient: 'from-yellow-50 to-yellow-100',
      dark: false
  },
  {
      title: 'Kịp thời nhận quà để chơi lễ với dịch vụ giao hàng miễn phí.',
      image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-holiday-delivery-pickup-202511_GEO_VN?wid=800&hei=1000&fmt=p-jpg',
      size: 'small',
      dark: false
  },
   {
      title: 'Dịch vụ và hỗ trợ. Chúng tôi luôn sẵn sàng hỗ trợ.',
      image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-genius-202108?wid=960&hei=1000&fmt=jpeg',
      size: 'large',
      dark: false
  }
];

const deals = [
     {
    tag: 'GIÁO DỤC',
    title: 'Tiết kiệm khi mua iPad hoặc Mac mới với chính sách trợ giá cho giáo dục.',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-bts-edu-macbook-air-ipad-air-202503?wid=800&hei=1000&fmt=p-jpg',
    size: 'small',
    dark: false
  },
  {
    tag: 'DOANH NGHIỆP NHỎ',
    title: 'Giải pháp đơn giản cho mọi công việc của bạn.',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-business-202506?wid=800&hei=1000&fmt=p-jpg',
    size: 'small',
    dark: true
  }
]

// --- Components ---

const ShelfHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="flex gap-2 items-baseline mb-6 px-6 md:px-0">
    <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1d1d1f]">{title}</h2>
    {subtitle && <span className="text-[24px] md:text-[28px] font-semibold text-[#6e6e73]">{subtitle}</span>}
  </div>
);

const StoreCard = ({ item }: { item: any }) => {
  if (item.size === 'product') {
    return (
      <div className="flex-none w-[300px] h-[480px] bg-white rounded-[18px] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-between text-center border border-gray-100 snap-center">
        <div className="w-full flex-1 flex items-center justify-center">
           <img src={item.image} alt={item.title} className="max-w-[200px] max-h-[200px] object-contain" />
        </div>
        <div className="mt-4 space-y-2">
            {item.tag && <span className="text-[10px] font-semibold text-[#bf4800] uppercase block">{item.tag}</span>}
            <h3 className="text-[17px] font-semibold text-[#1d1d1f] leading-snug">{item.title}</h3>
            <p className="text-[14px] text-[#1d1d1f]">{item.price}</p>
        </div>
      </div>
    );
  }

  if (item.size === 'xs') {
      return (
        <div className={`flex-none w-[300px] md:w-[320px] h-[240px] rounded-[18px] p-8 shadow-sm hover:scale-[1.02] transition-transform bg-gradient-to-br ${item.gradient || 'bg-white'} border border-gray-100 snap-center flex flex-col`}>
            <div className="mb-4 text-3xl text-gray-800">
                {/* Simplified Icons based on context */}
                {item.icon === 'tradein' && (
                    <svg width="40" height="56" viewBox="0 0 40 56" className="fill-[#1d1d1f]" aria-hidden="true">
                        <path d="m0 0h40v56h-40z" fill="none" />
                        <path d="m38 29.0205v9.9795c0 3.8594-3.1403 7-6.9996 7h-22c-3.8594 0-7-3.1406-7-7v-4.75h-1.2514c-.7087 0-.8958-.4824-.502-1.0337l2.2051-3.1304c.315-.4529.7875-.443 1.1025 0l2.2051 3.1403c.3839.5414.1969 1.0238-.5021 1.0238h-1.2576v4.75c0 2.7568 2.2435 5 5.0004 5h22c2.7568 0 5-2.2432 5-5v-9.9795c0-.5527.4473-1 1-1s.9996.4473.9996 1zm1.251-7.2705h-1.251v-4.75c0-3.8594-3.1403-7-6.9996-7h-22c-3.8594 0-7 3.1406-7 7v9.9795c0 .5527.4473 1 1 1s.9996-.4473.9996-1v-9.9795c0-2.7568 2.2435-5 5.0004-5h22c2.7568 0 5 2.2432 5 5v4.75h-1.258c-.6989 0-.886.4823-.502 1.0237l2.2051 3.1404c.315.4429.7875.4529 1.1025 0l2.2051-3.1305c.3937-.5513.2067-1.0336-.5021-1.0336zm-13.8013 1.6872c.2991-.2918.7214-.4372 1.2668-.4372h3.569c.5396 0 .9599.1454 1.261.4372.303.2918.4536.7004.4536 1.225v8.6845c0 .5246-.1486.9313-.4477 1.2201s-.7214.4332-1.2668.4332h-3.569c-.5454 0-.9677-.1444-1.2668-.4332s-.4496-.6955-.4496-1.2201v-8.6845c0-.5246.1505-.9333.4496-1.225zm.7038 9.7945c0 .2004.0469.3517.1447.4548.0958.1032.2424.1552.436.1552h3.524c.1935 0 .3402-.0521.4398-.1552.0997-.1032.1506-.2544.1506-.4548v-8.4546c0-.2004-.0508-.3537-.1506-.4598-.0997-.1061-.2463-.1591-.4398-.1591h-3.524c-.1935 0-.3402.053-.436.1591-.0977.1061-.1447.2593-.1447.4598zm2.3488-13.2317h-16.6196c-.5806 0-1.0401.1572-1.3773.4725s-.5054.783-.5054 1.4019v11.1256h-1.2559c-.2757 0-.5103.0824-.7038.2798s-.2903.4352-.2903.7122.0968.5138.2903.7122c.1935.1965.4281.2957.7038.2957h15.1703c-.2581-.4126-.393-.8841-.4047-1.4146 0-.1002-.002-.2004-.0059-.3006-.002-.1002-.0039-.1846-.0039-.2848h-12v-10.6512c0-.2829.0704-.4951.2111-.6366s.3519-.2122.6334-.2122h17.7686c-.0352-.4715-.1916-.9037-.4672-1.1424s-.6569-.3576-1.1437-.3576zm-.6924 5.4067h1.3802c.1114 0 .2072-.0403.2854-.1199.0801-.0796.1193-.1778.1193-.2957 0-.112-.0391-.2063-.1193-.2829-.0782-.0766-.174-.1149-.2854-.1149h-1.3802c-.1173 0-.215.0383-.2913.1149s-.1134.1709-.1134.2829c0 .1179.0371.2161.1134.2957s.174.1199.2913.1199zm-.4179 7.8983h2.2c.1887 0 .284-.1032.284-.3095 0-.0884-.027-.1611-.0809-.2171s-.1222-.0835-.2031-.0835h-2.2c-.0809 0-.1456.0275-.1941.0835s-.0719.1287-.0719.2171c0 .2063.0881.3095.266.3095z" />
                    </svg>
                )}
                {item.icon === 'finance' && (
                    <svg width="46" height="56" viewBox="0 0 46 56" className="fill-[#1d1d1f]" aria-hidden="true">
                        <path d="M41.0009,12H5A5,5,0,0,0,.0009,17L0,39a5,5,0,0,0,4.9991,5H41.0009A5,5,0,0,0,46,39V17A5,5,0,0,0,41.0009,12ZM5,14H41.0009A3.0032,3.0032,0,0,1,44,17l.0005,2H2l.0005-2A3.0032,3.0032,0,0,1,5,14ZM41.0009,42H4.9991a3.0032,3.0032,0,0,1-3-3V22.9577H44V39A3.0032,3.0032,0,0,1,41.0009,42ZM15,31.5737v3.8526A1.5541,1.5541,0,0,1,13.4663,37H8.5338A1.5542,1.5542,0,0,1,7,35.4263V31.5737A1.5542,1.5542,0,0,1,8.5338,30h4.9325A1.5541,1.5541,0,0,1,15,31.5737Z" />
                    </svg>
                )}
                {item.icon === 'app' && (
                    <svg className="fill-[#1d1d1f]" height="56" viewBox="0 0 36 56" width="36" aria-hidden="true"><path d="m0 0h36v56h-36z" fill="none" /><path d="m33.8083 12.2181c-1.7905-1.7748-4.2349-2.2181-8.0013-2.2181h-15.7767c-3.5734 0-6.048.453-7.818 2.2278-1.7748 1.7748-2.2122 4.2084-2.2122 7.7975v15.7767c0 3.787.4169 6.2206 2.1917 7.9749 1.7905 1.7748 4.2397 2.223 8.0013 2.223h15.6139c3.7665 0 6.2313-.4482 8.0013-2.223 1.7748-1.77 2.1917-4.1879 2.1917-7.9749v-15.6198c0-3.7762-.4169-6.2098-2.1917-7.9642zm.1917 23.584c0 3.6614-.4197 5.3777-1.6078 6.5626-1.1888 1.1921-2.9736 1.6353-6.5852 1.6353h-15.6139c-3.5978 0-5.3848-.4454-6.5953-1.6454-1.1796-1.166-1.5977-2.8807-1.5977-6.5526v-15.7767c0-3.4677.4408-5.1977 1.6284-6.3853 1.1771-1.1803 2.972-1.6401 6.4019-1.6401h15.7767c3.6013 0 5.3883.4441 6.5953 1.6406 1.1796 1.166 1.5977 2.8779 1.5977 6.5417v15.6198zm-8.5-17.8022h-2.5378c-.1951-2.46-2.3293-4.4048-4.9622-4.4048s-4.7672 1.9448-4.9622 4.4048h-2.5378c-1.3807 0-2.5 1.1193-2.5 2.5v14.5c0 2.7614 2.2386 5 5 5h10c2.7614 0 5-2.2386 5-5v-14.5c0-1.3807-1.1193-2.5-2.5-2.5zm-7.5-2.9048c1.7987 0 3.2675 1.2759 3.4612 2.9048h-6.9225c.1937-1.6289 1.6625-2.9048 3.4612-2.9048zm2.2191 7.8211c0 .547-.1961 1.0734-.5883 1.5481-.4747.5677-1.0217.8257-1.6411.7741-.0104-.0619-.0104-.1342-.0104-.2064 0-.5367.1961-1.032.5987-1.4965.2064-.2374.4542-.4232.7637-.578.2993-.1548.5883-.2477.867-.2581.0103.0723.0103.1445.0103.2168zm2.0952 8.391c-.1652.3819-.3613.7328-.578 1.0631-.2993.4438-.5471.7534-.7431.9185-.2891.2787-.609.4232-.9496.4335-.2374 0-.5367-.0723-.8773-.2167-.3406-.1445-.6606-.2167-.9495-.2167-.2994 0-.6193.0722-.9702.2167s-.6296.2167-.8464.227c-.3199.0104-.6398-.1341-.9701-.4438-.2065-.1858-.4645-.4954-.7741-.9495-.3303-.4851-.5986-1.0322-.8154-1.6721-.2271-.6812-.3406-1.3521-.3406-1.9919 0-.7328.1548-1.3624.4645-1.899.2374-.4232.5676-.7638.9702-1.0115.4128-.2477.8463-.3716 1.321-.3819.2581 0 .5986.0722 1.0219.2374.4128.1651.6812.2477.805.2477.0928 0 .3922-.093.8979-.289.4747-.1755.8876-.2477 1.2178-.2167.8979.0722 1.5688.4334 2.0229 1.0941-.8051.5057-1.2076 1.2075-1.1972 2.1054.0103.7018.258 1.2902.7328 1.7443.2271.2167.4747.3819.7431.4954-.0516.1755-.1238.3406-.1857.5057z" /></svg>
                )}
                {item.icon === 'custom' && (
                    <svg height="56" viewBox="0 0 54 56" width="54" className="fill-[#1d1d1f]" aria-hidden="true">
                        <path d="m0 0h54v56h-54z" fill="none" />
                        <path d="m38.6731 42.642c.0407.1339.0982.2395.1483.358h-37.3215c-.8286 0-1.5-.6719-1.5-1.5s.6714-1.5 1.5-1.5h4.5001v-23c0-2.2091 1.7909-4 4-4h32c2.2092 0 4 1.7909 4 4v.0497h-2v-.0497c0-1.1028-.8972-2-2-2h-32c-1.1028 0-2 .8972-2 2v23h28.7324c.3904.3965.8301.7383 1.325 1.0118.0599.0331.1014.0602.1283.0795.0085.0225.019.0533.0306.0939l.2554.8148.2013.642zm14.7352-15.0596v1.6361c0 .3153-.0386.6487-.2206.8446-.1818.196-.4053.2863-.7081.2863h-.4404l-.0392-.0042v5.0533c0 .9733-.229 1.7684-.5963 2.3848-.3664.6169-.8537 1.0929-1.461 1.4286-.3121.1678-.5503.3505-.7151.5476-.1641.1971-.3018.4718-.4106.8241l-.4308 1.4097c-.1096.3774-.2907.6395-.5438.7867-.2529.1465-.5399.22-.8602.22h-4.9199c-.3282 0-.6176-.0778-.8661-.2329-.2491-.1553-.4282-.4131-.5379-.7738l-.4425-1.4097c-.1012-.3523-.2368-.627-.4048-.8241-.1694-.1971-.405-.3798-.7087-.5476-.6071-.3357-1.0945-.8116-1.4618-1.4286-.3665-.6163-.6403-1.4115-.6403-2.3848v-8.7719c0-.9901.2738-1.7955.6403-2.4164.3673-.621.8547-1.095 1.4618-1.4221.3037-.151.5393-.3273.7087-.5286.1681-.2014.3036-.4783.4048-.8307l.4425-1.4095c.1097-.3691.2888-.6312.5379-.7867.2485-.1548.5378-.2327.8661-.2327h4.9199c.3204 0 .6074.0779.8602.2327.2531.1555.4342.4176.5438.7867l.4308 1.4095c.1089.344.2465.6167.4106.8181.1648.2013.403.3817.7151.5411.6073.3356 1.0946.8119 1.461 1.4282.3609.6061.5897 1.3392.5963 2.3052h.4084c.3031 0 .5455.0938.7272.2811.1819.1875.2726.4474.2726.7797zm-3.4083-.3428c0-1.2369-1.0571-2.2401-2.3611-2.24l-6.2776.0004c-1.304.0001-2.3611 1.0033-2.3612 2.2404v7.52c-.0001 1.2369 1.0569 2.2401 2.361 2.24l6.2776-.0004c1.304 0 2.3611-1.0033 2.3612-2.2404v-7.52z" />
                    </svg>
                )}
            </div>
            <h3 className="text-[20px] font-semibold text-[#1d1d1f] leading-tight mt-auto">
                <span dangerouslySetInnerHTML={{__html: item.title.replace('nhận điểm tín dụng', '<span class="text-[#0066cc]">nhận điểm tín dụng</span>').replace('lãi suất 0%', '<span class="text-[#0066cc]">lãi suất 0%</span>')}} />
            </h3>
        </div>
      );
  }

  return (
    <div className={`
      flex-none rounded-[18px] overflow-hidden snap-center relative group cursor-pointer shadow-sm hover:shadow-md transition-all
      ${item.size === 'large' ? 'w-[400px] md:w-[480px]' : 'w-[310px] md:w-[400px]'}
      h-[500px]
      ${item.dark ? 'bg-black text-white' : 'bg-white text-[#1d1d1f]'}
    `}>
      <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 p-8 flex flex-col items-start z-10">
        {item.tag && <span className="text-[12px] font-semibold uppercase mb-2 opacity-80">{item.tag}</span>}
        <h3 className={`font-semibold leading-tight ${item.size === 'large' ? 'text-[32px]' : 'text-[28px]'}`} style={{color: item.dark ? 'white' : '#1d1d1f'}}>
            {item.title}
        </h3>
        {item.sub && <p className="mt-2 text-[17px] opacity-90">{item.sub}</p>}
        {item.desc && <p className="mt-2 text-[17px] opacity-90">{item.desc}</p>}
        {item.price && <div className="mt-auto pt-4 text-[14px] md:text-[17px]">{item.price}</div>}
      </div>
    </div>
  );
};

const StorePage: React.FC = () => {
  return (
    <div className="bg-[#f5f5f7] pt-[44px]">
        {/* Main Container */}
        <div className="max-w-[1440px] mx-auto">
            
            {/* Header Section */}
            <section className="pt-20 pb-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end">
                <div>
                    <h1 className="text-[40px] md:text-[48px] font-semibold text-[#1d1d1f] mb-1">Cửa Hàng. <span className="text-[#6e6e73]">Trao những điều đặc biệt dịp lễ này.</span></h1>
                </div>
                <div className="flex items-center gap-3 mt-4 md:mt-0">
                    <div className="flex flex-col items-end">
                        <span className="text-[14px] text-[#1d1d1f] font-semibold">Bạn cần trợ giúp mua sắm?</span>
                        <a href="#" className="text-[14px] text-[#0066cc] hover:underline">Hỏi Chuyên Gia</a>
                    </div>
                    <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-chat-holiday-specialist-icon-202511?wid=108&hei=108&fmt=png-alpha" className="w-12 h-12 rounded-full" alt="" />
                </div>
            </section>

            {/* Product Nav */}
            <section className="overflow-x-auto no-scrollbar pb-16 px-6 md:px-12">
                <div className="flex gap-8 min-w-max">
                    {storeNav.map((item) => (
                        <a key={item.name} href="#" className="group flex flex-col items-center gap-3 min-w-[120px]">
                            <img src={item.image} alt={item.name} className="w-[120px] h-[80px] object-contain drop-shadow-sm transition-transform group-hover:-translate-y-1" />
                            <span className="text-[14px] font-medium text-[#1d1d1f] group-hover:underline group-hover:text-[#06c]">{item.name}</span>
                        </a>
                    ))}
                </div>
            </section>

            {/* Latest Products */}
            <section className="pb-16 overflow-hidden">
                <div className="max-w-[1440px] mx-auto">
                    <ShelfHeader title="Những sản phẩm mới nhất." subtitle="Quà này ai cũng mê." />
                    <div className="flex gap-5 overflow-x-auto no-scrollbar px-6 md:px-12 pb-8 snap-x">
                        {latestProducts.map((item, idx) => (
                            <StoreCard key={idx} item={{...item, size: 'large'}} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Personalization */}
            <section className="pb-16 overflow-hidden">
                <div className="max-w-[1440px] mx-auto">
                    <ShelfHeader title="Cá nhân hóa." subtitle="Món quà có một không hai." />
                    <div className="flex gap-5 overflow-x-auto no-scrollbar px-6 md:px-12 pb-8 snap-x">
                        {personalization.map((item, idx) => (
                            <StoreCard key={idx} item={item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Holiday Picks */}
            <section className="pb-16 overflow-hidden">
                <div className="max-w-[1440px] mx-auto">
                    <ShelfHeader title="Lựa chọn cho dịp lễ." subtitle="Được thiết kế cho trải nghiệm thú vị." />
                    <div className="flex gap-5 overflow-x-auto no-scrollbar px-6 md:px-12 pb-8 snap-x">
                        {holiday.map((item, idx) => (
                            <StoreCard key={idx} item={item} />
                        ))}
                    </div>
                </div>
            </section>
             
             {/* Find Inspiration */}
            <section className="pb-16 overflow-hidden">
                <div className="max-w-[1440px] mx-auto">
                    <ShelfHeader title="Tìm cảm hứng." subtitle="Thêm nhiều cách gây bất ngờ." />
                    <div className="flex gap-5 overflow-x-auto no-scrollbar px-6 md:px-12 pb-8 snap-x">
                        {services.map((item, idx) => (
                            <StoreCard key={idx} item={item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Unique to Apple */}
            <section className="pb-16 overflow-hidden">
                <div className="max-w-[1440px] mx-auto">
                    <ShelfHeader title="Chỉ có tại Apple." subtitle="Sẵn sàng cho dịp lễ." />
                    <div className="flex gap-5 overflow-x-auto no-scrollbar px-6 md:px-12 pb-8 snap-x">
                        {unique.map((item, idx) => (
                            <StoreCard key={idx} item={item} />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Deals */}
            <section className="pb-16 overflow-hidden">
                <div className="max-w-[1440px] mx-auto">
                    <ShelfHeader title="Trợ giá và ưu đãi." subtitle="Khuyến mại độc quyền và nhiều ưu đãi hấp dẫn khác." />
                    <div className="flex gap-5 overflow-x-auto no-scrollbar px-6 md:px-12 pb-8 snap-x">
                        {deals.map((item, idx) => (
                            <StoreCard key={idx} item={item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
                <h2 className="text-[24px] font-semibold text-[#1d1d1f] mb-6">Liên Kết Nhanh</h2>
                <div className="flex flex-wrap gap-3">
                    {['Trạng Thái Đơn Hàng', 'Trợ Giúp Mua Hàng', 'Trả hàng', 'Mục Đã Lưu', 'Vận Chuyển & Giao Hàng', 'Thanh toán'].map(link => (
                        <a key={link} href="#" className="px-4 py-2 bg-[#e8e8ed] hover:bg-[#d2d2d7] rounded-full text-[14px] font-medium text-[#1d1d1f] transition-colors">
                            {link}
                        </a>
                    ))}
                </div>
            </section>

        </div>
    </div>
  );
};

export default StorePage;