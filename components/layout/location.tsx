import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

export default function Location() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center gap-4 py-15">
        <div id="ban-to-chuc" className="text-primary scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          ĐƠN VỊ TỔ CHỨC
        </div>
        <div className="text-primary">————— ♦ —————</div>
        <div className="mb-20 flex gap-4">
          <div className="mb-4 h-30 w-30 overflow-hidden md:mb-0">
            <AspectRatio ratio={1 / 1}>
              <Image src={"/LogoDoan.jpg"} alt="" fill className="h-30 w-30" />
            </AspectRatio>
          </div>
          <div className="mb-4 h-30 w-30 overflow-hidden md:mb-0">
            <AspectRatio ratio={1 / 1}>
              <Image src={"/LogoTST.png"} alt="" fill className="h-30 w-30" />
            </AspectRatio>
          </div>
        </div>
        <div id="dia-diem" className="text-primary scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
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
        <div className="flex w-full grid-cols-2 flex-col-reverse gap-4 md:grid">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5439019285222!2d106.77506797420703!3d10.846173857905043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175270c3865c273%3A0x3e361dab0a829fb5!2zVHLGsOG7nW5nIENhbyDEkOG6s25nIEjhuq11IEPhuqduIDI!5e0!3m2!1svi!2s!4v1743788955976!5m2!1svi!2s"
            allowFullScreen
            loading="lazy"
            height={400}
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-md border-0"
          ></iframe>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-primary max-w-md text-center font-bold">
              TRUNG TÂM PHÁT TRIỂN KHOA HỌC VÀ CÔNG NGHỆ TRẺ THÀNH ĐOÀN TP. HCM
            </h2>
            <ul className="my-6 ml-6 max-w-md list-disc [&>li]:mt-2 [&>li>a]:text-sky-700 [&>li>span]:font-bold">
              <li>
                <span>Địa chỉ:</span> 01 Phạm Ngọc Thạch, phường Bến Nghé, quận
                1, thành phố Hồ Chí Minh
              </li>
              <li>
                <span>Điện thoại:</span> (028) 38.230.780 – (028) 38. 233. 363
              </li>
              <li>
                <span>Email:</span>{" "}
                <a href="mailto:khoahoctre@gmail.com">khoahoctre@gmail.com</a>
              </li>
              <li>
                <span>Facebook:</span>{" "}
                <a href="facebook.com/hoithitenluanuoc">
                  facebook.com/hoithitenluanuoc
                </a>
              </li>
              <li>
                <span>YouTube:</span>{" "}
                <a href="https://www.youtube.com/user/khoahoctre1">
                  Khoa học trẻ TST
                </a>
              </li>
              <li>
                <span>Website:</span>{" "}
                <a href="khoahoctre.com.vn">khoahoctre.com.vn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
