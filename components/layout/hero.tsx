import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

export default function Hero() {
  return (
    <div id="gioi-thieu" className="container mx-auto px-4 pb-4 pt-10">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-primary scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl mb-[10px]">
          GIỚI THIỆU
        </div>
        <div className="text-primary">————— ♦ —————</div>
      </div>
      <div className="grid-cols-2 lg:grid">
        <div className="flex items-center justify-center transition-transform hover:scale-110">
          <AspectRatio ratio={16 / 9}>
            <Image src={"/logo.png"} alt="" fill priority />
          </AspectRatio>
        </div>
        <ul className="text-primary my-6 ml-6 list-disc text-xl [&_span]:font-bold [&>li]:mt-2">
          <li>
            <span>Hội thi Tên lửa nước TP. Hồ Chí Minh</span> là hoạt động
            thường niên do Thành Đoàn TP. Hồ Chí Minh tổ chức, Trung tâm Phát
            triển Khoa học Trẻ là đơn vị thường trực Ban Tổ chức.
          </li>
          <li>
            Hội thi là sân chơi giao lưu, trao đổi kiến thức về ứng dụng khoa
            học, sáng tạo và giải trí lành mạnh cho thanh thiếu nhi. Thúc đẩy
            niềm đam mê khoa học, sáng tạo trong thanh thiếu nhi
          </li>
          <li>
            Dành cho đối tượng Đội viên, đoàn viên, học sinh đang theo học tại
            các trường Trung học cơ sở, Trung học phổ thông, Trung tâm Giáo dục
            nghề nghiệp - Giáo dục thường xuyên trên địa bàn Thành phố; Đoàn
            viên, thanh niên đang làm việc, sinh hoạt tại các Đoàn Phường, Xã,
            Thị trấn và các đơn vị lực lượng vũ trang thuộc: lực lượng vũ trang
            các cấp, các đơn vị lực lượng vũ trang đóng quân trên địa bàn Thành
            phố.
          </li>
        </ul>
      </div>
    </div>
  );
}
