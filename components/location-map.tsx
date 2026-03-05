import Link from "next/link"
import { MapPin, Phone, Clock, Navigation } from "lucide-react"

export function LocationMap() {
  return (
    <section id="kontak" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Lokasi & Kontak
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Kunjungi Showroom Kami
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Toko meubel furniture Banjarmasin terlengkap berlokasi strategis di Jl. Tembus
            Mantuil. Kunjungi showroom kami untuk melihat langsung koleksi furniture terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl lg:col-span-3">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=JHX8%2BQJX+Jl.+Tembus+Mantuil,+Kelayan+Sel.,+Kec.+Banjarmasin+Sel.,+Kota+Banjarmasin,+Kalimantan+Selatan+70112&zoom=16&language=id"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Toko Meubel Furniture Banjarmasin"
              className="h-full min-h-[350px] w-full"
            />
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {/* Address */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground">Alamat</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Jl. Tembus Mantuil, Kelayan Sel., Kec. Banjarmasin Sel., Kota Banjarmasin,
                Kalimantan Selatan 70112
              </p>
              <Link
                href="https://maps.google.com/?q=Jl.+Tembus+Mantuil,+Kelayan+Sel.,+Kec.+Banjarmasin+Sel.,+Kota+Banjarmasin,+Kalimantan+Selatan+70112"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                <Navigation className="h-4 w-4" />
                Petunjuk Arah
              </Link>
            </div>

            {/* Phone */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground">Telepon / WhatsApp</h3>
              <Link
                href="https://wa.me/6289692530975"
                className="mt-2 block text-lg font-semibold text-primary hover:underline"
              >
                0896-9253-0975
              </Link>
              <p className="mt-1 text-sm text-muted-foreground">
                Hubungi kami via WhatsApp untuk konsultasi dan pemesanan
              </p>
            </div>

            {/* Hours */}
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground">Jam Operasional</h3>
              <div className="mt-2 flex flex-col gap-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Senin - Minggu</span>
                  <span className="font-semibold text-foreground">Buka 24 Jam</span>
                </div>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Kami siap melayani Anda kapan saja, 7 hari seminggu!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
