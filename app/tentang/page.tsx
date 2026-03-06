import { WhyChooseUs } from "@/components/why-choose-us"
import { About } from "@/components/about"
import { CtaBanner } from "@/components/cta-banner"

export default function AboutPage() {
    return (
        <div className="pt-10">
            <div className="mx-auto max-w-7xl px-4 py-16">
                <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
                    Tentang Meubel Banjarmasin
                </h1>
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="space-y-6 text-lg text-muted-foreground">
                        <p>
                            Meubel Banjarmasin hadir sebagai solusi kebutuhan furniture berkualitas bagi masyarakat Kalimantan Selatan. Dengan pengalaman bertahun-tahun, kami memahami bahwa setiap rumah memiliki cerita yang unik.
                        </p>
                        <p>
                            Visi kami adalah menjadi pusat furniture nomor satu di Banjarmasin yang mengedepankan kualitas, estetika, dan harga yang terjangkau bagi semua kalangan.
                        </p>
                        <p>
                            Misi kami adalah memberikan pelayanan terbaik melalui produk-produk pilihan, proses pengiriman yang cepat untuk area Banjarmasin dan sekitarnya, serta layanan purna jual yang memuaskan.
                        </p>
                    </div>
                    <div className="rounded-2xl bg-secondary p-8">
                        <h2 className="mb-4 font-serif text-2xl font-bold">Keunggulan Kami</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">1</span>
                                <span>Material kayu pilihan berkualitas tinggi (Kayu Jati, Mahoni, dll)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">2</span>
                                <span>Desain modern dan elegan yang selalu mengikuti tren terbaru</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">3</span>
                                <span>Gratis konsultasi tata ruang untuk pelanggan Banjarmasin</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <WhyChooseUs />
            <About />
            <CtaBanner />
        </div>
    )
}
