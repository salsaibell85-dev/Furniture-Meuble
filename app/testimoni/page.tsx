import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"
import { DeliveryGallery } from "@/components/delivery-gallery"

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
                    <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground">Galeri Pengiriman Real</h2>
                    <DeliveryGallery />
                </div>
            </div>

            <CtaBanner />
        </div>
    )
}
