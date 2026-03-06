import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"
import Image from "next/image"

export default function TestimonialsPage() {
    return (
        <div className="pt-10">
            <div className="mx-auto max-w-7xl px-4 py-16 text-center">
                <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
                    Testimoni & Galeri Pelanggan
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                    Kepuasan Anda adalah kebanggaan kami. Lihat apa kata mereka yang telah mempercayakan keindahan rumahnya kepada Meubel Banjarmasin.
                </p>
            </div>

            <Testimonials />

            <div className="bg-background py-20">
                <div className="mx-auto max-w-7xl px-4">
                    <h2 className="mb-12 text-center font-serif text-3xl font-bold">Galeri Pengiriman Real</h2>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="relative aspect-square overflow-hidden rounded-xl">
                                <Image
                                    src={`/images/delivery-${(i % 3) + 1}.jpg`}
                                    alt={`Pengiriman Meubel Banjarmasin ${i}`}
                                    fill
                                    className="object-cover transition-transform hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <CtaBanner />
        </div>
    )
}
