'use client';

import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

const BackToTopButton = () => {
  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 bg-[#0A2B68] hover:bg-[#1653a2] text-white p-4 transition-colors duration-300 w-12 h-12 items-center justify-center hidden md:flex mb-20 md:mb-0"
      aria-label="Quay lại đầu trang"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  );
};

export default function Location() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 py-15">
          <div id="ban-to-chuc" className="text-primary scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl scroll-mt-[180px]">
            ĐƠN VỊ TỔ CHỨC
          </div>
          <div className="text-primary">————— ♦ —————</div>
          <div className="flex flex-col items-center gap-8 mb-20">
            <div className="flex flex-col items-center">
              <div className="mb-4 h-40 w-40 overflow-hidden">
                <AspectRatio ratio={1 / 1}>
                  <Image src={"/LogoDoan.jpg"} alt="Logo Thành Đoàn" fill className="object-contain" />
                </AspectRatio>
              </div>
              <div className="text-center">
                <p className="text-primary font-bold">THÀNH ĐOÀN</p>
                <p className="text-primary font-bold">TP. HỒ CHÍ MINH</p>
              </div>
            </div>
            <div className="text-center text-red-600 font-bold">ĐƠN VỊ THƯỜNG TRỰC BAN TỔ CHỨC</div>
            <div className="flex flex-col items-center">
              <div className="mb-4 h-40 w-40 overflow-hidden">
                <AspectRatio ratio={1 / 1}>
                  <Image src={"/LogoTST.png"} alt="Logo TST" fill className="object-contain" />
                </AspectRatio>
              </div>
              <div className="text-center">
                <p className="text-primary font-bold">TRUNG TÂM PHÁT TRIỂN</p>
                <p className="text-primary font-bold">KHOA HỌC VÀ CÔNG NGHỆ TRẺ</p>
              </div>
            </div>
          </div>
          <div id="dia-diem" className="text-primary scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl scroll-mt-[180px]">
            ĐỊA ĐIỂM TỔ CHỨC
          </div>
          <div className="text-primary">————— ♦ —————</div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-primary text-center text-xl font-bold">
              Trường Cao Đẳng Hậu Cần 2
            </p>

            <p>50 Lê Văn Việt, Hiệp Phú, Thủ Đức, Hồ Chí Minh, Việt Nam</p>
          </div>
          <div className="flex w-full flex-col-reverse gap-4">
            <div className="gap-4 overflow-hidden md:flex md:h-[400px]">
              <div className="mb-4 max-h-[416px] w-full overflow-hidden rounded-md md:mb-0">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    src={"/img5.jpg"}
                    alt=""
                    fill
                    className="max-h-[400px] w-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="mb-4 max-h-[416px] w-full overflow-hidden rounded-md md:mb-0">
                <AspectRatio ratio={1 / 1}>
                  <Image
                    src={"/img6.jpg"}
                    alt=""
                    fill
                    className="max-h-[400px] w-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
          <div id="lien-he" className="text-primary mt-20 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
            LIÊN HỆ
          </div>
          <div className="text-primary">————— ♦ —————</div>{" "}
          <p className="pb-8 text-center text-sm leading-none font-medium">
            Bạn cần thêm thông tin, hãy liên hệ với chúng tôi.
          </p>
          <div className="flex w-full grid-cols-2 flex-col gap-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5439019285222!2d106.77506797420703!3d10.846173857905043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175270c3865c273%3A0x3e361dab0a829fb5!2zVHLGsOG7nW5nIENhbyDEkOG6s25nIEjhuq11IEPhuqduIDI!5e0!3m2!1svi!2s!4v1743788955976!5m2!1svi!2s"
              allowFullScreen
              loading="lazy"
              height={400}
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-md border-0"
            ></iframe>
            {/* Thông tin liên hệ - MOBILE */}
            <div className="w-full md:hidden">
              <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                <div className="text-[#1653a2] font-bold text-center uppercase text-[15px] leading-tight">TRUNG TÂM PHÁT TRIỂN KHOA HỌC VÀ CÔNG NGHỆ TRẺ<br/>THÀNH ĐOÀN TP. HCM</div>
                <div className="mt-3 text-base flex flex-col gap-1">
                  <div className="flex items-start gap-2"><span>•</span><span><b>Địa chỉ:</b> 01 Phạm Ngọc Thạch, phường Bến Nghé, quận 1, thành phố Hồ Chí Minh</span></div>
                  <div className="flex items-start gap-2"><span>•</span><span><b>Điện thoại:</b> (028) 38.230.780 – (028) 38. 233. 363</span></div>
                  <div className="flex items-start gap-2"><span>•</span><span><b>Email:</b> <a href="mailto:khoahoctre@gmail.com" className="text-sky-700 underline">khoahoctre@gmail.com</a></span></div>
                  <div className="flex items-start gap-2"><span>•</span><span><b>Facebook:</b> <a href="https://facebook.com/tinhooctre.hcm" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline">facebook.com/tinhooctre.hcm</a></span></div>
                  <div className="flex items-start gap-2"><span>•</span><span><b>YouTube:</b> <a href="https://www.youtube.com/user/khoahoctre1" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline">Khoa học trẻ TST</a></span></div>
                  <div className="flex items-start gap-2"><span>•</span><span><b>Website:</b> <a href="https://khoahoctre.com.vn" target="_blank" rel="noopener noreferrer" className="text-sky-700 underline">khoahoctre.com.vn</a></span></div>
                </div>
              </div>
            </div>
            {/* Thông tin liên hệ - DESKTOP giữ nguyên */}
            <div className="hidden md:flex flex-col items-start gap-2 mt-8 w-full">
              <h2 className="text-primary text-xl font-bold mb-1 w-full text-left">TRUNG TÂM PHÁT TRIỂN KHOA HỌC VÀ CÔNG NGHỆ TRẺ</h2>
              <h3 className="text-primary font-bold mb-2 w-full text-left">THÀNH ĐOÀN TP. HCM</h3>
              <div className="flex flex-col gap-2 w-full items-start">
                <div className="flex items-center gap-2 text-gray-700 text-[15px] justify-start w-full">
                  <span className="font-bold">Địa chỉ:</span>
                  <span>01 Phạm Ngọc Thạch, phường Bến Nghé, quận 1, thành phố Hồ Chí Minh</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-[15px] justify-start w-full">
                  <span className="font-bold">Điện thoại:</span>
                  <span>(028) 38.230.780 – (028) 38. 233. 363</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-[15px] justify-start w-full">
                  <span className="font-bold">Email:</span>
                  <a href="mailto:khoahoctre@gmail.com" className="text-sky-600 underline hover:text-sky-800">khoahoctre@gmail.com</a>
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-[15px] justify-start w-full">
                  <span className="font-bold">Facebook:</span>
                  <a href="https://facebook.com/tinhooctre.hcm" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline hover:text-sky-800">facebook.com/tinhooctre.hcm</a>
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-[15px] justify-start w-full">
                  <span className="font-bold">YouTube:</span>
                  <a href="https://www.youtube.com/user/khoahoctre1" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline hover:text-sky-800">Khoa học trẻ TST</a>
                </div>
                <div className="flex items-center gap-2 text-gray-700 text-[15px] justify-start w-full">
                  <span className="font-bold">Website:</span>
                  <a href="https://khoahoctre.com.vn" target="_blank" rel="noopener noreferrer" className="text-sky-600 underline hover:text-sky-800">khoahoctre.com.vn</a>
                </div>
              </div>
            </div>
          </div>
          <BackToTopButton />
        </div>
      </div>
      {/* Footer đúng mẫu: icon Facebook ở giữa, copyright căn giữa, full width, nền xanh */}
      <footer id="main-footer" className="w-full bg-[#1653a2] py-4 mt-0">
        <div className="flex flex-col items-center justify-center px-4">
          <a
            href="https://www.facebook.com/tinhoctre.hcm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-300 text-3xl mb-3"
          >
            <svg className="w-8 h-8 fill-current" viewBox="0 0 320 512">
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
            </svg>
            <span className="sr-only">Facebook</span>
          </a>
          <div className="text-white text-sm font-bold text-center uppercase leading-tight">
            © 2025 TRUNG TÂM PHÁT TRIỂN KHOA HỌC VÀ CÔNG NGHỆ TRẺ - THÀNH ĐOÀN TP. HCM
          </div>
        </div>
      </footer>
    </>
  );
}

