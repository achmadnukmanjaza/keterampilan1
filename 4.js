class HitungDeretGeometri {
    constructor(a,r,n){
        this.suku_pertama = a
        this.rasio = r
        this.suku_ke = n
    }

    JumlahRasiolebihDari1 = () => {
        return (this.suku_pertama * ((this.rasio ** this.suku_ke) - 1)) / (this.rasio -1)
    }
    JumlahRasioKurangDari1 = () => {
        return (this.suku_pertama * (1 - (this.rasio ** this.suku_ke))) / (1 - this.rasio)
    }
}

let a = 4
let r = 3
let n = 10

let geometri = new HitungDeretGeometri(a,r,n)

console.log ("====== JUMLAH DERET GEOMETRI ======");
console.log ("Suku Pertama  = " + a);
console.log ("Rasio         = " + r);
console.log ("Suku ke-      = " + n);
console.log ("-----------------------------------");

if(r > 1) {
    console.log ("Jumlah 10 suku pertama = " + geometri.JumlahRasiolebihDari1());
} else {
    console.log ("Jumlah 10 suku pertama = " + geometri.JumlahRasioKurangDari1());
}