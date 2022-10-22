//soal 1//
let namalengkap = 'FarhanAbleDjakaIffatammaruddinRoif';
console.log(namalengkap)

//soal 2//

let word = 'JavaScript'; 
let second = 'is'; 
let third = 'awesome'; 

let anjay
console.log(word+second+third)

//soal 3//

let hello = 'hello';
let world = 'world!!';
console.log(hello.concat(world));

//soal 4/

let panjangPP = "8";
let editpp = parseInt(panjangPP)
let lebarPP = "5";
let editLP = parseInt(lebarPP)
let kelilingPP = 2 * (editpp + editLP );

console.log(kelilingPP)

//soal 5/
let sentences= 'wah javascript itu keren sekali'; 

let firstWords= sentences.substring(0, 3); 
let secondWords = sentences.substring(4,14)
let thirdWords = sentences.substring(15,18) 
let fourthWords = sentences.substring(19,24)
let fifthWords = sentences.substring (25,31)

console.log('Kata Pertama: ' + firstWords); 
console.log('Kata Kedua: ' + secondWords); 
console.log('Kata Ketiga: ' + thirdWords); 
console.log('Kata Keempat: ' + fourthWords); 
console.log('Kata Kelima: ' + fifthWords);

//soal 6/

var sentence = "I am going to be React JS Developer"; 

var exampleFirstWord = sentence[0] ; 
var exampleSecondWord = sentence[2] + sentence[3]  ; 
var thirdWord = sentence.slice (5, 10) ;
var fourthWord = sentence [11] + sentence [12] ;
var fifthWord = sentence [14] + sentence [15] ;
var sixthWord = sentence.slice (17, 22) ;
var seventhWord = sentence [23] + sentence [24] ;
var eighthWord = sentence.slice (26, 35)  ;

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + exampleSecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)

//soal 7/

let text = "I can eat bananas all day";
let hasil = text.slice(10, 17);
console.log(hasil)

//soal 8/

var nilaidoe = 50;
 if (nilaidoe >= 80){
    console.log("A")
 }if (nilaidoe >= 70 && nilaidoe <80){
    console.log("B")
}if (nilaidoe >= 60 && nilaidoe <70){
    console.log("C")
}if (nilaidoe >= 50 && nilaidoe <60){
    console.log("D")
}if (nilaidoe < 50){
    console.log("E")
}

//soal 9/

var angka = 2
var angka2 = angka = 2 ? "angka nya dua" : "bukan angka 2" 
console.log(angka2)

//soal 10/

var traffic_light = "red" ;
switch(traffic_light) {
    case "red" : {console.log('BERHENTI');break;}
    case "yellow" : {console.log('hati hati');break;}
    case "green" : {console.log(berjalan);break;}
    default : {console.log('MAAF MATI LAMPU');}}

//soal 11/

for(var angka = 0; angka < 10; angka++) {
    console.log(angka)
  }

//soal 12/

for (let index = 0; index < 10; index++) {
    if (index %2 == 1) {
    console.log(index)
    }
}

//soal 13/
for (let index2 = 0; index2 < 10; index2++) {
    if (index2 %2 == 0) {
    console.log(index2)
    }
}

//soal 14/

let array1 = [1,2,3,4,5,6]
console.log(array1[5])

//soal 15/

let array2 = [5,2,4,1,3,5]
array2.sort()
console.log(array2)

//soal 16/

let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]

for (let i = 0; i < array3.length; i++) {
    console.log (array3[i]);}

//soal 17/

let array4 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]

for (let array4 = 0; array4 < 11; array4++) {
    if (array4 %2 == 0) {
        console.log(array4)}}

//soal 18/

let kalimat= ["saya", "sangat", "senang", "belajar", "javascript"]
var anjir = kalimat.join("-")
console.log(anjir)

//soal 19/

var sayuran = []
sayuran.push('kangkung','bayam','buncis','kubis','timun','sledri','tauge')
console.log(sayuran)