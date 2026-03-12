import { CommentsSection } from "@/components/comments-section"
import { Testimonials } from "@/components/testimonials"
import { CtaBanner } from "@/components/cta-banner"
import { DeliveryGallery } from "@/components/delivery-gallery"

export default function TestimonialsPage() {
    return (
        <div className="pt-10">
            <div className="mx-auto max-w-7xl px-4 py-16 text-center">
                <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
                    Komentar & Testimoni
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                    Berikan masukan Anda dan lihat ulasan pelanggan kami. Kepuasan Anda adalah kebanggaan Nova Interior design.
                </p>
            </div>

            <div className="mx-auto max-w-7xl px-4 pb-20">
                <CommentsSection />
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
