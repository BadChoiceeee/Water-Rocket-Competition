import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

export default function Document() {
  return (
    <div className="flex w-full items-center justify-center bg-[#CDE8F62E] py-15">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4">
        <div className="flex flex-col justify-center pb-4 text-center">
          <div className="text-primary scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
            VĂN BẢN
          </div>
          <div className="text-primary">————— ♦ —————</div>
        </div>
        <div className="flex w-full flex-col items-center justify-evenly gap-12 md:flex-row [&>div]:flex [&>div]:w-4/5 [&>div]:items-center [&>div]:justify-center [&>div]:md:w-1/2">
          <ButtonLink text={"KẾ HOẠCH"} link="/Kehoach_Tenluanuoc2025.pdf" />
          <ButtonLink text={"THỂ LỆ"} link="/Thele_Tenluanuoc2025.pdf" />
        </div>

        <div className="flex flex-col justify-center pt-30 text-center">
          <div className="text-primary scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
            THỬ THÁCH QUA CÁC VÒNG THI
          </div>
          <div className="text-primary">————— ♦ —————</div>
        </div>
        <div className="flex-wrap justify-center gap-12 md:flex">
          <Card
            title={"Vòng 1 Bắn Tên lửa nước tầm xa tính điểm"}
            image={"/img1.JPG"}
            description={
              "Thực hiện thử thách bắn tên lửa nước đến điểm xa nhất trong sân thi đấu để tính điểm"
            }
          />
          <Card
            title={"Vòng 2: Bắn Tên lửa nước tầm cao bung dù"}
            image={"/img3.JPG"}
            description={
              "Thực hiện bắn tên lửa nước có hệ thống bung dù để giữ tên lửa trên không"
            }
          />
          <Card
            title={"Vòng 3: Bắn Tên lửa nước tầm xa trúng mục tiêu"}
            image={"/img4.JPG"}
            description={
              "Thực hiện bắn tên lửa nước trúng mục tiêu của Ban tổ chức công bố"
            }
          />
        </div>
      </div>
    </div>
  );
}

function ButtonLink({ text, link }: { text: string; link: string }) {
  return (
    <div className="bg-gradient-to-r from-[#667db6] to-[#0082c8] p-5 md:mx-10 md:p-10">
      <a href={link} download>
        <button className="group relative inline-flex h-12 cursor-pointer items-center justify-center overflow-hidden rounded-md border border-white bg-transparent px-6 text-xl font-medium text-neutral-200">
          <span>{text}</span>
          <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
            <ArrowRight size={24} />
          </div>
        </button>
      </a>
    </div>
  );
}

function Card({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 md:w-1/4">
      <h2 className="mt-4 text-xl font-bold text-gray-800">{title}</h2>
      <AspectRatio ratio={1 / 1}>
        <Image
          src={image}
          alt={title}
          fill
          className="h-full w-full rounded-md object-cover"
        />
      </AspectRatio>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
