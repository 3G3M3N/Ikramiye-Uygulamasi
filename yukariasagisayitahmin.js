let sayı = Math.floor((Math.random()*100))
console.log(sayı)
let tahmin = parseInt(prompt("0-100'e Sayı Tahmin Ediniz"))
let hak = 4
while (hak>=0) {
    if (tahmin==sayı) {
        console.log("Tebrikler Doğru Yanıt.")
    } else if (tahmin>sayı) {
        tahmin = parseInt(prompt("İn innn"))
    }else if (tahmin<sayı) {
        tahmin = parseInt(prompt("Çık çıkkkk"))
    }
    hak -= 1
}
if (hak=0) {
    console.log("Maalesef Kaybettiniz, Sayı",sayı,"idi")
}
