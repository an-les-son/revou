// DOM
// DOM adalah singkatan dari Document Object Model. interface yang memungkinkan developer memanipulasi halaman web dari segi struktur, tampilan, dan kontennya sehingga website lebih dinamis. DOM melakukannya dengan cara mengambil, mengubah, menambah, maupun menghapus elemen HTML.

//Untuk mengambil elemen HTML, DOM Java Script menggunakan beberapa metode:
// document.getElementById() > digunakan untuk mengambil elemen dengan ID
// document.getElementsByCalssName() > digunakan untuk mengambil elemen lebih dari 1 dengan ClassName
// document.getElementsByTagName() > digunakan untuk mengambil elemen lebih dari 1 dengan TagName
// document.querySelector() > digunakan untuk mengambil elemen dengan Selector
// document.querySelectorAll() > digunakan untuk mengambil elemen lebih dari dengan Selector

var header = document.querySelector("h1");
header.innerHTML = "Header telah dirubah";
console.log(header);

var rubah = document.getElementsByClassName("rubah");
console.log(rubah);
rubah[2].innerHTML = "Tiga Tigo";
