let tinggi = 1.7 //meter
let berat = 90 //kg

var BMI = (berat / (tinggi ** 2));

console.log ("Tinggi badan Rhodey   = 170 cm");
console.log ("Berat badan Rhodey    = 90 kg");
console.log (" ");
console.log ("STATUS BERAT BADAN RHODEY : ");

if (BMI < 18.5){
    console.log("kekurangan berat badan");
}
else if (BMI <= 24.9){
    console.log("normal (ideal)");
}
else if (BMI <= 29.9){
    console.log("kelebihan berat badan");
}
else {
    console.log("kegemukan (obesitas)");
}
