"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

export default function Navbar() {
  const [showLogo, setShowLogo] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setShowLogo(currentScrollY > 40);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleMenuClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href === "") {
      window.history.pushState({}, '', '/');
      setHasInteracted(false);
      setShowLogo(false);
      
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });
      return;
    }

    setHasInteracted(true);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarHeight = showLogo ? 110 : 70;
      const headerHeight = 40;
      const offset = navbarHeight + headerHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.history.pushState({}, '', `/${targetId}`);
      setShowLogo(true);

      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  }, [showLogo]);

  const menuItems = [
    { href: "#", text: "Trang chủ" },
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

  if (!isMounted) return null;

  const menuItemClasses = (isLogo: boolean) => 
    `text-white hover:text-yellow-300 transition-colors ${
      isLogo ? 'text-[12px]' : 'text-[16px]'
    } font-bold uppercase`;

  const menuItemAnimation = {
    whileHover: { 
      scale: 1.1,
      textShadow: "0 0 8px rgba(255,255,255,0.5)"
    },
    whileTap: { scale: 0.95 },
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full bg-white text-red-600 flex justify-between items-center px-8 py-2 border-b border-gray-200 z-30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[16px]">📞</span>
            <span className="text-[15px] font-medium">(028) 38.230.780 – (028) 38. 233. 363</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[16px]">✉</span>
            <span className="text-[15px] font-medium">khoahoctre@gmail.com</span>
          </div>
        </div>
        <motion.a
          href="http://khoahoctre.com.vn"
          className="text-red-600 hover:text-red-700 text-[15px] font-medium hover:underline transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Trở về KHOA HỌC TRẺ TST
        </motion.a>
      </motion.div>

      <motion.div
        className="fixed top-9 left-0 w-full z-20 bg-[#1653a2] flex flex-col items-center justify-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
        style={{
          minHeight: showLogo ? '110px' : '70px',
          transition: 'min-height 0.3s ease-in-out'
        }}
      >
        <AnimatePresence>
          {showLogo && (
            <motion.div
              className="flex justify-center items-center w-full py-3"
              initial={{ opacity: 0, scale: 0.8, height: 0 }}
              animate={{ opacity: 1, scale: 1, height: 'auto' }}
              exit={{ opacity: 0, scale: 0.8, height: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Image src="/roket.png" alt="Logo" width={48} height={48} />
            </motion.div>
          )}
        </AnimatePresence>

        <nav className="flex items-center justify-center w-full px-8 py-3">
          <div className={`flex ${hasInteracted ? 'flex-row' : 'flex-col'} items-center justify-center gap-6 max-w-7xl w-full mx-auto`}>
            <div className="flex items-center justify-center gap-6">
              {mainMenuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={menuItemClasses(showLogo)}
                  {...menuItemAnimation}
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
              className={`${menuItemClasses(showLogo)} ${hasInteracted ? 'mt-0' : 'mt-2'}`}
              {...menuItemAnimation}
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
