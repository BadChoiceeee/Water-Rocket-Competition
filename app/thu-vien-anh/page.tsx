import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Thư viện ảnh</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder images - replace with actual images */}
        <div className="relative aspect-square">
          <Image
            src="/placeholder.jpg"
            alt="Gallery image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative aspect-square">
          <Image
            src="/placeholder.jpg"
            alt="Gallery image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative aspect-square">
          <Image
            src="/placeholder.jpg"
            alt="Gallery image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
} 