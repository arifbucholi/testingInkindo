const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

hamburgerMenu.addEventListener('click', function() {
    navMenu.classList.toggle('active'); // Tambahkan atau hapus kelas 'active'

    if (navMenu.classList.contains('active')) {
        navMenu.style.visibility = 'visible'; // Tampilkan menu
    } else {
        // Delay sebelum menyembunyikan untuk memberi waktu pada transisi
        setTimeout(() => {
            navMenu.style.visibility = 'hidden'; // Sembunyikan menu setelah transisi
        }, 500); // Waktu delay yang sama dengan durasi transisi
    }
});

// Ambil elemen hamburger
const hamburgerBars = document.querySelectorAll(".hamburger .bar", "header");

// Fungsi untuk mengecek posisi scroll
function checkScroll() {
    if (window.scrollY > 1) {
        hamburgerBars.forEach(bar => {
            bar.classList.add("scrolled");
        });
    } else {
        hamburgerBars.forEach(bar => {
            bar.classList.remove("scrolled");
        });
    }
}

// Event listener untuk mendeteksi scroll
window.addEventListener("scroll", checkScroll);

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 1) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
