'use client';

import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

const BackToTopButton = () => {
  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-4 right-4 bg-[#0A2B68] hover:bg-[#1653a2] text-white p-3 md:p-4 transition-colors duration-300 w-10 h-10 md:w-12 md:h-12 items-center justify-center flex rounded-full shadow-lg z-50"
      aria-label="Quay lại đầu trang"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  );
};

export default function Location() {
  return (
    <div className="container mx-auto px-3 sm:px-4 md:px-6">
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 py-6 sm:py-8 md:py-12">
        <div id="ban-to-chuc" className="text-primary scroll-m-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight scroll-mt-[120px] sm:scroll-mt-[180px]">
          ĐƠN VỊ TỔ CHỨC
        </div>
        <div className="text-primary text-sm sm:text-base">————— ♦ —————</div>
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-20">
          <div className="flex flex-col items-center">
            <div className="mb-3 sm:mb-4 h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 overflow-hidden">
              <AspectRatio ratio={1 / 1}>
                <Image src={"/LogoDoan.jpg"} alt="Logo Thành Đoàn" fill className="object-contain" />
              </AspectRatio>
            </div>
            <div className="text-center">
              <p className="text-primary font-bold text-base sm:text-lg md:text-xl">THÀNH ĐOÀN</p>
              <p className="text-primary font-bold text-base sm:text-lg md:text-xl">TP. HỒ CHÍ MINH</p>
            </div>
          </div>
          <div className="text-center text-red-600 font-bold text-sm sm:text-base md:text-lg px-4">ĐƠN VỊ THƯỜNG TRỰC BAN TỔ CHỨC</div>
          <div className="flex flex-col items-center">
            <div className="mb-3 sm:mb-4 h-24 w-24 sm:h-32 sm:w-32 md:h-40 md:w-40 overflow-hidden">
              <AspectRatio ratio={1 / 1}>
                <Image src={"/LogoTST.png"} alt="Logo TST" fill className="object-contain" />
              </AspectRatio>
            </div>
            <div className="text-center">
              <p className="text-primary font-bold text-base sm:text-lg md:text-xl">TRUNG TÂM PHÁT TRIỂN</p>
              <p className="text-primary font-bold text-base sm:text-lg md:text-xl">KHOA HỌC VÀ CÔNG NGHỆ TRẺ</p>
            </div>
          </div>
        </div>

        <div id="dia-diem" className="text-primary scroll-m-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight scroll-mt-[120px] sm:scroll-mt-[180px]">
          ĐỊA ĐIỂM TỔ CHỨC
        </div>
        <div className="text-primary text-sm sm:text-base">————— ♦ —————</div>
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 text-center px-4">
          <p className="text-primary text-base sm:text-lg md:text-xl font-bold">
            Trường Cao Đẳng Hậu Cần 2
          </p>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            50 Lê Văn Việt, Hiệp Phú, Thủ Đức, Hồ Chí Minh, Việt Nam
          </p>
        </div>

        <div className="w-full mt-4 sm:mt-6 md:mt-8 px-2 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 md:gap-6">
            <div className="overflow-hidden rounded-lg shadow-md mx-auto w-3/4 md:w-full">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={"/img5.jpg"}
                  alt="Trường Cao Đẳng Hậu Cần 2"
                  fill
                  className="object-cover"
                />
              </AspectRatio>
            </div>
            <div className="overflow-hidden rounded-lg shadow-md mx-auto w-3/4 md:w-full">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={"/img6.jpg"}
                  alt="Trường Cao Đẳng Hậu Cần 2"
                  fill
                  className="object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>

        <div id="lien-he" className="text-primary mt-12 sm:mt-16 md:mt-20 scroll-m-20 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
          LIÊN HỆ
        </div>
        <div className="text-primary text-sm sm:text-base">————— ♦ —————</div>
        <p className="text-center text-xs sm:text-sm md:text-base text-gray-600 mb-6 sm:mb-8 px-4">
          Bạn cần thêm thông tin, hãy liên hệ với chúng tôi.
        </p>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-2 sm:px-0">
          <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5439019285222!2d106.77506797420703!3d10.846173857905043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175270c3865c273%3A0x3e361dab0a829fb5!2zVHLGsOG7nW5nIENhbyDEkOG6s25nIEjhuq11IEPhuqduIDI!5e0!3m2!1svi!2s!4v1743788955976!5m2!1svi!2s"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex flex-col space-y-3 sm:space-y-4 text-left px-4 sm:px-0">
            <div className="text-[#1653a2] font-bold uppercase text-sm sm:text-base md:text-lg leading-tight text-center sm:text-left">
              TRUNG TÂM PHÁT TRIỂN KHOA HỌC VÀ CÔNG NGHỆ TRẺ<br />
              THÀNH ĐOÀN TP. HCM
            </div>
            <ul className="space-y-2 text-xs sm:text-sm md:text-base pl-4">
              <li className="flex items-start gap-1"><span className="text-[#1653a2] text-base">•</span><span><span className="font-bold">Địa chỉ:</span> <span className="text-gray-600">01 Phạm Ngọc Thạch, phường Bến Nghé, quận 1, thành phố Hồ Chí Minh</span></span></li>
              <li className="flex items-start gap-1"><span className="text-[#1653a2] text-base">•</span><span><span className="font-bold">Điện thoại:</span> <span className="text-gray-600">(028) 38.230.780 – (028) 38. 233. 363</span></span></li>
              <li className="flex items-start gap-1"><span className="text-[#1653a2] text-base">•</span><span><span className="font-bold">Email:</span> <a href="mailto:khoahoctre@gmail.com" className="text-sky-600 hover:underline break-all">khoahoctre@gmail.com</a></span></li>
              <li className="flex items-start gap-1"><span className="text-[#1653a2] text-base">•</span><span><span className="font-bold">Facebook:</span> <a href="https://facebook.com/tinhooctre.hcm" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline break-all">facebook.com/tinhooctre.hcm</a></span></li>
              <li className="flex items-start gap-1"><span className="text-[#1653a2] text-base">•</span><span><span className="font-bold">YouTube:</span> <a href="https://www.youtube.com/user/khoahoctre1" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline break-all">Khoa học trẻ TST</a></span></li>
              <li className="flex items-start gap-1"><span className="text-[#1653a2] text-base">•</span><span><span className="font-bold">Website:</span> <a href="https://khoahoctre.com.vn" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline break-all">khoahoctre.com.vn</a></span></li>
            </ul>
          </div>
        </div>

        <div className="w-full bg-[#1653a2] py-6 sm:py-8 mt-8 sm:mt-12">
          <div className="container mx-auto px-4 flex flex-col items-center text-white gap-3 sm:gap-4">
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/khoahoctre" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 sm:w-5 sm:h-5 fill-current">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                </svg>
              </a>
            </div>
            <div className="text-xs sm:text-sm md:text-base text-center px-4">
              © 2025 TRUNG TÂM PHÁT TRIỂN KHOA HỌC VÀ CÔNG NGHỆ TRẺ - THÀNH ĐOÀN TP. HCM
            </div>
          </div>
        </div>
        <BackToTopButton />
      </div>
    </div>
  );
}
