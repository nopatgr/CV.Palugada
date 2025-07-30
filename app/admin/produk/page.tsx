"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Edit, Trash2, Package } from "lucide-react"

export default function AdminProdukPage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "E-Commerce Platform",
      category: "Web Application",
      description: "Platform e-commerce lengkap dengan sistem pembayaran, inventory management, dan dashboard admin.",
      price: "15000000",
      image: "/placeholder.svg?height=300&width=400&text=E-Commerce+Platform",
      features: ["Payment Gateway", "Inventory Management", "Admin Dashboard", "Mobile Responsive", "SEO Optimized"],
      status: "active",
    },
    {
      id: 2,
      name: "Company Profile Website",
      category: "Website",
      description: "Website company profile profesional dengan desain modern dan SEO optimized.",
      price: "5000000",
      image: "/placeholder.svg?height=300&width=400&text=Company+Profile",
      features: ["SEO Optimized", "Mobile Responsive", "CMS Integration", "Contact Forms", "Social Media Integration"],
      status: "active",
    },
    {
      id: 3,
      name: "Mobile Banking App",
      category: "Mobile Application",
      description: "Aplikasi mobile banking dengan fitur keamanan tinggi dan user experience yang optimal.",
      price: "35000000",
      image: "/placeholder.svg?height=300&width=400&text=Mobile+Banking",
      features: ["Biometric Security", "Real-time Transaction", "Push Notifications", "Offline Mode", "Multi-platform"],
      status: "active",
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    image: "",
    features: "",
    status: "active",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const productData = {
      ...formData,
      features: formData.features.split(",").map((f) => f.trim()),
      id: editingProduct ? editingProduct.id : Date.now(),
    }

    if (editingProduct) {
      setProducts(products.map((p) => (p.id === editingProduct.id ? productData : p)))
    } else {
      setProducts([...products, productData])
    }

    setFormData({
      name: "",
      category: "",
      description: "",
      price: "",
      image: "",
      features: "",
      status: "active",
    })
    setEditingProduct(null)
    setIsDialogOpen(false)
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
    setFormData({
      ...product,
      features: product.features.join(", "),
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id) => {
    if (confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      setProducts(products.filter((p) => p.id !== id))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Manajemen Produk</h1>
          <p className="text-muted-foreground">Kelola produk dan layanan yang ditawarkan</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"
              onClick={() => {
                setEditingProduct(null)
                setFormData({
                  name: "",
                  category: "",
                  description: "",
                  price: "",
                  image: "",
                  features: "",
                  status: "active",
                })
              }}
            >
              <Plus className="h-4 w-4 mr-2" />
              Tambah Produk
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingProduct ? "Edit Produk" : "Tambah Produk Baru"}</DialogTitle>
              <DialogDescription>
                {editingProduct ? "Ubah informasi produk" : "Masukkan informasi produk baru"}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Produk</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Kategori</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Deskripsi</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Harga (Rp)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <select
                    id="status"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="active">Aktif</option>
                    <option value="inactive">Tidak Aktif</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">URL Gambar</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="features">Fitur (pisahkan dengan koma)</Label>
                <Textarea
                  id="features"
                  value={formData.features}
                  onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                  placeholder="Fitur 1, Fitur 2, Fitur 3"
                  rows={2}
                />
              </div>

              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Batal
                </Button>
                <Button type="submit">{editingProduct ? "Update" : "Simpan"}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant={product.status === "active" ? "default" : "secondary"}>
                  {product.status === "active" ? "Aktif" : "Tidak Aktif"}
                </Badge>
                <Badge variant="outline">{product.category}</Badge>
              </div>
              <CardTitle className="text-lg">{product.name}</CardTitle>
              <CardDescription className="line-clamp-2">{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-lg font-bold text-blue-600">
                  Rp {Number.parseInt(product.price).toLocaleString("id-ID")}
                </div>

                <div className="flex flex-wrap gap-1">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {product.features.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{product.features.length - 3} lainnya
                    </Badge>
                  )}
                </div>

                <div className="flex justify-between pt-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(product)}>
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(product.id)}>
                    <Trash2 className="h-4 w-4 mr-1" />
                    Hapus
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {products.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Belum ada produk</h3>
            <p className="text-gray-500 mb-4">Mulai dengan menambahkan produk pertama Anda</p>
            <Button onClick={() => setIsDialogOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Tambah Produk
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
