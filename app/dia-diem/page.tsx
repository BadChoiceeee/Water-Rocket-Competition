export default function VenuePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Địa điểm tổ chức</h1>
      <div className="grid gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Sân vận động Quân khu 7</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Địa chỉ:</h3>
              <p className="text-gray-600">
                202 Hoàng Văn Thụ, Phường 9, Quận Phú Nhuận, TP.HCM
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Thời gian:</h3>
              <p className="text-gray-600">
                Ngày 15/04/2024 - 8:00 - 17:00
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Hướng dẫn di chuyển:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Xe buýt: Tuyến 06, 14, 20</li>
                <li>Xe máy: Đi theo đường Hoàng Văn Thụ</li>
                <li>Xe ô tô: Có bãi đậu xe trong sân vận động</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Bản đồ</h2>
          <div className="aspect-video bg-gray-200 rounded-lg">
            {/* Thêm iframe Google Maps ở đây */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424177340546!2d106.6802!3d10.7977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ3JzUxLjUiTiAxMDbCsDQwJzQ5LjciRQ!5e0!3m2!1svi!2s!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
} 