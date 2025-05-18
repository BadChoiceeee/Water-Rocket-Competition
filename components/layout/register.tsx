export default function Register() {
  return (
    <div id="dang-ky" className="flex w-full items-center justify-center bg-[#CDE8F62E] py-15 scroll-mt-[180px]">
      <div className="item container mx-auto flex flex-col gap-4 px-4">
        <div className="flex flex-col justify-center text-center">
          <div className="text-primary scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
            ĐĂNG KÝ DỰ THI HỘI THI TÊN LỬA NƯỚC <br />
            LẦN THỨ 15 NĂM 2025
          </div>
          <div className="text-primary">————— ♦ —————</div>
        </div>
        <div className="flex justify-center pt-5">
          <a
            href="https://docs.google.com/forms/d/1RA9vx6x2aFPy0ejb1ZiaewRJOqlaj83IuLUP5hKpdMM/viewform?edit_requested=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cursor-pointer rounded-sm bg-white px-4 py-2 font-bold text-black shadow transition-colors hover:bg-slate-50">
              Đăng ký tại đây
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
