
import { useParams } from 'react-router-dom';

export type LangCode = 'vn' | 'en' | 'eg';

export const translations = {
  vn: {
    nav: {
      store: 'Cửa Hàng',
      mac: 'Mac',
      ipad: 'iPad',
      iphone: 'iPhone',
      watch: 'Watch',
      vision: 'Vision',
      airpods: 'AirPods',
      tvhome: 'TV & Nhà',
      entertainment: 'Giải Trí',
      accessories: 'Phụ Kiện',
      support: 'Hỗ Trợ',
    },
    hero: {
      holiday_title: 'Trao những điều đặc biệt.',
      holiday_subtitle: 'Tìm thấy điều mong đợi suốt cả năm.',
      cta_shop_gift: 'Mua sắm quà tặng',
      iphone_title: 'iPhone',
      iphone_subtitle: 'Xin chào thế hệ iPhone mới nhất.',
      cta_learn: 'Tìm hiểu thêm',
      cta_buy: 'Mua',
      macbook_subtitle: 'Siêu mạnh mẽ với M5.',
    },
    ribbon: {
      text: 'Thanh toán hàng tháng thật dễ dàng. Bao gồm lựa chọn lãi suất 0%.',
      cta: 'Tìm hiểu thêm'
    },
    promos: {
      airpods_title: 'AirPods Pro 3',
      airpods_subtitle: 'Chủ Động Khử Tiếng Ồn tai bạn chưa từng nghe.',
      ipad_title: 'iPad Pro',
      ipad_subtitle: 'Hiệu năng AI tiên tiến.',
      watch_s11_title: 'Apple Watch Series 11',
      watch_s11_subtitle: 'Siêu công cụ chăm sóc sức khỏe của bạn.',
      watch_ultra_title: 'Apple Watch Ultra 3',
      watch_ultra_subtitle: 'Tay chơi cự phách.'
    },
    footer: {
      shop_learn: 'Mua Sắm Và Tìm Hiểu',
      wallet: 'Ví Apple',
      account: 'Tài Khoản',
      entertainment: 'Giải Trí',
      store: 'Apple Store',
      business: 'Dành Cho Doanh Nghiệp',
      education: 'Cho Giáo Dục',
      values: 'Giá Trị Cốt Lõi Của Apple',
      about: 'Về Apple',
      copyright: 'Bản quyền © 2025 Apple Inc. Bảo lưu mọi quyền.',
      privacy: 'Chính Sách Quyền Riêng Tư',
      terms: 'Điều Khoản Sử Dụng',
      sales: 'Bán Hàng Và Hoàn Tiền',
      legal: 'Pháp Lý',
      sitemap: 'Bản Đồ Trang Web',
      vietnam: 'Việt Nam',
      other_country: 'Chọn quốc gia hoặc khu vực',
    },
    aria: {
      apple: 'Apple',
      search: 'Tìm kiếm trên apple.com',
      bag: 'Giỏ hàng',
      menu: 'Menu',
      close_menu: 'Đóng Menu'
    }
  },
  en: {
    nav: {
      store: 'Store',
      mac: 'Mac',
      ipad: 'iPad',
      iphone: 'iPhone',
      watch: 'Watch',
      vision: 'Vision',
      airpods: 'AirPods',
      tvhome: 'TV & Home',
      entertainment: 'Entertainment',
      accessories: 'Accessories',
      support: 'Support',
    },
    hero: {
      holiday_title: 'Give something special.',
      holiday_subtitle: 'Find what you’ve been waiting for all year.',
      cta_shop_gift: 'Shop Gifts',
      iphone_title: 'iPhone',
      iphone_subtitle: 'Meet the new generation of iPhone.',
      cta_learn: 'Learn more',
      cta_buy: 'Buy',
      macbook_subtitle: 'Mind-blowing. Head-turning.',
    },
    ribbon: {
      text: 'Monthly payments made easy. Including 0% interest options.',
      cta: 'Learn more'
    },
    promos: {
      airpods_title: 'AirPods Pro 3',
      airpods_subtitle: 'Adaptive Audio. Now playing.',
      ipad_title: 'iPad Pro',
      ipad_subtitle: 'Unbelievably thin. Incredibly powerful.',
      watch_s11_title: 'Apple Watch Series 11',
      watch_s11_subtitle: 'Thinner. Bigger. Smarter.',
      watch_ultra_title: 'Apple Watch Ultra 3',
      watch_ultra_subtitle: 'New finish. Never quit.'
    },
    footer: {
      shop_learn: 'Shop and Learn',
      wallet: 'Apple Wallet',
      account: 'Account',
      entertainment: 'Entertainment',
      store: 'Apple Store',
      business: 'For Business',
      education: 'For Education',
      values: 'Apple Values',
      about: 'About Apple',
      copyright: 'Copyright © 2025 Apple Inc. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      sales: 'Sales and Refunds',
      legal: 'Legal',
      sitemap: 'Site Map',
      vietnam: 'Vietnam',
      other_country: 'Choose your country or region',
    },
    aria: {
      apple: 'Apple',
      search: 'Search apple.com',
      bag: 'Shopping Bag',
      menu: 'Menu',
      close_menu: 'Close Menu'
    }
  },
  eg: {
    nav: {
      store: 'المتجر',
      mac: 'Mac',
      ipad: 'iPad',
      iphone: 'iPhone',
      watch: 'Watch',
      vision: 'Vision',
      airpods: 'AirPods',
      tvhome: 'المنزل',
      entertainment: 'الترفيه',
      accessories: 'اكسسوارات',
      support: 'الدعم',
    },
    hero: {
      holiday_title: 'امنح شيئاً مميزاً.',
      holiday_subtitle: 'اعثر على ما كنت تنتظره طوال العام.',
      cta_shop_gift: 'تسوق الهدايا',
      iphone_title: 'iPhone',
      iphone_subtitle: 'تعرف على الجيل الجديد من iPhone.',
      cta_learn: 'المزيد',
      cta_buy: 'شراء',
      macbook_subtitle: 'قوة مذهلة. مع شريحة M5.',
    },
    ribbon: {
      text: 'أقساط شهرية ميسرة. تشمل خيارات تقسيط بفائدة 0%.',
      cta: 'المزيد'
    },
    promos: {
      airpods_title: 'AirPods Pro 3',
      airpods_subtitle: 'صوت متكيف. الآن في أذنيك.',
      ipad_title: 'iPad Pro',
      ipad_subtitle: 'نحيف بشكل لا يصدق. قوي بشكل مذهل.',
      watch_s11_title: 'Apple Watch Series 11',
      watch_s11_subtitle: 'أنحف. أكبر. أذكى.',
      watch_ultra_title: 'Apple Watch Ultra 3',
      watch_ultra_subtitle: 'لمسة نهائية جديدة. لا تتوقف أبدًا.'
    },
    footer: {
      shop_learn: 'التسوق والتعرف',
      wallet: 'محفظة Apple',
      account: 'الحساب',
      entertainment: 'الترفيه',
      store: 'متجر Apple',
      business: 'للأعمال',
      education: 'للتعليم',
      values: 'قيم Apple',
      about: 'عن Apple',
      copyright: 'حقوق النشر © 2025 Apple Inc. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام',
      sales: 'المبيعات والاسترداد',
      legal: 'قانوني',
      sitemap: 'خريطة الموقع',
      vietnam: 'مصر',
      other_country: 'اختر دولتك أو منطقتك',
    },
    aria: {
      apple: 'Apple',
      search: 'البحث في apple.com',
      bag: 'حقيبة التسوق',
      menu: 'القائمة',
      close_menu: 'إغلاق القائمة'
    }
  }
};

export const useAppLanguage = () => {
  const params = useParams();
  const lang = (params.lang as LangCode) || 'vn';
  
  // Default to vn if invalid lang code is somehow passed (though routing handles this)
  const t = translations[lang] || translations['vn'];
  
  return { lang, t };
};

export const getPath = (path: string, lang: string) => {
  // Ensure we don't double stack langs if logic is reused
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${cleanPath}`;
};
