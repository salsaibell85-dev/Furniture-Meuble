import { Truck, Shield, Clock, BadgeCheck, Wrench, CreditCard } from "lucide-react"

const features = [
  {
    icon: BadgeCheck,
    title: "Kualitas Terjamin",
    description:
      "Semua furniture kami dibuat dari bahan pilihan berkualitas tinggi dengan standar produksi terbaik.",
  },
  {
    icon: Truck,
    title: "Pengiriman Gratis",
    description:
      "Gratis pengiriman ke seluruh wilayah Banjarmasin dan Kalimantan Selatan untuk pembelian tertentu.",
  },
  {
    icon: Shield,
    title: "Garansi Resmi",
    description:
      "Setiap produk furniture dilengkapi garansi resmi hingga 2 tahun untuk ketenangan Anda.",
  },
  {
    icon: Clock,
    title: "Buka 24 Jam",
    description:
      "Toko meubel kami buka 24 jam setiap hari, siap melayani kebutuhan furniture Anda kapan saja.",
  },
  {
    icon: Wrench,
    title: "Layanan Custom",
    description:
      "Kami menyediakan layanan custom furniture sesuai ukuran dan desain yang Anda inginkan.",
  },
  {
    icon: CreditCard,
    title: "Cicilan Mudah",
    description:
      "Tersedia opsi cicilan dan pembayaran fleksibel agar furniture impian lebih terjangkau.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Mengapa Memilih Kami
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Toko Meubel Terbaik di Banjarmasin</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Kami adalah toko furniture Banjarmasin yang telah dipercaya ribuan pelanggan
            dengan pelayanan terbaik dan produk berkualitas premium.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-accent/30 hover:shadow-md"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
