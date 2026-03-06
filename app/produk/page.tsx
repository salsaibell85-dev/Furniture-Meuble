import { FeaturedProducts } from "@/components/featured-products"
import { Categories } from "@/components/categories"

export default function ProductsPage() {
    return (
        <div className="pt-10">
            <div className="mx-auto max-w-7xl px-4 py-16 text-center">
                <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
                    Katalog Produk Meubel
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                    Koleksi lengkap meubel furniture berkualitas tinggi untuk mempercantik hunian Anda di Banjarmasin.
                </p>
            </div>
            <FeaturedProducts />
            <div className="bg-background pb-20">
                <div className="mx-auto max-w-7xl px-4">
                    <h2 className="mb-8 text-center font-serif text-2xl font-bold">Cari Berdasarkan Kategori</h2>
                    <Categories />
                </div>
            </div>
        </div>
    )
}
