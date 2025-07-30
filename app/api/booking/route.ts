
import { useMemo, useState, KeyboardEvent } from "react";

function normalizeIndoPhone(raw: string) {
  const digits = raw.replace(/[^\d]/g, "");
  return digits.startsWith("0") ? "62" + digits.slice(1) : digits;
}

export default function BookingBox({ phone = "081234567890" }: { phone?: string }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [service, setService] = useState("");

  // tanggal minimal = hari ini (untuk input date)
  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);
  const targetPhone = useMemo(() => normalizeIndoPhone(phone), [phone]);

  const message = `Halo, saya ingin booking:

Nama: ${name}
Tanggal: ${date}
Layanan: ${service}`;

  const waUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;
  const disabled = !name || !date || !service;

  const handleSend = () => {
    if (disabled) return;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const handleEnter = (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="space-y-4 max-w-md w-full mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold">Booking</h2>

      <input
        type="text"
        placeholder="Nama Lengkap"
        className="w-full border rounded p-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleEnter}
        required
      />

      <input
        type="date"
        min={minDate}
        className="w-full border rounded p-2"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        onKeyDown={handleEnter}
        required
      />

      {/* Ganti jadi select kalau mau opsi fixed */}
      <input
        type="text"
        placeholder="Layanan"
        className="w-full border rounded p-2"
        value={service}
        onChange={(e) => setService(e.target.value)}
        onKeyDown={handleEnter}
        required
      />

      <button
        type="button"
        onClick={handleSend}
        className={`w-full py-2 rounded transition ${
          disabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-green-600 text-white hover:bg-green-700"
        }`}
        aria-disabled={disabled}
      >
        Kirim via WhatsApp
      </button>
    </div>
  );
}
