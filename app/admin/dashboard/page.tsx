"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { LayoutDashboard, LogOut, Package, Users, Settings, Loader2, Plus, Edit, Trash2, Search, CheckCircle, Clock, X } from "lucide-react"

// Mock Data
let idCounter = 5;
const initialMockProducts = [
  { id: 1, name: "Sofa Ruang Tamu Premium", category: "Sofa", price: 4599000, stock: 12, status: "Active" },
  { id: 2, name: "Meja Tamu Kayu Jati", category: "Meja", price: 1299000, stock: 5, status: "Low Stock" },
  { id: 3, name: "Lemari Pakaian 3 Pintu", category: "Lemari", price: 3799000, stock: 8, status: "Active" },
  { id: 4, name: "Ranjang Kayu Minimalis", category: "Tempat Tidur", price: 3299000, stock: 0, status: "Out of Stock" },
]

const mockCustomers = [
  { id: 1, name: "Budi Santoso", email: "budi@example.com", phone: "081234567890", orders: 3, totalSpent: 12500000, joined: "2023-11-15" },
  { id: 2, name: "Siti Aminah", email: "siti@example.com", phone: "081987654321", orders: 1, totalSpent: 4599000, joined: "2024-01-20" },
  { id: 3, name: "Ahmad Dahlan", email: "ahmad@example.com", phone: "085612349876", orders: 5, totalSpent: 24000000, joined: "2023-08-05" },
]

const mockOrders = [
  { id: "ORD-2026-001", customer: "Budi Santoso", date: "Hari ini", total: 4599000, status: "Selesai" },
  { id: "ORD-2026-002", customer: "Siti Aminah", date: "Kemarin", total: 1299000, status: "Diproses" },
  { id: "ORD-2026-003", customer: "Ahmad Dahlan", date: "12 Mar 2026", total: 3799000, status: "Menunggu" },
]

export default function AdminDashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("dashboard")
  const router = useRouter()

  // Interactivity States
  const [products, setProducts] = useState(initialMockProducts)
  const [isAddingProduct, setIsAddingProduct] = useState(false)
  const [newProduct, setNewProduct] = useState({ name: '', category: 'Sofa', price: 0, stock: 0 })
  const [saveSettingsText, setSaveSettingsText] = useState("Simpan Perubahan")

  useEffect(() => {
    async function checkAuth() {
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        router.push("/admin/login")
      } else {
        setUser(session.user)
        setLoading(false)
      }
    }

    checkAuth()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  // Action Handlers
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault()
    const status = newProduct.stock > 10 ? "Active" : newProduct.stock > 0 ? "Low Stock" : "Out of Stock"
    const productToAdd = {
        id: idCounter++,
        name: newProduct.name,
        category: newProduct.category,
        price: Number(newProduct.price),
        stock: Number(newProduct.stock),
        status: status
    }
    setProducts([productToAdd, ...products])
    setIsAddingProduct(false)
    setNewProduct({ name: '', category: 'Sofa', price: 0, stock: 0 })
  }

  const handleDeleteProduct = (id: number) => {
      setProducts(products.filter((p: any) => p.id !== id))
  }

  const handleExportCSV = () => {
      const headers = ["ID", "Nama", "Email", "Telepon", "Pesanan", "Total Belanja", "Bergabung"]
      const csvContent = [
          headers.join(","),
          ...mockCustomers.map(c => `${c.id},"${c.name}",${c.email},${c.phone},${c.orders},${c.totalSpent},${c.joined}`)
      ].join("\n")

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
      const link = document.createElement("a")
      const url = URL.createObjectURL(blob)
      link.setAttribute("href", url)
      link.setAttribute("download", "data_pelanggan_nova_interior.csv")
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
  }

  const handleSaveSettings = (e: React.FormEvent) => {
      e.preventDefault()
      setSaveSettingsText("Menyimpan...")
      setTimeout(() => {
          setSaveSettingsText("Tersimpan!")
          setTimeout(() => setSaveSettingsText("Simpan Perubahan"), 2000)
      }, 1000)
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fdfaf6]">
        <div className="flex flex-col items-center gap-4 text-center">
          <Loader2 className="h-10 w-10 animate-spin text-[#6d4c3d]" />
          <p className="text-sm font-medium text-muted-foreground tracking-wide">Memeriksa Autentikasi...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#fdfaf6] lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full border-r border-[#e8dfcf] bg-white lg:w-72">
        <div className="flex h-full flex-col px-6 py-8">
          <div className="mb-10 px-2">
            <h2 className="font-serif text-2xl font-bold text-[#352014]">Nova Interior</h2>
            <p className="text-xs font-bold uppercase tracking-widest text-[#6d4c3d]/60">Admin Dashboard</p>
          </div>

          <nav className="flex-1 space-y-2">
            <button 
              onClick={() => setActiveTab("dashboard")}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 font-bold transition-all ${
                activeTab === "dashboard" ? "bg-primary/10 text-primary" : "text-muted-foreground/80 hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </button>
            <button 
              onClick={() => setActiveTab("produk")}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 font-bold transition-all ${
                activeTab === "produk" ? "bg-primary/10 text-primary" : "text-muted-foreground/80 hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <Package className="h-5 w-5" />
              <span>Kelola Produk</span>
            </button>
            <button 
              onClick={() => setActiveTab("pelanggan")}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 font-bold transition-all ${
                activeTab === "pelanggan" ? "bg-primary/10 text-primary" : "text-muted-foreground/80 hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <Users className="h-5 w-5" />
              <span>Pelanggan</span>
            </button>
            <button 
              onClick={() => setActiveTab("pengaturan")}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 font-bold transition-all ${
                activeTab === "pengaturan" ? "bg-primary/10 text-primary" : "text-muted-foreground/80 hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <Settings className="h-5 w-5" />
              <span>Pengaturan</span>
            </button>
          </nav>

          <div className="mt-auto pt-6 border-t border-[#f0ebe3]">
            <div className="mb-6 flex items-center gap-3 px-2">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-[#fdfaf6] border border-[#e8dfcf]">
                <div className="flex h-full w-full items-center justify-center text-sm font-bold text-[#6d4c3d]">
                  {user?.email?.charAt(0).toUpperCase()}
                </div>
              </div>
              <div className="overflow-hidden">
                <p className="truncate text-sm font-bold text-[#352014]">{user?.email}</p>
                <p className="text-[10px] uppercase font-bold text-[#6d4c3d]/50">Administrator</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="group flex w-full items-center gap-3 rounded-xl px-4 py-3 font-bold text-red-600 transition-all hover:bg-red-50"
            >
              <LogOut className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 lg:p-14 overflow-y-auto max-h-screen animate-in fade-in slide-in-from-bottom-4 duration-700">
        <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-serif text-3xl font-bold text-[#352014]">Dashboard Overview</h1>
            <p className="mt-1 text-muted-foreground italic">Selamat datang kembali, Master Admin!</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white px-4 py-3 border border-[#e8dfcf] shadow-sm">
              <span className="text-xs font-bold text-muted-foreground block">Server Status</span>
              <span className="text-sm font-bold text-green-600 flex items-center gap-1.5 leading-none">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                Live & Connected
              </span>
            </div>
          </div>
        </header>

        {activeTab === "dashboard" && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group rounded-3xl bg-white p-8 border border-[#e8dfcf] shadow-sm transition-all hover:shadow-md hover:border-[#6d4c3d]/20">
                <p className="text-xs font-bold uppercase tracking-widest text-[#6d4c3d]/60 mb-2">Total Pendapatan</p>
                <h3 className="text-4xl font-bold text-[#352014]">Rp 41M</h3>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-green-600">
                  <span className="rounded-full bg-green-50 px-2 py-1">+12.5% Bulan ini</span>
                </div>
              </div>
              <div className="group rounded-3xl bg-white p-8 border border-[#e8dfcf] shadow-sm transition-all hover:shadow-md hover:border-[#6d4c3d]/20">
                <p className="text-xs font-bold uppercase tracking-widest text-[#6d4c3d]/60 mb-2">Total Pesanan</p>
                <h3 className="text-4xl font-bold text-[#352014]">128</h3>
                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-accent">
                  <span className="rounded-full bg-accent/5 px-2 py-1">5 Menunggu Konfirmasi</span>
                </div>
              </div>
              <div className="group rounded-3xl bg-white p-8 border border-[#e8dfcf] shadow-sm transition-all hover:shadow-md hover:border-[#6d4c3d]/20">
                <p className="text-xs font-bold uppercase tracking-widest text-[#6d4c3d]/60 mb-2">Total Pelanggan</p>
                <h3 className="text-4xl font-bold text-[#352014]">84</h3>
                <p className="mt-4 text-xs font-bold text-green-600"><span className="rounded-full bg-green-50 px-2 py-1">+3 Pelanggan Baru</span></p>
              </div>
            </div>

            {/* Quick Actions / Recent Activity Placeholder */}
            <div className="mt-10">
                <h3 className="text-xl font-bold text-[#352014] mb-6 font-serif">Aktivitas Pesanan Terbaru</h3>
                <div className="bg-white rounded-3xl border border-[#e8dfcf] shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-[#6d4c3d] uppercase bg-[#fdfaf6] border-b border-[#e8dfcf]">
                                <tr>
                                    <th className="px-6 py-4 font-bold">ID Pesanan</th>
                                    <th className="px-6 py-4 font-bold">Pelanggan</th>
                                    <th className="px-6 py-4 font-bold">Tanggal</th>
                                    <th className="px-6 py-4 font-bold">Total</th>
                                    <th className="px-6 py-4 font-bold">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockOrders.map((order, idx) => (
                                    <tr key={idx} className="border-b border-[#e8dfcf] last:border-0 hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-[#352014]">{order.id}</td>
                                        <td className="px-6 py-4 text-muted-foreground">{order.customer}</td>
                                        <td className="px-6 py-4 text-muted-foreground">{order.date}</td>
                                        <td className="px-6 py-4 font-medium text-[#352014]">Rp {order.total.toLocaleString("id-ID")}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                order.status === 'Selesai' ? 'bg-green-100 text-green-700' : 
                                                order.status === 'Diproses' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                                            }`}>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </>
        )}

        {activeTab === "produk" && (
          <div className="animate-in fade-in zoom-in-95 duration-500 relative">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-[#352014] font-serif">Daftar Produk</h3>
                <button 
                    onClick={() => setIsAddingProduct(true)}
                    className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
                >
                    <Plus className="h-4 w-4" /> Tambah Produk
                </button>
            </div>
            
            <div className="bg-white rounded-3xl border border-[#e8dfcf] shadow-sm overflow-hidden mb-6 flex items-center px-4 py-3">
                <Search className="h-5 w-5 text-muted-foreground mr-3" />
                <input 
                    type="text" 
                    placeholder="Cari nama produk, kategori..." 
                    className="w-full bg-transparent border-none outline-none text-sm text-[#352014] placeholder:text-muted-foreground focus:ring-0"
                />
            </div>

            <div className="bg-white rounded-3xl border border-[#e8dfcf] shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-[#6d4c3d] uppercase bg-[#fdfaf6] border-b border-[#e8dfcf]">
                            <tr>
                                <th className="px-6 py-4 font-bold">Produk</th>
                                <th className="px-6 py-4 font-bold">Kategori</th>
                                <th className="px-6 py-4 font-bold">Harga</th>
                                <th className="px-6 py-4 font-bold">Stok</th>
                                <th className="px-6 py-4 font-bold">Status</th>
                                <th className="px-6 py-4 font-bold text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id} className="border-b border-[#e8dfcf] last:border-0 hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-[#352014]">{product.name}</td>
                                    <td className="px-6 py-4 text-muted-foreground">{product.category}</td>
                                    <td className="px-6 py-4 font-medium text-[#352014]">Rp {product.price.toLocaleString("id-ID")}</td>
                                    <td className="px-6 py-4 text-muted-foreground">{product.stock}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                            product.status === 'Active' ? 'bg-green-100 text-green-700' : 
                                            product.status === 'Low Stock' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                                        }`}>
                                            {product.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"><Edit className="h-4 w-4" /></button>
                                            <button onClick={() => handleDeleteProduct(product.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"><Trash2 className="h-4 w-4" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Add Product Modal */}
            {isAddingProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-300">
                        <div className="flex justify-between items-center p-6 border-b border-[#e8dfcf] bg-[#fdfaf6]">
                            <h3 className="font-serif text-xl font-bold text-[#352014]">Tambah Produk Baru</h3>
                            <button onClick={() => setIsAddingProduct(false)} className="text-muted-foreground hover:text-[#352014] transition-colors">
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <form onSubmit={handleAddProduct} className="p-6 space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#352014]">Nama Produk</label>
                                <input required type="text" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} className="w-full rounded-xl border border-[#e8dfcf] bg-[#fdfaf6] px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Masukkan nama produk..." />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#352014]">Kategori</label>
                                    <select value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})} className="w-full rounded-xl border border-[#e8dfcf] bg-[#fdfaf6] px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                                        <option value="Sofa">Sofa</option>
                                        <option value="Meja">Meja</option>
                                        <option value="Lemari">Lemari</option>
                                        <option value="Tempat Tidur">Tempat Tidur</option>
                                        <option value="Kursi">Kursi</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#352014]">Stok</label>
                                    <input required type="number" min="0" value={newProduct.stock} onChange={e => setNewProduct({...newProduct, stock: parseInt(e.target.value) || 0})} className="w-full rounded-xl border border-[#e8dfcf] bg-[#fdfaf6] px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#352014]">Harga (Rp)</label>
                                <input required type="number" min="0" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: parseInt(e.target.value) || 0})} className="w-full rounded-xl border border-[#e8dfcf] bg-[#fdfaf6] px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                            </div>
                            <div className="pt-4 flex justify-end gap-3">
                                <button type="button" onClick={() => setIsAddingProduct(false)} className="rounded-xl px-6 py-3 text-sm font-bold text-muted-foreground hover:bg-slate-100 transition-colors">Batal</button>
                                <button type="submit" className="rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-primary/90 transition-colors">Simpan Produk</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
          </div>
        )}

        {activeTab === "pelanggan" && (
          <div className="animate-in fade-in zoom-in-95 duration-500">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-[#352014] font-serif">Data Pelanggan</h3>
                <button onClick={handleExportCSV} className="flex items-center gap-2 rounded-xl border border-[#e8dfcf] bg-white px-4 py-2.5 text-sm font-bold text-[#352014] shadow-sm transition-all hover:bg-slate-50">
                    Ekspor CSV
                </button>
            </div>

            <div className="bg-white rounded-3xl border border-[#e8dfcf] shadow-sm overflow-hidden mb-6 flex items-center px-4 py-3">
                <Search className="h-5 w-5 text-muted-foreground mr-3" />
                <input 
                    type="text" 
                    placeholder="Cari nama, email, atau telepon..." 
                    className="w-full bg-transparent border-none outline-none text-sm text-[#352014] placeholder:text-muted-foreground focus:ring-0"
                />
            </div>
            
            <div className="bg-white rounded-3xl border border-[#e8dfcf] shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-[#6d4c3d] uppercase bg-[#fdfaf6] border-b border-[#e8dfcf]">
                            <tr>
                                <th className="px-6 py-4 font-bold">Nama</th>
                                <th className="px-6 py-4 font-bold">Kontak</th>
                                <th className="px-6 py-4 font-bold">Bergabung</th>
                                <th className="px-6 py-4 font-bold">Pesanan</th>
                                <th className="px-6 py-4 font-bold">Total Belanja</th>
                                <th className="px-6 py-4 font-bold text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockCustomers.map((customer) => (
                                <tr key={customer.id} className="border-b border-[#e8dfcf] last:border-0 hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-[#352014]">{customer.name}</td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-[#352014]">{customer.email}</div>
                                        <div className="text-xs text-muted-foreground mt-0.5">{customer.phone}</div>
                                    </td>
                                    <td className="px-6 py-4 text-muted-foreground">{customer.joined}</td>
                                    <td className="px-6 py-4 text-muted-foreground">{customer.orders}</td>
                                    <td className="px-6 py-4 font-medium text-[#352014]">Rp {customer.totalSpent.toLocaleString("id-ID")}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-sm font-bold text-primary hover:text-[#352014] transition-colors">Detail</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
          </div>
        )}

        {activeTab === "pengaturan" && (
          <div className="animate-in fade-in zoom-in-95 duration-500">
            <h3 className="text-xl font-bold text-[#352014] mb-6 font-serif">Pengaturan Sistem</h3>
            
            <div className="bg-white rounded-3xl border border-[#e8dfcf] shadow-sm p-6 sm:p-10">
                <form className="space-y-8" onSubmit={handleSaveSettings}>
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-[#6d4c3d]/60 border-b border-[#f0ebe3] pb-2">Informasi Toko</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#352014]">Nama Toko</label>
                                <input type="text" defaultValue="Nova Interior" className="w-full rounded-xl border border-[#e8dfcf] bg-[#fdfaf6] px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#352014]">Nomor WhatsApp Bantuan</label>
                                <input type="text" defaultValue="089692530975" className="w-full rounded-xl border border-[#e8dfcf] bg-[#fdfaf6] px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-bold text-[#352014]">Deskripsi Singkat</label>
                                <textarea rows={3} defaultValue="Toko furniture premium dengan desain modern minimalis." className="w-full rounded-xl border border-[#e8dfcf] bg-[#fdfaf6] px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-[#6d4c3d]/60 border-b border-[#f0ebe3] pb-2">Preferensi Notifikasi</h4>
                        
                        <div className="space-y-4">
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-primary focus:ring-primary border-[#e8dfcf]" />
                                <span className="text-sm font-medium text-[#352014]">Terima notifikasi email untuk pesanan baru</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" defaultChecked className="w-5 h-5 rounded text-primary focus:ring-primary border-[#e8dfcf]" />
                                <span className="text-sm font-medium text-[#352014]">Terima notifikasi untuk pendaftaran pelanggan baru</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer">
                                <input type="checkbox" className="w-5 h-5 rounded text-primary focus:ring-primary border-[#e8dfcf]" />
                                <span className="text-sm font-medium text-[#352014]">Laporan mingguan via email</span>
                            </label>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                        <button type="submit" disabled={saveSettingsText !== "Simpan Perubahan"} className={`rounded-xl px-8 py-3 text-sm font-bold text-white shadow-lg transition-all ${saveSettingsText === "Tersimpan!" ? "bg-green-600 border-green-600" : saveSettingsText === "Menyimpan..." ? "bg-muted-foreground" : "bg-primary hover:scale-105 active:scale-95"}`}>
                            {saveSettingsText}
                        </button>
                    </div>
                </form>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
