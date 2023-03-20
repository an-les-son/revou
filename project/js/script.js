// let button = document.getElementById("hitung");

// button.addEventListener("click", (event) => {
//   const jenisKelamin = document.querySelectorAll("input[name='jenis-kelamin']:checked").value;
//   const berat = document.getElementById("berat").value;
//   const usia = document.getElementById("usia").value;
//   const tinggi = document.getElementById("tinggi").value;

//   console.log(jenisKelamin);
//   console.log(berat);
//   console.log(usia);
//   console.log(tinggi);
// });

let findSelected = () => {
  let selected = document.querySelector("input[name='jenis-kelamin']:checked").value;
  console.log(selected);
};
