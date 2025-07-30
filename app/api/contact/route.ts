import { type NextRequest, NextResponse } from "next/server"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "@/lib/firebase"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Save to Firebase
    const docRef = await addDoc(collection(db, "contacts"), {
      name,
      email,
      phone,
      subject,
      message,
      status: "new",
      createdAt: serverTimestamp(),
    })

    // Create WhatsApp message
    const whatsappMessage = `*Pesan Baru dari Website Palugada Digital*

*Detail Kontak:*
- Nama: ${name}
- Email: ${email}
- Phone: ${phone}
- Subjek: ${subject}

*Pesan:*
${message}

*ID: ${docRef.id}*
*Waktu: ${new Date().toLocaleString("id-ID")}*`

    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`

    return NextResponse.json({
      success: true,
      whatsappUrl,
      id: docRef.id,
    })
  } catch (error) {
    console.error("Error saving contact:", error)
    return NextResponse.json({ success: false, error: "Failed to save contact" }, { status: 500 })
  }
}
