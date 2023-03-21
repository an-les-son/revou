let button = document.getElementById("hitung");
let btnReset = document.getElementById("reset");

function hitungBMI() {
  // varibel yang di gunakan untuk menghitung
  let berat = document.getElementById("berat").value;
  let tinggi = document.getElementById("tinggi").value;

  let t = Math.pow(tinggi / 100, 2);
  let h1 = berat / t;
  let a = h1.toFixed(1);

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

  if (a <= 18.5) {
    s.innerHTML = "Kekurangan berat badan";
    k1.innerHTML = "Anda kekurangan berat badan";
    bmi.innerHTML = a;
    p1.classList.remove("disable");
    s1.classList.remove("disable");
  } else if (a > 18.5 && a <= 24.9) {
    s.innerHTML = "Normal";
    k1.innerHTML = "Anda memiliki berat badan ideal.<br>Good job!!";
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

function getReset() {
  document.getElementById("berat").value = "";
  document.getElementById("usia").value = "";
  document.getElementById("tinggi").value = "";
}

function display() {
  document.getElementById("p-atas").classList.add("p-hilang");
  document.getElementById("p-bawah").classList.add("p-hasil");
}

button.addEventListener("click", hitungBMI);
button.addEventListener("click", display);
btnReset.addEventListener("click", getReset);
