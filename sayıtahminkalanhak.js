let sayı = (Math.random()*100)
sayı = Math.floor(sayı)
console.log(sayı)

let tahmin = parseInt(prompt("0-100 Arası Sayı Tahmin Edin"))
let hak = 4
while (hak>=0) {
    if (tahmin==sayı) {
        console.log("Tebrikler Doğru")
        break
    } else {
        tahmin = parseInt(prompt("Kalan Hakkınız: "+hak))
    }
    hak -= 1 
}
if (hak=0) {
    console.log("Maalesef Kaybettiniz, Sayı",sayı,"idi.")
}
