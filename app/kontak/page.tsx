import { LocationMap } from "@/components/location-map"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="pt-10">
            <div className="mx-auto max-w-7xl px-4 py-16">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <h1 className="mb-6 font-serif text-4xl font-bold text-foreground md:text-5xl">
                            Hubungi Kami
                        </h1>
                        <p className="mb-10 text-lg text-muted-foreground">
                            Ada pertanyaan atau ingin melakukan pemesanan khusus? Tim kami siap melayani Anda 24 jam sehari.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Telepon / WhatsApp</p>
                                    <p className="text-xl font-semibold">0896-9253-0975</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Lokasi Toko</p>
                                    <p className="text-xl font-semibold">Jl. Tembus Mantuil, Kelayan Sel., Banjarmasin Selatan</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Jam Operasional</p>
                                    <p className="text-xl font-semibold">Buka 24 Jam (Setiap Hari)</p>
                                </div>
                            </div>
                        </div>

                        <form className="mt-12 space-y-4 rounded-2xl bg-secondary p-8">
                            <h3 className="mb-4 font-serif text-2xl font-bold">Kirim Pesan</h3>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <input type="text" placeholder="Nama Lengkap" className="rounded-lg border border-border bg-background p-3 outline-none focus:ring-2 focus:ring-primary" />
                                <input type="email" placeholder="Email" className="rounded-lg border border-border bg-background p-3 outline-none focus:ring-2 focus:ring-primary" />
                            </div>
                            <input type="text" placeholder="Subjek" className="w-full rounded-lg border border-border bg-background p-3 outline-none focus:ring-2 focus:ring-primary" />
                            <textarea placeholder="Pesan Anda" rows={4} className="w-full rounded-lg border border-border bg-background p-3 outline-none focus:ring-2 focus:ring-primary" />
                            <button className="w-full rounded-lg bg-primary py-4 font-bold text-primary-foreground transition-opacity hover:opacity-90">Kirim Pesan Sekarang</button>
                        </form>
                    </div>

                    <div className="flex flex-col">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="font-serif text-2xl font-bold">Lokasi Kami</h2>
                            <a
                                href="https://maps.google.com/?q=-3.3345,114.5917"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-bold text-primary hover:underline"
                            >
                                Buka di Google Maps
                            </a>
                        </div>
                        <div className="h-full min-h-[500px] overflow-hidden rounded-2xl border border-border shadow-xl">
                            <LocationMap />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
