import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="bg-accent py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="font-serif text-3xl font-bold text-accent-foreground md:text-4xl lg:text-5xl">
          <span className="text-balance">Siap Memperindah Rumah Anda?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-accent-foreground/80">
          Kunjungi showroom kami atau hubungi via WhatsApp untuk konsultasi gratis.
          Kami siap membantu menemukan furniture sempurna untuk rumah Anda.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://wa.me/6289692530975"
            className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            <Phone className="h-4 w-4" />
            Hubungi via WhatsApp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#kontak"
            className="flex items-center gap-2 rounded-lg border-2 border-accent-foreground/30 px-8 py-4 text-sm font-semibold text-accent-foreground transition-all hover:border-accent-foreground/60"
          >
            Lihat Lokasi Kami
          </Link>
        </div>
      </div>
    </section>
  )
}
