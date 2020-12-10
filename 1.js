let panjang = 20.5
let lebar = 30
let harga = 1500000
let ppn = 0.15

var LuasTanah = (panjang * lebar)
var TotalHarga = (LuasTanah * harga)

console.log ("Luas tanah yang dibeli Pak Arman     = " + LuasTanah + " m2");
console.log ("Harga tanah per meter                = Rp. " + harga);
console.log ("PPN pembelian                        = 15% ")
console.log ("================================================================");
console.log ("Harga tanah yang dibeli Pak Arman    = Rp. " + TotalHarga);
console.log ("Total Pajak                          = Rp. " + (TotalHarga * ppn));
console.log (" ")
console.log ("================= NOMINAL YANG HARUS DIBAYARKAN ================");
console.log ("Total Harga Tanah                    = Rp. " + (TotalHarga + (TotalHarga * ppn)));