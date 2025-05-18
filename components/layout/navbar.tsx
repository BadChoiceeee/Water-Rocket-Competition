"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showLogo, setShowLogo] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [forceShowLogo, setForceShowLogo] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!forceShowLogo) {
        setShowLogo(currentScrollY > 40);
      } else {
        setShowLogo(true);
      }
      if (currentScrollY === 0) {
        setHasInteracted(false);
      }
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
      setHasInteracted(false);
      setForceShowLogo(false);
      return;
    }

    setHasInteracted(true);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 100; // Luôn sử dụng chiều cao của navbar khi có logo
      const headerHeight = 41;
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
      <motion.div
        className="fixed top-0 left-0 w-full bg-white text-[15px] text-red-600 flex justify-between items-center px-12 py-2 border-b border-gray-200 z-30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2.5 hover:text-red-700 transition-colors cursor-pointer">
            <span className="text-[16px]">📞</span>
            <span className="font-medium">(028) 38.230.780 – (028) 38. 233. 363</span>
          </span>
          <span className="flex items-center gap-2.5 hover:text-red-700 transition-colors cursor-pointer">
            <span className="text-[16px]">✉</span>
            <span className="font-medium">khoahoctre@gmail.com</span>
          </span>
        </div>
        <motion.a
          href="http://khoahoctre.com.vn" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 hover:text-red-700 text-right text-[15px] font-semibold px-4 py-1 rounded-md hover:bg-red-50 transition-all duration-300 border border-red-200 hover:border-red-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Trở về KHOA HỌC TRẺ TST
        </motion.a>
      </motion.div>

      {/* Menu ngang */}
      <motion.div
        className="fixed top-[41px] left-0 w-full z-20 bg-[#1653a2] flex flex-col items-center justify-center" 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
        style={{
          minHeight: showLogo ? '100px' : '60px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <AnimatePresence mode="wait">
          {(showLogo || forceShowLogo) && (
            <motion.div
              className="flex justify-center items-center w-full py-1"
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
              <Image src="/roket.png" alt="Logo" width={40} height={40} />
            </motion.div>
          )}
        </AnimatePresence>

        <nav className="flex items-center justify-center w-full pb-2">
          <div 
            className={`flex ${showLogo ? 'flex-row' : hasInteracted ? 'flex-row' : 'flex-col'} items-center justify-center gap-8 transition-all duration-300 ease-in-out ${!showLogo ? 'pt-4' : ''}`}
          >
            <div className="flex items-center justify-center gap-8">
              {mainMenuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`text-white hover:text-yellow-300 transition-all duration-300 ${
                    showLogo ? 'text-[13px]' : 'text-[16px]'
                  } font-bold uppercase whitespace-nowrap`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
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
              className={`text-white hover:text-yellow-300 transition-all duration-300 ${
                showLogo ? 'text-[13px]' : 'text-[16px]'
              } font-bold uppercase whitespace-nowrap ${showLogo ? 'mt-0' : hasInteracted ? 'mt-0' : 'mt-4'}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 20,
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
