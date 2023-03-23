// varibel tombol "Hitung BMI" dan "Reset"
let button = document.getElementById("hitung");
let btnReset = document.getElementById("reset");

function hitungBMI() {
  // varibel yang di gunakan untuk menghitung
  let berat = document.getElementById("berat").value;
  let tinggi = document.getElementById("tinggi").value;

  // rumus perhitungan BMI
  let t = Math.pow(tinggi / 100, 2); /* memberi varial bantuan yaitu t, untuk menampung nilai tinggi badan yang dibuat ke meter dahulu, lalu di pangkatkan 2 */
  let h = berat / t; /* memberi varibel bantuan yaitu h, untuk menampung nilai berat badan yang di bagi dengan variabel t , sebenarnya hasilnya sudah merupakan hasil perhitungan BMI tetapi di belakang koma masih banyak digit angka*/
  let a = h.toFixed(1); /* memberi varibel bantuan yaitu a, hasil final perhitungan BMI dengan angka 1 digit dibelakang koma */

  // varibel yang di gunakan untuk output
  let s = document.getElementById("status");
  let bmi = document.getElementById("hasil");
  let k1 = document.getElementById("keterangan-1");
  const p1 = document.getElementById("penjelasan1");
  const p2 = document.getElementById("penjelasan2");
  const p3 = document.getElementById("penjelasan3");
  const p4 = document.getElementById("penjelasan4");
  const s1 = document.getElementById("penyakit1");
  const s2 = document.getElementById("penyakit2");

  // perbandingan if else untuk menampilkan hasil dan beberapa penjelasan mengenai hasil yang di dapet dari perhitungan BMI
  if (a <= 18.5) {
    s.innerHTML = "Kekurangan berat badan"; /* menambahkan text html di variabel s */
    k1.innerHTML = "Anda kekurangan berat badan"; /* menambahkan text html variabel k1*/
    bmi.innerHTML = a; /* menambahkan nilai a hasil perhitungan yang di atas di variabel bmi */
    p1.classList.remove("disable"); /* menghapus class disable yang berada di p1 */
    s1.classList.remove("disable"); /* menghapus class disable yang berada di s1 */
  } else if (a > 18.5 && a <= 24.9) {
    s.innerHTML = "Normal";
    k1.innerHTML = "Anda memiliki berat badan ideal<br>Good job!!";
    bmi.innerHTML = a;
    p2.classList.remove("disable");
  } else if (a >= 25 && a <= 29.9) {
    s.innerHTML = "Kelebihan berat badan";
    k1.innerHTML = "Anda memiliki berat badan berlebih";
    bmi.innerHTML = a;
    p3.classList.remove("disable");
    s2.classList.remove("disable");
  } else if (a >= 30) {
    s.innerHTML = "Obesitas";
    k1.innerHTML = "Anda berada dalam kategori obesitas";
    bmi.innerHTML = a;
    p4.classList.remove("disable");
    s2.classList.remove("disable");
  }
}

// function reset untuk menghilangkan value input form yang sudah di isikan
function getReset() {
  document.getElementById("berat").value = "";
  document.getElementById("usia").value = "";
  document.getElementById("tinggi").value = "";
}

// function display untuk pengaturan tampilan hilang dan tampil dengan menambahkan class di dalam element-nya
function display() {
  document.getElementById("p-atas").classList.add("p-hilang");
  document.getElementById("p-bawah").classList.add("p-hasil");
}

// function untuk menampilkan pilihan input bertype radio
function getRadio() {
  var radio = document.getElementsByName("jenis-kelamin");
  var i;
  for (i = 0; i <= radio.length; i++) {
    if (radio[i].checked) {
      document.getElementById("radio-output").innerHTML =
        radio[i].value + "<br>Usia " + document.getElementById("usia").value + " Thn" + "<br>Berat " + document.getElementById("berat").value + " Kg" + "<br>Tinggi " + document.getElementById("tinggi").value + " Cm";
    }
  }
}

// ini membuat perintah kepada stiap variabel tombol, setelah di click dan menjalankan function yang ada
button.addEventListener("click", hitungBMI);
button.addEventListener("click", display);
button.addEventListener("click", getRadio);
btnReset.addEventListener("click", getReset);
