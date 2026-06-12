// Musik akan diputar setelah halaman diklik (mengikuti aturan browser)
document.addEventListener('click', function() {
    const lagu = document.getElementById('lagu');
    lagu.play().catch(error => {
        console.log("Gagal putar otomatis, silakan klik tombol play:", error);
    });
}, { once: true }); // Hanya berjalan 1 kali saja