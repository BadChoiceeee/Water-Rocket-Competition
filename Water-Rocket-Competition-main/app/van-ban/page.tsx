export default function DocumentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Văn bản</h1>
      <div className="grid gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Thể lệ cuộc thi</h2>
          <div className="space-y-4">
            <a href="#" className="block p-4 border rounded hover:bg-gray-50">
              <h3 className="font-medium">Thể lệ cuộc thi Tên lửa nước TP.HCM 2024</h3>
              <p className="text-sm text-gray-500 mt-1">Ngày đăng: 01/03/2024</p>
            </a>
            <a href="#" className="block p-4 border rounded hover:bg-gray-50">
              <h3 className="font-medium">Hướng dẫn đăng ký tham gia</h3>
              <p className="text-sm text-gray-500 mt-1">Ngày đăng: 01/03/2024</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 