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
import { Plus, Edit, Trash2, Settings } from "lucide-react"

export default function AdminLayananPage() {
  const [services, setServices] = useState([
    {
      id: "web-dev",
      title: "Web Development",
      description: "Pembuatan website profesional dan aplikasi web yang responsif dan SEO-friendly.",
      price: "5000000",
      duration: "2-4 minggu",
      features: [
        "Website Company Profile",
        "E-Commerce Platform",
        "Web Application",
        "CMS Integration",
        "SEO Optimization",
        "Responsive Design",
      ],
      status: "active",
      popular: false,
    },
    {
      id: "mobile-app",
      title: "Mobile App Development",
      description: "Pengembangan aplikasi mobile native dan cross-platform untuk iOS dan Android.",
      price: "25000000",
      duration: "6-12 minggu",
      features: [
        "Native iOS & Android",
        "Cross-Platform (React Native)",
        "UI/UX Design",
        "App Store Deployment",
        "Push Notifications",
        "Offline Support",
      ],
      status: "active",
      popular: true,
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      description: "Strategi pemasaran digital komprehensif untuk meningkatkan brand awareness dan penjualan.",
      price: "3000000",
      duration: "Ongoing",
      features: [
        "Social Media Management",
        "Google Ads Campaign",
        "SEO & Content Marketing",
        "Email Marketing",
        "Analytics & Reporting",
        "Brand Strategy",
      ],
      status: "active",
      popular: false,
    },
    {
      id: "uiux",
      title: "UI/UX Design",
      description: "Desain antarmuka yang menarik dan pengalaman pengguna yang optimal untuk produk digital.",
      price: "8000000",
      duration: "3-6 minggu",
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Visual Design",
        "Usability Testing",
        "Design System",
        "Brand Identity",
      ],
      status: "active",
      popular: false,
    },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingService, setEditingService] = useState(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    duration: "",
    features: "",
    status: "active",
    popular: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const serviceData = {
      ...formData,
      features: formData.features.split(",").map((f) => f.trim()),
      id: editingService ? editingService.id : Date.now(),
    }

    if (editingService) {
      setServices(services.map((s) => (s.id === editingService.id ? serviceData : s)))
    } else {
      setServices([...services, serviceData])
    }

    setFormData({
      title: "",
      description: "",
      price: "",
      duration: "",
      features: "",
      status: "active",
      popular: false,
    })
    setEditingService(null)
    setIsDialogOpen(false)
  }

  const handleEdit = (service) => {
    setEditingService(service)
    setFormData({
      ...service,
      features: service.features.join(", "),
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id) => {
    if (confirm("Apakah Anda yakin ingin menghapus layanan ini?")) {
      setServices(services.filter((s) => s.id !== id))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Manajemen Layanan</h1>
          <p className="text-muted-foreground">Kelola layanan yang ditawarkan kepada klien</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"
              onClick={() => {
                setEditingService(null)
                setFormData({
                  title: "",
                  description: "",
                  price: "",
                  duration: "",
                  features: "",
                  status: "active",
                  popular: false,
                })
              }}
            >
              <Plus className="h-4 w-4 mr-2" />
              Tambah Layanan
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingService ? "Edit Layanan" : "Tambah Layanan Baru"}</DialogTitle>
              <DialogDescription>
                {editingService ? "Ubah informasi layanan" : "Masukkan informasi layanan baru"}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Nama Layanan</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
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
                  <Label htmlFor="duration">Durasi</Label>
                  <Input
                    id="duration"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    placeholder="1-2 hari"
                    required
                  />
                </div>
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

              <div className="grid grid-cols-2 gap-4">
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
                <div className="flex items-center space-x-2 pt-6">
                  <input
                    type="checkbox"
                    id="popular"
                    checked={formData.popular}
                    onChange={(e) => setFormData({ ...formData, popular: e.target.checked })}
                    className="rounded"
                  />
                  <Label htmlFor="popular">Layanan Popular</Label>
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Batal
                </Button>
                <Button type="submit">{editingService ? "Update" : "Simpan"}</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card key={service.id} className={`${service.popular ? "ring-2 ring-blue-500" : ""}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Badge variant={service.status === "active" ? "default" : "secondary"}>
                    {service.status === "active" ? "Aktif" : "Tidak Aktif"}
                  </Badge>
                  {service.popular && <Badge className="bg-blue-500">Popular</Badge>}
                </div>
                <Settings className="h-5 w-5 text-gray-400" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Harga:</span>
                    <div className="font-bold text-blue-600">
                      Rp {Number.parseInt(service.price).toLocaleString("id-ID")}
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Durasi:</span>
                    <div className="font-medium">{service.duration}</div>
                  </div>
                </div>

                <div>
                  <span className="text-sm text-muted-foreground mb-2 block">Fitur:</span>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {service.features.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{service.features.length - 4} lainnya
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex justify-between pt-2">
                  <Button variant="outline" size="sm" onClick={() => handleEdit(service)}>
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(service.id)}>
                    <Trash2 className="h-4 w-4 mr-1" />
                    Hapus
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {services.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Belum ada layanan</h3>
            <p className="text-gray-500 mb-4">Mulai dengan menambahkan layanan pertama Anda</p>
            <Button onClick={() => setIsDialogOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Tambah Layanan
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
