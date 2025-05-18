import Image from "next/image";

const images = [
  { src: "/img2023.jpg", caption: "Năm 2023" },
  { src: "/img2022.jpg", caption: "Năm 2022" },
  { src: "/img2021.jpg", caption: "Năm 2021" },
  { src: "/img2020.jpg", caption: "Năm 2020" },
  { src: "/img2019.jpg", caption: "Năm 2019" },
  { src: "/img2018.jpg", caption: "Năm 2018" },
  { src: "/img2017.jpg", caption: "Năm 2017" },
  { src: "/img2016.jpg", caption: "Năm 2016" },
  { src: "/img2015.jpg", caption: "Năm 2015" },
  { src: "/img2014.jpg", caption: "Năm 2014" },
  { src: "/img2013.jpg", caption: "Năm 2013" },
];

export default function Library() {
  return (
    <div className="flex w-full items-center justify-center bg-[#F6FAFD] py-15">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4">
        <div className="flex flex-col justify-center text-center pb-2">
          <div className="text-primary scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl mb-2">
            THƯ VIỆN ẢNH
          </div>
          <div className="text-primary">————— ♦ —————</div>
          <div className="text-primary mb-6">Hình ảnh hoạt động của Hội thi Tin học trẻ qua các năm.</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-6xl">
          {images.map((img, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="relative w-48 h-36 md:w-56 md:h-40 bg-white rounded overflow-hidden shadow">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-3 font-bold text-primary text-lg text-center">{img.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 