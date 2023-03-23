// Exception Handling
// Exception handling merupakan mekanisme yang paling diperlukan dalam menangani error yang terjadi pada saat runtime (program berjalan) atau yang lebih dikenal dengan sebutan runtime error.

// Try-Catch
// berjalan :
// - pertama, kodingan pada try {...} akan dijalankan.
// - jika tidak terdapat error, maka catch(err) akan dihiraukan: prosesnya akan mencapai ujung bagian try dan kemudian berlanjut, melewati bagian catch.
// - jika terdapat error, maka bagian try akan berhenti berjalan, dan alur prosesnya akan berlanjut pada awal bagian catch(err). variabel err (yang mana kita bisa ganti dengan nama apapun) akan mengandung error objek dengan keterangan error di dalamnya

try {
  // tulisan koding disini
} catch (err) {
  // penaganan jika error
}

let json = "{bad json}";
try {
  let user = JSON.parse(json);
} catch (err) {
  console.log("error name:", err.name);
  console.log("error message:", err.message);
}

// Form Validation
// server side validation > dilakukan oleh server, setelah menerima hasil input dari sisi client
// client side validation > dilakukan pada browser sebelum data dikirim ke server
