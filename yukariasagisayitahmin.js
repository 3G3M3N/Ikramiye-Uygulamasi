const sayı = Math.floor(Math.random()*100)
let hak = 4
let tahmin = parseInt(prompt("Tahmininiz:"))
function sayıtahmin() {
    while (hak>0) {
         if (tahmin==sayı) {
            console.log("Doğru Yanıt")
        } else if (tahmin<sayı) {
            console.log("Daha Yukarı")
            tahmin = parseInt(prompt("Tahmininiz:"))
            
        }else if (tahmin>sayı) {
            console.log("Daha Aşağı")
            tahmin = parseInt(prompt("Tahmininiz:"))
        }
        if (hak==1){
            console.log("Kaybettiniz sayı",sayı,"idi")
        }
            hak -= 1
    }
}
sayıtahmin()
