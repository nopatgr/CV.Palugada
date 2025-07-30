"use client"

import { useState, useEffect } from "react"
import { collection, getDocs, doc, updateDoc, deleteDoc, query, orderBy } from "firebase/firestore"
import { db } from "@/lib/firebase"
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
import { Calendar, Eye, MessageCircle, Phone, Mail, Search, Download, Trash2 } from "lucide-react"

interface Contact {
  id: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  status: "new" | "replied" | "closed"
  createdAt: any
}

export default function AdminKontakPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      const q = query(collection(db, "contacts"), orderBy("createdAt", "desc"))
      const querySnapshot = await getDocs(q)
      const contactsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Contact[]
      setContacts(contactsData)
    } catch (error) {
      console.error("Error fetching contacts:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateContactStatus = async (id: string, newStatus: Contact["status"]) => {
    try {
      await updateDoc(doc(db, "contacts", id), { status: newStatus })
      setContacts(contacts.map((contact) => (contact.id === id ? { ...contact, status: newStatus } : contact)))
    } catch (error) {
      console.error("Error updating contact:", error)
    }
  }

  const deleteContact = async (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus kontak ini?")) {
      try {
        await deleteDoc(doc(db, "contacts", id))
        setContacts(contacts.filter((contact) => contact.id !== id))
      } catch (error) {
        console.error("Error deleting contact:", error)
      }
    }
  }

  const statusOptions = [
    { value: "all", label: "Semua Status", count: contacts.length },
    { value: "new", label: "Baru", count: contacts.filter((c) => c.status === "new").length },
    { value: "replied", label: "Sudah Dibalas", count: contacts.filter((c) => c.status === "replied").length },
    { value: "closed", label: "Selesai", count: contacts.filter((c) => c.status === "closed").length },
  ]

  const statusColors = {
    new: "bg-blue-100 text-blue-800",
    replied: "bg-yellow-100 text-yellow-800",
    closed: "bg-green-100 text-green-800",
  }

  const filteredContacts = contacts.filter((contact) => {
    const matchesSearch =
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.subject.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || contact.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "N/A"
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
    return date.toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-[#1E3A8A]">Loading...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#1E3A8A]">Data Kontak</h1>
          <p className="text-[#1E3A8A]/70">Kelola pesan dari form kontak website</p>
        </div>

        <Button
          variant="outline"
          className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white bg-transparent"
        >
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statusOptions.slice(1).map((status) => (
          <Card key={status.value} className="bg-white border-0 shadow-lg">
            <CardContent className="p-4">
              <div className="text-2xl font-bold text-[#3B82F6]">{status.count}</div>
              <div className="text-sm text-[#1E3A8A]/70">{status.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <Card className="bg-white border-0 shadow-lg">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-[#1E3A8A]/60" />
                <Input
                  placeholder="Cari berdasarkan nama, email, atau subjek..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-[#E5E7EB] focus:border-[#3B82F6] focus:ring-[#3B82F6]"
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
                  className={
                    statusFilter === status.value
                      ? "bg-[#3B82F6] text-white"
                      : "border-[#1E3A8A]/20 text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
                  }
                >
                  {status.label} ({status.count})
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contacts List */}
      <div className="grid gap-4">
        {filteredContacts.map((contact) => (
          <Card key={contact.id} className="hover:shadow-xl transition-shadow bg-white border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-[#1E3A8A]">{contact.name}</h3>
                    <Badge className={statusColors[contact.status]}>
                      {contact.status === "new" ? "Baru" : contact.status === "replied" ? "Dibalas" : "Selesai"}
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-[#1E3A8A]/60" />
                        <span className="text-[#1E3A8A]">{contact.email}</span>
                      </div>
                      {contact.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-[#1E3A8A]/60" />
                          <span className="text-[#1E3A8A]">{contact.phone}</span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-[#1E3A8A]/60" />
                        <span className="text-[#1E3A8A]">{formatDate(contact.createdAt)}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-medium mb-1 text-[#1E3A8A]">Subjek: {contact.subject}</div>
                    <p className="text-sm text-[#1E3A8A]/70 line-clamp-2">{contact.message}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 ml-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedContact(contact)}
                        className="border-[#1E3A8A]/20 text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Detail
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-[#1E3A8A]">Detail Kontak - {contact.name}</DialogTitle>
                        <DialogDescription className="text-[#1E3A8A]/70">
                          Informasi lengkap pesan dari website
                        </DialogDescription>
                      </DialogHeader>

                      {selectedContact && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium text-[#1E3A8A]">Nama Lengkap</label>
                              <p className="text-sm text-[#1E3A8A]/70">{selectedContact.name}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-[#1E3A8A]">Email</label>
                              <p className="text-sm text-[#1E3A8A]/70">{selectedContact.email}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-[#1E3A8A]">No. Telepon</label>
                              <p className="text-sm text-[#1E3A8A]/70">{selectedContact.phone || "Tidak ada"}</p>
                            </div>
                            <div>
                              <label className="text-sm font-medium text-[#1E3A8A]">Tanggal</label>
                              <p className="text-sm text-[#1E3A8A]/70">{formatDate(selectedContact.createdAt)}</p>
                            </div>
                          </div>

                          <div>
                            <label className="text-sm font-medium text-[#1E3A8A]">Subjek</label>
                            <p className="text-sm mt-1 p-3 bg-[#E5E7EB] rounded-lg text-[#1E3A8A]">
                              {selectedContact.subject}
                            </p>
                          </div>

                          <div>
                            <label className="text-sm font-medium text-[#1E3A8A]">Pesan</label>
                            <p className="text-sm mt-1 p-3 bg-[#E5E7EB] rounded-lg text-[#1E3A8A]">
                              {selectedContact.message}
                            </p>
                          </div>

                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={() =>
                                window.open(`https://wa.me/${selectedContact.phone?.replace(/^0/, "62")}`, "_blank")
                              }
                              className="bg-green-600 hover:bg-green-700 text-white"
                            >
                              <MessageCircle className="h-4 w-4 mr-1" />
                              WhatsApp
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => window.open(`mailto:${selectedContact.email}`, "_blank")}
                              className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
                            >
                              <Mail className="h-4 w-4 mr-1" />
                              Email
                            </Button>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>

                  <div className="flex gap-1">
                    {contact.status === "new" && (
                      <Button
                        size="sm"
                        onClick={() => updateContactStatus(contact.id, "replied")}
                        className="bg-[#3B82F6] hover:bg-[#1E3A8A] text-white"
                      >
                        Balas
                      </Button>
                    )}
                    {contact.status === "replied" && (
                      <Button
                        size="sm"
                        onClick={() => updateContactStatus(contact.id, "closed")}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        Tutup
                      </Button>
                    )}
                    <Button size="sm" variant="destructive" onClick={() => deleteContact(contact.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredContacts.length === 0 && (
        <Card className="bg-white border-0 shadow-lg">
          <CardContent className="text-center py-12">
            <Mail className="h-12 w-12 text-[#1E3A8A]/40 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[#1E3A8A] mb-2">
              {searchTerm || statusFilter !== "all" ? "Tidak ada data yang cocok" : "Belum ada kontak"}
            </h3>
            <p className="text-[#1E3A8A]/70">
              {searchTerm || statusFilter !== "all"
                ? "Coba ubah filter atau kata kunci pencarian"
                : "Pesan dari form kontak akan muncul di sini"}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
