let radioBtns = document.querySelectorAll("input[name=buah]");
let result = document.getElementById("buah-favorit");
let button = document.getElementById("check");

let findSelected = () => {
  let selected = document.querySelector("input[name=buah]:checked").value;
  button.addEventListener("click", (result.textContent = `saya suka buah: ${selected}`));
};

radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener("change", findSelected);
});

findSelected();
