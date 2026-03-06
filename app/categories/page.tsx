import { Categories } from "@/components/categories"
import { CtaBanner } from "@/components/cta-banner"

export default function CategoriesPage() {
    return (
        <div className="pt-10">
            <div className="mx-auto max-w-7xl px-4 py-16">
                <h1 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
                    Kategori Furnitur
                </h1>
                <p className="max-w-2xl text-lg text-muted-foreground">
                    Temukan furnitur impian berdasarkan kebutuhan ruangan Anda. Kami menyediakan berbagai pilihan kategori terbaik.
                </p>
            </div>
            <Categories />
            <CtaBanner />
        </div>
    )
}
