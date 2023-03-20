console.log("Hello from extrenal javascript!");
alert("Hello from extrenal javascript!");

// JavaScript: Variable
// Variebel adalah tempat unruk menyimpan nilai atau data. kita dapat menggunakan variable untuk menyimpan segala jenis data yang didukung. untuk membuat caribel dalam JavaScript, gunakan kata kunci (var, let, atau const). pernyataan di bawah ini mendeklarasikan atau mendefinisikan beberapa veriabel dengan nama "message".

// var message1;
// let message2;
// const message3;

var message1 = "hello one";
let message2 = "hello two";
const message3 = "hello three";

// JavaScript: Typedata / Data Type
// Tipe data adalah jenis-jenis data yang bisa kita simpan di dalam variabel ada beberapa tipe data dalam pemrograman JavaScript:
// - String (teks)
// - Integer atau Number (bilangan bulat)
// - Float (bilangan pecahan)
// - Boolean (true and false)
// - Object

var name = "Abimanyu";
var age = 25;
var single = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof single);

//JavaScript: Operator
//Operator adalah simbol yang digunakan untuk melakukan operasi pada suatu nilai dan variabel. Operator dalam pemrograman terbagi dalam 6 jenis:
// - Operator aritmatika (+ - * / ^ %)
// - Operator penugasan (= += -=)
// - Operator perbandingan (< > >= <= === !==)
// - Operator logika (|| && !)
// - Operator bitwise (~ ^ >> <<)
// - Operator ternary (?:)

var a = 5;
var b = 3;
var c = a + b;
console.log(c);

var view = 12;
view += 1;
console.log(view);

var beratAku = 20;
var beratKamu = 199;
var hasil = beratAku !== beratKamu;
console.log(hasil);

// JavaScript: Conditional
// Operator percabangan, struktur ini juga disebut: control flow, dicision, struktur kondisi, struktur if, dsb.
// Percabangan akan mampu membuat program berpikir dan menentukan tindakan sesuai dengan logika/kondisi yang kita berikan.
// - percabangan "if"
// - percabangan "if/else"
// - percabangan "if/else/if"
// - percabangan "switch/case"
// - percabangan dengan "operator ternary"
// - percabangan bersarang "(nested)"

var nilai = prompt("inputkan nilai anda:");
var grade = "";

if (nilai >= 90) grade = "A";
else if (nilai >= 80) grade = "B+";
else if (nilai >= 70) grade = "B";
else if (nilai >= 60) grade = "C+";
else if (nilai >= 50) grade = "C";
else if (nilai >= 40) grade = "D";
else if (nilai >= 30) grade = "E";
else grade = "F";

document.write(`<p>Grade anda: ${grade}</p>`);

// JavaScript: Looping
// Perulangan akan membantu kita mengeksekusi kode yang berulang-ulang, berapun yang kita mau. Ada lima macam bentuk perulangan di JavaScript yang terbagi menjadi 2 tipe:
// - counted loop: perulangan For, Perulangan Foreach
// - uncounted loop: perulangan while dan perulangan do/while

// perulangan dengan for
for (let i = 5; i < 10; i++) {
  document.write("<p>Ulang ke-" + i + "</p>");
}

// perulangan dengan while
var ulangi = confirm("Apakah anda mau mengulang ?");
var counter = 0;

while (ulangi) {
  counter++;
  ulangi = confirm("Apakah anda mau mengulangi ?");
}
document.write("Perulangan sudah telah dilakukan sebanyak" + counter);
