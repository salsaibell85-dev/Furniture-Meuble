"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/6281256440494?text=Halo%2C%20saya%20tertarik%20dengan%20furniture%20di%20toko%20Meubel%20Banjarmasin.%20Boleh%20minta%20info%20lebih%20lanjut%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#ffffff] shadow-lg transition-transform hover:scale-110"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Link>
  )
}
