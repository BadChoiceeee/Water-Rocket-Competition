'use client';

import Image from "next/image";
import { useEffect } from "react";

interface FlickrAlbum {
  id: string;
  title: string;
  year: string;
  coverImage: string;
  albumUrl: string;
}

const flickrAlbums: FlickrAlbum[] = [
  {
    id: "72177720315153631",
    title: "Hội thi Tên lửa nước năm 2024",
    year: "2024",
    coverImage: "https://live.staticflickr.com/65535/54533764225_4dcb2eb61c_w.jpg",
    albumUrl: "https://www.flickr.com/photos/202889983@N08/albums/72177720326253421/"
  },
  {
    id: "72177720315153620",
    title: "Hội thi Tên lửa nước năm 2023",
    year: "2023",
    coverImage: "https://live.staticflickr.com/65535/53560867299_7fdbae2d9a_k.jpg",
    albumUrl: "https://www.flickr.com/photos/152044255@N07/albums/72177720315153620"
  },
  {
    id: "72177720315153621",
    title: "Hội thi Tên lửa nước năm 2022",
    year: "2022",
    coverImage: "https://live.staticflickr.com/65535/53560867299_7fdbae2d9a_k.jpg",
    albumUrl: "https://www.flickr.com/photos/152044255@N07/albums/72177720315153621"
  },
  {
    id: "72177720315153624",
    title: "Hội thi Tên lửa nước năm 2019",
    year: "2019",
    coverImage: "https://live.staticflickr.com/65535/53560867299_7fdbae2d9a_k.jpg",
    albumUrl: "https://www.flickr.com/photos/152044255@N07/albums/72177720315153624"
  },
  {
    id: "72177720315153625",
    title: "Hội thi Tên lửa nước năm 2018",
    year: "2018",
    coverImage: "https://live.staticflickr.com/65535/53560867299_7fdbae2d9a_k.jpg",
    albumUrl: "https://www.flickr.com/photos/152044255@N07/albums/72177720315153625"
  },
];

export default function Library() {
  useEffect(() => {
    // Load Flickr embed script
    const script = document.createElement('script');
    script.src = '//embedr.flickr.com/assets/client-code.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="thu-vien-anh" className="container mx-auto px-4 py-15 scroll-mt-[180px]">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-primary scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          THƯ VIỆN ẢNH
        </div>
        <div className="text-primary">————— ♦ —————</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10 w-full max-w-6xl mx-auto">
        {flickrAlbums.map((album) => (
          <div key={album.id} className="flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] md:w-56 md:h-40 bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
              <a 
                data-flickr-embed="true" 
                href={album.albumUrl}
                title={album.title}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image
                  src={album.coverImage}
                  alt={album.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 224px"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>
            <div className="mt-2 md:mt-3 font-bold text-primary text-base md:text-lg text-center">
              Năm {album.year}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 