// Data buku disimpan dalam array (const = nilainya tidak diganti)
const daftarBuku = [
  { judul: "Dasar Pemrograman Web", harga: 85000, stok: 12 },
  { judul: "Algoritma dan Logika", harga: 95000, stok: 0 },
  { judul: "Basis Data untuk Pemula", harga: 120000, stok: 5 },
  { judul: "Jaringan Komputer", harga: 110000, stok: 8 }
];

// Perulangan: ambil buku satu per satu dari awal sampai akhir
for (let i = 0; i < daftarBuku.length; i++) {
  let buku = daftarBuku[i];   // buku ke-i
  let keterangan;             // tempat menyimpan status stok

  // Cek stok: kalau lebih dari 0 berarti masih ada
  if (buku.stok > 0) {
    keterangan = "(Tersedia)";
  } else {
    keterangan = "(Habis)";
  }
  // Cetak: nomor urut. judul - harga - stok (status)
  console.log((i + 1) + ". " + buku.judul + " - Rp" + buku.harga + " - Stok: " + buku.stok + " " + keterangan);
}

// Fungsi untuk menghitung total nilai semua stok buku
function hitungTotalAset(buku) {
  let total = 0;              // mulai dari 0
  for (let i = 0; i < buku.length; i++) {
    // harga x stok tiap buku, lalu ditambahkan ke total
    total = total + buku[i].harga * buku[i].stok;
  }
  return total;               // kirim hasil ke pemanggil fungsi
}
// Panggil fungsi, lalu cetak hasilnya
console.log("Total nilai aset: Rp" + hitungTotalAset(daftarBuku));
// Hitung berapa buku yang stoknya habis
let jumlahHabis = 0;          // mulai dari 0
for (let i = 0; i < daftarBuku.length; i++) {
  if (daftarBuku[i].stok === 0) {   // stok tepat 0 = habis
    jumlahHabis++;                  // tambah 1
  }
}
console.log("Jumlah buku habis: " + jumlahHabis);