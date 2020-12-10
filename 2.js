let barang = [
    { nama: "Beras", harga: 10000, jumlah: 5 },
    { nama: "Gula", harga: 14000, jumlah: 5 },
    { nama: "Telur", harga: 20000, jumlah: 2 },
    { nama: "Minyak Goreng", harga: 9000, jumlah: 10 },
]

let TotalHarga = 0
let TotalData = barang.length - 1

for(let i = 0; i <= TotalData; i++){
    let HargaPerBarang = barang[i].harga * barang[i].jumlah
    TotalHarga += HargaPerBarang
}

console.log ("===================== DAFTAR BELANJA =====================");
console.log (barang);
console.log (" ")
console.log ("TOTAL BELANJA YANG HARUS DIBAYARKAN : ");
console.log("Total = Rp. " + TotalHarga);