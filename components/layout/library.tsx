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
    id: "72177720315153622",
    title: "Hội thi Tên lửa nước năm 2021",
    year: "2021",
    coverImage: "https://live.staticflickr.com/65535/53560867299_7fdbae2d9a_k.jpg",
    albumUrl: "https://www.flickr.com/photos/152044255@N07/albums/72177720315153622"
  },
  {
    id: "72177720315153623",
    title: "Hội thi Tên lửa nước năm 2020",
    year: "2020",
    coverImage: "https://live.staticflickr.com/65535/53560867299_7fdbae2d9a_k.jpg",
    albumUrl: "https://www.flickr.com/photos/152044255@N07/albums/72177720315153623"
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
  {
    id: "72177720315153626",
    title: "Hội thi Tên lửa nước năm 2017",
    year: "2017",
    coverImage: "https://live.staticflickr.com/65535/53560867299_7fdbae2d9a_k.jpg",
    albumUrl: "https://www.flickr.com/photos/152044255@N07/albums/72177720315153626"
  },
  {
    id: "72177720315153627",
    title: "Hội thi Tên lửa nước năm 2016",
    year: "2016",
    coverImage: "https://live.staticflickr.com/65535/53560867299_7fdbae2d9a_k.jpg",
    albumUrl: "https://www.flickr.com/photos/152044255@N07/albums/72177720315153627"
  },
  {
    id: "72177720315153628",
    title: "Hội thi Tên lửa nước năm 2015",
    year: "2015",
    coverImage: "https://live.staticflickr.com/65535/53560867299_7fdbae2d9a_k.jpg",
    albumUrl: "https://www.flickr.com/photos/152044255@N07/albums/72177720315153628"
  },
  {
    id: "72177720315153629",
    title: "Hội thi Tên lửa nước năm 2014",
    year: "2014",
    coverImage: "https://live.staticflickr.com/65535/53560867299_7fdbae2d9a_k.jpg",
    albumUrl: "https://www.flickr.com/photos/152044255@N07/albums/72177720315153629"
  },
  {
    id: "72177720315153630",
    title: "Hội thi Tên lửa nước năm 2013",
    year: "2013",
    coverImage: "https://live.staticflickr.com/65535/53560867299_7fdbae2d9a_k.jpg",
    albumUrl: "https://www.flickr.com/photos/152044255@N07/albums/72157681958819005"
  }
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
    <section className="flex w-full items-center justify-center bg-[#F6FAFD] py-15">
      <div id="thu-vien-anh" className="container mx-auto px-4 pb-4 pt-10">
        <div className="flex flex-col justify-center text-center pb-2">
          <h2 className="text-primary scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl mb-2">
            THƯ VIỆN ẢNH
          </h2>
          <div className="text-primary">————— ♦ —————</div>
          <p className="text-primary mb-6">Hình ảnh hoạt động của Hội thi Tên lửa nước qua các năm.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-6xl mx-auto">
          {flickrAlbums.map((album) => (
            <div key={album.id} className="flex flex-col items-center">
              <div className="relative w-48 h-36 md:w-56 md:h-40 bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
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
                    sizes="(max-width: 768px) 192px, 224px"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
              <div className="mt-3 font-bold text-primary text-lg text-center">
                Năm {album.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 