//soal 1/
function CetakFuction(name) {
    return name
  }

console.log(CetakFuction('halo nama saya farhan'))   
  

//soal 2/
  function TotalNum(NUM1, NUM2) {
    return NUM1 + NUM2
  }

  console.log(TotalNum(20,7))

//soal 3/
  function Hello() {
    return "Hello"
    }
  console.log(Hello)

//soal 4/
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objDaftarPeserta = { 
  fullname : 'John Doe',
  Gender : 'LK',
  Hobby : 'READING BOOK',
  BornYear : 1992,}
console.log(objDaftarPeserta)

//SOAL 5/
var buah = [
  {nama: "Nanas", warna: "kuning", AdaBijinya: false, harga: 9.000}, 
  {nama: "Jeruk", warna: "hijau", AdaBijinya: true, harga: 8.000}, 
  {nama: "semangka", warna: "merah", AdaBijinya: true, harga: 10.000},
  {nama: "pisang", warna: "kuning", AdaBijinya: false, harga: 5.000}
  ]

var buahberbiji = buah.filter(function(item){
  return item.AdaBijinya == true
})
console.log(buahberbiji)

//soal 06/

let phone = {
  nameS: "Galaxy Note 20",
  brand: "Samsung",
  year: 2020
};

const {nameS,brand,year} = phone

console.log(NAMS, brand, year) 

//soal 7/

let dataBukuTambahan= {
  penulis: "john doe",
  tahunTerbit: 2020 
}

let buku = {
  nama: "pemograman dasar",
  jumlahHalaman: 172
}

let objOutput = {...dataBukuTambahan,...buku}
console.log(objOutput) 

//soal 8/

let mobil = {
  merk : "bmw",
  color: "red",  
  year : 2002
  }
  const functionObject = (mobil) => {
    return mobil
  }
  console.log(mobil)