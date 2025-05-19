export default function OrganizingCommitteePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ban tổ chức</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Trưởng ban tổ chức</h2>
          <p className="text-gray-600">TS. Nguyễn Văn A</p>
          <p className="text-gray-500 text-sm">Trường Đại học Khoa học Tự nhiên</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Phó ban tổ chức</h2>
          <p className="text-gray-600">ThS. Trần Thị B</p>
          <p className="text-gray-500 text-sm">Trường Đại học Sư phạm Kỹ thuật</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Thư ký</h2>
          <p className="text-gray-600">ThS. Lê Văn C</p>
          <p className="text-gray-500 text-sm">Trường Đại học Bách Khoa</p>
        </div>
      </div>
    </div>
  );
} 