"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showLogo, setShowLogo] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [forceShowLogo, setForceShowLogo] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!forceShowLogo) {
        setShowLogo(currentScrollY > 40);
      } else {
        setShowLogo(true);
      }
      setShowScrollTop(currentScrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceShowLogo]);

  // Thêm hàm xử lý click menu
  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Đảm bảo logo luôn hiển thị khi chuyển section
    setForceShowLogo(true);
    
    // Xử lý trường hợp click vào Trang chủ
    if (href === "") {
      window.history.pushState({}, '', '/');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setForceShowLogo(false);
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const isMobile = window.innerWidth < 768; // Kiểm tra nếu là mobile
      const navbarHeight = isMobile ? 120 : 100; // Điều chỉnh chiều cao navbar cho mobile
      const headerHeight = isMobile ? 0 : 41; // Bỏ header height trên mobile
      const offset = navbarHeight + headerHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      // Cập nhật URL khi click vào menu
      const newUrl = targetId ? `/${targetId}` : '/';
      window.history.pushState({}, '', newUrl);

      // Đảm bảo rằng logo đã hiển thị trước khi cuộn
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 0);
    }
  };

  if (!isMounted) {
    return null;
  }

  const menuItems = [
    { href: "", text: "Trang chủ" },
    { href: "#gioi-thieu", text: "Giới thiệu" },
    { href: "#van-ban", text: "Văn bản" },
    { href: "#thu-thach", text: "Thử thách" },
    { href: "#thu-vien-anh", text: "Thư viện ảnh" },
    { href: "#ban-to-chuc", text: "Ban tổ chức" },
    { href: "#dia-diem", text: "Địa điểm tổ chức" },
    { href: "#dang-ky", text: "Đăng kí dự thi" }
  ];

  const mainMenuItems = menuItems.slice(0, -1);
  const registerItem = menuItems[menuItems.length - 1];

  return (
    <>
      {/* Header thông tin liên hệ */}
      <div className="bg-white text-[15px] text-red-600 flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-2 border-b border-gray-200 md:fixed md:top-0 md:left-0 md:w-full md:z-30">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 w-full md:w-auto">
          <a href="tel:02838230780" className="flex items-center gap-2.5 hover:text-red-700 transition-colors cursor-pointer text-sm md:text-[15px]">
            <span className="text-[16px]">📞</span>
            <span className="font-medium">(028) 38.230.780 – (028) 38. 233. 363</span>
          </a>
          <a href="mailto:khoahoctre@gmail.com" className="flex items-center gap-2.5 hover:text-red-700 transition-colors cursor-pointer text-sm md:text-[15px]">
            <span className="text-[16px]">✉</span>
            <span className="font-medium">khoahoctre@gmail.com</span>
          </a>
        </div>
        {/* Nút trở về KHOA HỌC TRẺ TST chỉ hiện trên PC */}
        <a
          href="http://khoahoctre.com.vn" 
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block text-red-600 hover:text-red-700 text-right text-[15px] font-semibold px-4 py-1 rounded-md hover:bg-red-50 transition-all duration-300 border border-red-200 hover:border-red-300"
        >
          Trở về KHOA HỌC TRẺ TST
        </a>
      </div>

      {/* Navbar mobile: logo giữa, hamburger menu, dropdown, scroll to top */}
      <div className="flex flex-col w-full md:hidden">
        {/* Logo luôn ở giữa trên mobile */}
        <div className="flex justify-center items-center py-3 bg-[#1653a2]">
          <Image src="/roket.png" alt="Logo" width={45} height={45} className="hover:scale-110 transition-transform duration-300" />
        </div>
        {/* Menu hamburger và dropdown */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#1653a2]">
          <span className="text-white text-base font-semibold">Menu</span>
          <div className="relative">
            <button
              className="text-white p-2 hover:bg-blue-700 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            {/* Dropdown menu mobile */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  className="absolute top-full right-0 mt-2 w-56 bg-[#1653a2] rounded-lg shadow-lg py-3 px-4 z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col gap-3">
                    {menuItems.map((item) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        className="text-white hover:text-yellow-300 transition-all duration-300 text-[15px] font-bold uppercase rounded-lg px-3 py-2.5 hover:bg-blue-700"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => {
                          handleMenuClick(e, item.href);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {item.text}
                      </motion.a>
                    ))}
                    {/* Thêm menu Trở về KHOA HỌC TRẺ TST cho mobile */}
                    <motion.a
                      href="http://khoahoctre.com.vn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-300 transition-all duration-300 text-[15px] font-bold uppercase rounded-lg px-3 py-2.5 hover:bg-blue-700"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Trở về KHOA HỌC TRẺ TST
                    </motion.a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navbar PC: giữ nguyên như ban đầu, menu section, hiệu ứng showLogo, v.v. */}
      <motion.div
        className="hidden md:flex fixed top-[41px] left-0 w-full z-20 bg-[#1653a2] flex-col items-center justify-center"
        style={{ minHeight: showLogo ? '100px' : '60px', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
      >
        <AnimatePresence mode="wait">
          {(showLogo || forceShowLogo) && (
            <motion.div
              className="flex justify-center items-center w-full py-2"
              initial={{ opacity: 0, scale: 0.8, height: 0 }}
              animate={{ opacity: 1, scale: 1, height: 'auto' }}
              exit={{ opacity: 0, scale: 0.8, height: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.3
              }}
            >
              <Image 
                src="/roket.png" 
                alt="Logo" 
                width={45} 
                height={45} 
                className="hover:scale-110 transition-transform duration-300" 
              />
            </motion.div>
          )}
        </AnimatePresence>
        <nav className="flex items-center justify-center w-full pb-3">
          <div 
            className={`flex ${showLogo ? 'flex-row' : forceShowLogo ? 'flex-row' : 'flex-col'} items-center justify-center gap-8 transition-all duration-300 ease-in-out ${!showLogo ? 'pt-4' : ''}`}
          >
            <div className="flex items-center justify-center gap-8">
              {mainMenuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`text-white hover:text-yellow-300 transition-all duration-300 ${
                    showLogo ? 'text-[13px]' : 'text-[16px]'
                  } font-bold uppercase whitespace-nowrap hover:bg-blue-700 px-3 py-2 rounded-lg`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3,
                    delay: index * 0.1
                  }}
                  onClick={(e) => handleMenuClick(e, item.href)}
                >
                  {item.text}
                </motion.a>
              ))}
            </div>
            <motion.a
              href={registerItem.href}
              className="bg-yellow-400 hover:bg-yellow-500 text-[#1653a2] font-bold uppercase px-6 py-2.5 rounded-lg transition-all duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3,
                delay: mainMenuItems.length * 0.1
              }}
              onClick={(e) => handleMenuClick(e, registerItem.href)}
            >
              {registerItem.text}
            </motion.a>
          </div>
        </nav>
      </motion.div>
    </>
  );
}
