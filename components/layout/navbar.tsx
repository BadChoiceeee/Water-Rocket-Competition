"use client";

import useToggle from "@/hooks/use-state-toggle";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Image from "next/image";

export default function Navbar() {
  const sidebar = useToggle();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
      setShowLogo(currentScrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Header thông tin liên hệ */}
      <div className="fixed top-0 left-0 w-full bg-white text-[20px] text-red-600 flex justify-between items-center px-6 py-1 border-b border-gray-200 z-30">
        <div className="flex items-center gap-2">
          <span className="mr-2">📞 (028) 38.230.780 – (028) 38. 233. 363</span>
          <span className="flex items-center gap-1">
            <span>✉</span>
            <span>khoahoctre@gmail.com</span>
          </span>
        </div>
        <a href="#" className="text-red-600 hover:underline text-right text-[20px] font-normal">Trở về KHOA HỌC TRẺ TST</a>
      </div>
      {/* Menu ngang */}
      <div className="fixed top-9 left-0 w-full z-20 bg-[#1653a2] flex flex-col items-center justify-center" style={{minHeight: '110px'}}>
        {showLogo && (
          <div className="flex justify-center items-center w-full py-1">
            <Image src="/roket.png" alt="Logo" width={48} height={48} />
          </div>
        )}
        <nav className="flex flex-wrap gap-6 text-[20px] font-bold uppercase items-center justify-center w-full pb-2">
          <a href="#" className="text-white hover:text-yellow-300 transition-colors">Trang chủ</a>
          <a href="#" className="text-white hover:text-yellow-300 transition-colors">Giới thiệu</a>
          <a href="#" className="text-white hover:text-yellow-300 transition-colors">Văn bản</a>
          <a href="#" className="text-yellow-300 hover:text-yellow-400 transition-colors">Phóng sự</a>
          <a href="#" className="text-white hover:text-yellow-300 transition-colors">Thi trực tuyến</a>
          <a href="#" className="text-white hover:text-yellow-300 transition-colors">Thư viện ảnh</a>
          <a href="#" className="text-white hover:text-yellow-300 transition-colors">Ban tổ chức</a>
          <a href="#" className="text-yellow-300 hover:text-yellow-400 transition-colors">Danh sách đạt giải</a>
          <a href="#" className="text-white hover:text-yellow-300 transition-colors">Đăng ký dự thi</a>
        </nav>
      </div>
    </>
  );
}
