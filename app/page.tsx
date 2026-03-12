import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { FeaturedProducts } from "@/components/featured-products"
import { WhyChooseUs } from "@/components/why-choose-us"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonials"
import { DeliveryGallery } from "@/components/delivery-gallery"
import { CtaBanner } from "@/components/cta-banner"
import { LocationMap } from "@/components/location-map"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <About />
      <Testimonials />
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-foreground">Galeri Pengiriman Real</h2>
          <DeliveryGallery />
        </div>
      </section>
      <CtaBanner />
      <LocationMap />
    </>
  )
}
