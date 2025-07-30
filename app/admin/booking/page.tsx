"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar, Eye, MessageCircle, Phone, Mail, Building, Search, Download } from "lucide-react"

export default function AdminBookingPage() {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: "Ahmad Rizki",
      email: "ahmad.rizki@email.com",
      phone: "081234567890",
      company: "PT Tech Solutions",
      service: "Web Development",
      description:
        "Saya membutuhkan website e-commerce untuk bisnis online saya. Fitur yang dibutuhkan termasuk payment gateway, inventory management, dan dashboard admin. Budget sekitar 15-20 juta.",
      status: "new",
      priority: "high",
      submittedAt: "2024-01-15T10:30:00",
      followUpDate: null,
      notes: "",
    },
    {
      id: 2,
      name: "Sari Dewi",
      email: "sari.dewi@company.com",
      phone: "081987654321",
      company: "CV Digital Marketing",
      service: "Mobile App Development",
      description:
        "Butuh aplikasi mobile untuk manajemen inventory. Target platform Android dan iOS dengan fitur real-time sync. Timeline 3-4 bulan.",
      status: "contacted",
      priority: "medium",
      submittedAt: "2024-01-14T14:20:00",
      followUpDate: "2024-01-20",
      notes: "Sudah dihubungi via WhatsApp, akan meeting Jumat depan untuk diskusi detail requirement",
    },
    {
      id: 3,
      name: "Budi Santoso",
      email: "budi@startup.id",
      phone: "081555666777",
      company: "Startup Innovation",
      service: "UI/UX Design",
      description:
        "Redesign aplikasi mobile existing untuk meningkatkan user experience. Perlu user research dan prototyping. Budget 8-10 juta.",
      status: "quoted",
      priority: "low",
      submittedAt: "2024-01-13T09:15:00",
      followUpDate: "2024-01-25",
      notes: "Quotation sudah dikirim Rp 8.5 juta, menunggu approval dari management",
    },
    {
      id: 4,
      name: "Lisa Permata",
      email: "lisa@ecommerce.co.id",
      phone: "081444555666",
      company: "E-Commerce Nusantara",
      service: "Digital Marketing",
      description:
        "Butuh strategi digital marketing untuk meningkatkan penjualan online. Focus pada social media dan Google Ads. Budget bulanan 3-5 juta.",
      status: "new",
      priority: "medium",
      submittedAt: "2024-01-16T16:45:00",
      followUpDate: null,
      notes: "",
    },
  ])

  const [selectedBooking, setSelectedBooking] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const statusOptions = [
    { value: "all", label: "Semua Status", count: bookings.length },
    { value: "new", label: "Baru", count: bookings.filter((b) => b.status === "new").length },
    { value: "contacted", label: "Sudah Dihubungi", count: bookings.filter((b) => b.status === "contacted").length },
    { value: "quoted", label: "Sudah Dikutip", count: bookings.filter((b) => b.status === "quoted").length },
    { value: "closed", label: "Selesai", count: bookings.filter((b) => b.status === "closed").length },
  ]

  const priorityColors = {
    high: "bg-red-100 text-red-800",
    medium: "bg-yellow-100 text-yellow-800",
    low: "bg-green-100 text-green-800",
  }

  const statusColors = {
    new: "bg-blue-100 text-blue-800",
    contacted: "bg-purple-100 text-purple-800",
    quoted: "bg-orange-100 text-orange-800",
    closed: "bg-green-100 text-green-800",
  }

  const updateBookingStatus = (id, newStatus) => {
    setBookings(bookings.map((booking) => (booking.id === id ? { ...booking, status: newStatus } : booking)))
  }

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.service.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || booking.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Data Booking</h1>
          <p className="text-muted-foreground">Kelola dan follow up inquiry dari calon klien</p>
        </div>

        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statusOptions.slice(1).map((status) => (
          <Card key={status.value}>
            <CardContent className="p-4">
              <div className="text-2xl font-bold">{status.count}</div>
              <div className="text-sm text-muted-foreground">{status.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Cari berdasarkan nama, email, perusahaan, atau layanan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              {statusOptions.map((status) => (
                <Button
                  key={status.value}
                  variant={statusFilter === status.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setStatusFilter(status.value)}
                >
                  {status.label} ({status.count})
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bookings List */}
      <div className="grid gap-4">
        {filteredBookings.map((booking) => (
          <Card key={booking.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold">{booking.name}</h3>
                    <Badge className={priorityColors[booking.priority]}>{booking.priority.toUpperCase()}</Badge>
                    <Badge className={statusColors[booking.status]}>
                      {booking.status === "new"
                        ? "Baru"
                        : booking.status === "contacted"
                          ? "Dihubungi"
                          : booking.status === "quoted"
                            ? "Dikutip"
                            : "Selesai"}
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>{booking.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{booking.phone}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span>{booking.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{formatDate(booking.submittedAt)}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium mb-1">Layanan: {booking.service}</div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{booking.description}</p>
                  </div>

                  {booking.notes && (
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="text-sm font-medium mb-1">Catatan:</div>
                      <p className="text-sm text-muted-foreground">{booking.notes}</p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2 ml-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setSelectedBooking(booking)}>
                        <Eye className="h-4 w-4 mr-1" />
                        Detail
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Detail Booking - {booking.name}</DialogTitle>
                        <DialogDescription>Informasi lengkap inquiry dari calon klien</DialogDescription>
                      </DialogHeader>

                      {selectedBooking && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="text-sm font-medium">Nama Lengkap</Label>
                              <p className="text-sm">{selectedBooking.name}</p>
                            </div>
                            <div>
                              <Label className="text-sm font-medium">Email</Label>
                              <p className="text-sm">{selectedBooking.email}</p>
                            </div>
                            <div>
                              <Label className="text-sm font-medium">No. Telepon</Label>
                              <p className="text-sm">{selectedBooking.phone}</p>
                            </div>
                            <div>
                              <Label className="text-sm font-medium">Perusahaan</Label>
                              <p className="text-sm">{selectedBooking.company}</p>
                            </div>
                            <div>
                              <Label className="text-sm font-medium">Layanan</Label>
                              <p className="text-sm">{selectedBooking.service}</p>
                            </div>
                            <div>
                              <Label className="text-sm font-medium">Tanggal Submit</Label>
                              <p className="text-sm">{formatDate(selectedBooking.submittedAt)}</p>
                            </div>
                          </div>

                          <div>
                            <Label className="text-sm font-medium">Deskripsi Project</Label>
                            <p className="text-sm mt-1 p-3 bg-gray-50 rounded-lg">{selectedBooking.description}</p>
                          </div>

                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={() =>
                                window.open(`https://wa.me/${selectedBooking.phone.replace(/^0/, "62")}`, "_blank")
                              }
                            >
                              <MessageCircle className="h-4 w-4 mr-1" />
                              WhatsApp
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(`mailto:${selectedBooking.email}`, "_blank")}
                            >
                              <Mail className="h-4 w-4 mr-1" />
                              Email
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(`tel:${selectedBooking.phone}`, "_blank")}
                            >
                              <Phone className="h-4 w-4 mr-1" />
                              Telepon
                            </Button>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>

                  <div className="flex gap-1">
                    {booking.status === "new" && (
                      <Button size="sm" onClick={() => updateBookingStatus(booking.id, "contacted")}>
                        Hubungi
                      </Button>
                    )}
                    {booking.status === "contacted" && (
                      <Button size="sm" onClick={() => updateBookingStatus(booking.id, "quoted")}>
                        Buat Kutipan
                      </Button>
                    )}
                    {booking.status === "quoted" && (
                      <Button size="sm" onClick={() => updateBookingStatus(booking.id, "closed")}>
                        Tutup
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredBookings.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {searchTerm || statusFilter !== "all" ? "Tidak ada data yang cocok" : "Belum ada booking"}
            </h3>
            <p className="text-gray-500">
              {searchTerm || statusFilter !== "all"
                ? "Coba ubah filter atau kata kunci pencarian"
                : "Booking dari calon klien akan muncul di sini"}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

function Label({ children, className = "" }) {
  return <label className={`block text-sm font-medium text-gray-700 ${className}`}>{children}</label>
}
