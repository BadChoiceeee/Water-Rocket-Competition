export default function ChallengesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Thử thách</h1>
      <div className="grid gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Thử thách 1: Độ chính xác</h2>
          <p className="text-gray-600 mb-4">
            Thí sinh cần phóng tên lửa nước trúng vào mục tiêu ở khoảng cách 30m.
          </p>
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-medium mb-2">Yêu cầu:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Khoảng cách: 30m</li>
              <li>Mục tiêu: Vòng tròn đường kính 2m</li>
              <li>Thời gian: 3 phút/đội</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Thử thách 2: Độ cao</h2>
          <p className="text-gray-600 mb-4">
            Thí sinh cần phóng tên lửa nước đạt độ cao tối đa có thể.
          </p>
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-medium mb-2">Yêu cầu:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Thời gian: 3 phút/đội</li>
              <li>Đánh giá: Độ cao tối đa đạt được</li>
              <li>Giới hạn: Không giới hạn số lần phóng</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 