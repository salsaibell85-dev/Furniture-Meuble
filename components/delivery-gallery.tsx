"use client"

import Image from "next/image"
import { useState } from "react"
import { Truck } from "lucide-react"

const deliveryImages = [
  {
    src: "/images/delivery-1.png",
    alt: "Pengiriman Sofa Velvet Modern",
    title: "Sofa Velvet Modern",
    location: "Banjarmasin Tengah"
  },
  {
    src: "/images/delivery-2.png",
    alt: "Set Meja Makan Kayu Solid",
    title: "Meja Makan Kayu Solid",
    location: "Banjarmasin Selatan"
  },
  {
    src: "/images/delivery-3.png",
    alt: "Meja Tamu Marmer Premium",
    title: "Meja Tamu Marmer",
    location: "Banjarbaru"
  },
  {
    src: "/images/delivery-4.png",
    alt: "Instalasi Lemari Minimalis",
    title: "Lemari Pakaian Minimalis",
    location: "Banjarmasin Utara"
  },
  {
    src: "/images/delivery-5.png",
    alt: "Kamar Tidur Utama Mewah",
    title: "Set Kamar Tidur",
    location: "Handil Bakti"
  },
]

export function DeliveryGallery() {
  const [errors, setErrors] = useState<Record<number, boolean>>({})

  const handleImageError = (index: number) => {
    setErrors(prev => ({ ...prev, [index]: true }))
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {deliveryImages.map((image, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl bg-muted border border-border"
        >
          <div className="aspect-[4/3] w-full relative overflow-hidden">
            {!errors[index] ? (
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-all duration-700 group-hover:scale-110"
                onError={() => handleImageError(index)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-muted p-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Truck className="h-10 w-10 text-muted-foreground/30" />
                  <span className="text-[10px] font-medium text-muted-foreground/60 uppercase tracking-tighter">
                    Dokumentasi Pengiriman
                  </span>
                </div>
              </div>
            )}
            
            <div className="absolute inset-0 flex items-center justify-center bg-muted -z-10">
              <span className="text-xs text-muted-foreground">Loading...</span>
            </div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
            <p className="text-sm font-medium text-emerald-400 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
              {image.location}
            </p>
            <h3 className="text-xl font-bold text-white transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0 delay-75">
              {image.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  )
}
