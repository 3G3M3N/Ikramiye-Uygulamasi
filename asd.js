let sayı = (Math.random() * 90) + 10 
sayı = Math.floor(sayı)
console.log(sayı)

let tahmin = parseInt(prompt("2 basamaklı sayınızı giriniz: "))

let sayı_onlar = sayı / 10 
let sayı_birler = sayı % 10 

let tahminonlar = tahmin / 10 
let tahmin_birler = tahmin % 10 

if (tahmin == sayı){
    console.log("Tebrikler 10.000 TL kazandınız...")
}else if (tahminonlar == sayı_onlar || tahmin_birler == sayı_birler){
    console.log("Tebrikler 5000 TL kazandınız...")
}else if(tahminonlar == sayı_birler || tahmin_birler == sayı_onlar){
    console.log("Tebrikler 1000 TL kazandınız...")
}else{
    console.log("Maalesef bir şey kazanamadınız, cevap " +  `${sayı}`  + " idi...")
}
