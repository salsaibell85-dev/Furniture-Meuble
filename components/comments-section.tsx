"use client"

import { useState } from "react"
import { Send, User, Mail, FileText, MessageSquare, Star } from "lucide-react"

interface Comment {
  id: number
  name: string
  email: string
  subject: string
  message: string
  date: string
}

const initialComments: Comment[] = [
  {
    id: 1,
    name: "Hj. Siti Rahmah",
    email: "siti@example.com",
    subject: "Kualitas Sofa",
    message: "Saya sudah berlangganan di toko meubel ini sejak 5 tahun lalu. Kualitas furniturenya sangat bagus dan tahan lama. Sofa yang saya beli masih terlihat seperti baru.",
    date: "12 Maret 2026"
  },
  {
    id: 2,
    name: "H. Ahmad Fauzi",
    email: "ahmad@example.com",
    subject: "Custom Furniture",
    message: "Toko furniture Banjarmasin yang paling lengkap menurut saya. Saya pernah memesan custom furniture untuk kantor dan hasilnya sangat memuaskan.",
    date: "10 Maret 2026"
  }
]

export function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate network delay
    setTimeout(() => {
      const newComment: Comment = {
        id: Date.now(),
        ...formData,
        date: new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date())
      }

      setComments([newComment, ...comments])
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitting(false)
    }, 800)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
      {/* Form Section - Matching the Mockup */}
      <div className="rounded-3xl bg-[#f5f1e9] p-8 shadow-sm md:p-10">
        <h2 className="mb-8 font-serif text-3xl font-bold text-[#352014]">
          Kirim Pesan
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nama Lengkap"
                required
                className="w-full rounded-xl border-none bg-white/70 px-6 py-4 text-[#352014] placeholder-[#8b7e74] transition-all focus:bg-white focus:ring-2 focus:ring-[#6d4c3d]/20 outline-none"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full rounded-xl border-none bg-white/70 px-6 py-4 text-[#352014] placeholder-[#8b7e74] transition-all focus:bg-white focus:ring-2 focus:ring-[#6d4c3d]/20 outline-none"
              />
            </div>
          </div>
          
          <div className="relative">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subjek"
              required
              className="w-full rounded-xl border-none bg-white/70 px-6 py-4 text-[#352014] placeholder-[#8b7e74] transition-all focus:bg-white focus:ring-2 focus:ring-[#6d4c3d]/20 outline-none"
            />
          </div>
          
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Pesan Anda"
              required
              rows={5}
              className="w-full rounded-xl border-none bg-white/70 px-6 py-4 text-[#352014] placeholder-[#8b7e74] transition-all focus:bg-white focus:ring-2 focus:ring-[#6d4c3d]/20 outline-none resize-none"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-[#6d4c3d] py-5 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#5a3f32] active:scale-[0.98] disabled:opacity-70"
          >
            {isSubmitting ? "Mengirim..." : "Kirim Pesan Sekarang"}
          </button>
        </form>
      </div>

      {/* Results Section - List of Comments */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <h3 className="font-serif text-2xl font-bold text-foreground">
            Daftar Komentar
          </h3>
          <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-bold text-primary">
            {comments.length} Masukan
          </span>
        </div>
        
        <div className="max-h-[600px] space-y-4 overflow-y-auto pr-2 custom-scrollbar">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-md animate-in fade-in slide-in-from-top-4 duration-500"
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{comment.name}</h4>
                    <p className="text-xs text-muted-foreground">{comment.date}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <h5 className="mb-2 text-sm font-bold text-primary/80 uppercase tracking-wide">
                {comment.subject}
              </h5>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {comment.message}
              </p>
            </div>
          ))}
          
          {comments.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center opacity-40">
              <MessageSquare className="mb-4 h-12 w-12" />
              <p>Belum ada komentar. Jadilah yang pertama!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
