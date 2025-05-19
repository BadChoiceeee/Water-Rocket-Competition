export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Liên hệ</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Thông tin liên hệ</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Địa chỉ:</h3>
              <p className="text-gray-600">
                Trung tâm Phát triển Khoa học và Công nghệ Trẻ<br />
                1 Phạm Ngọc Thạch, Quận 1, TP.HCM
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Điện thoại:</h3>
              <p className="text-gray-600">(028) 38.230.780 – (028) 38. 233. 363</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Email:</h3>
              <p className="text-gray-600">khoahoctre@gmail.com</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Thời gian làm việc:</h3>
              <p className="text-gray-600">
                Thứ 2 - Thứ 6: 8:00 - 17:00<br />
                Thứ 7: 8:00 - 12:00
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Gửi tin nhắn</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Họ và tên</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Nhập họ và tên"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Nhập email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nội dung</label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                rows={4}
                placeholder="Nhập nội dung tin nhắn"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 