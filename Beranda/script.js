const galleryItems = document.querySelectorAll('.gallery-item img');
const overlay = document.querySelector('.overlay');
const overlayImg = overlay.querySelector('img');
const overlayClose = document.querySelector('.overlay-close');
const intro = document.querySelector('#intro')

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    overlay.classList.add('active');
    overlayImg.src = item.src;
  });
});

overlayClose.addEventListener('click', () => {
  overlay.classList.remove('active');
});

// Menutup galeri fullscreen ketika klik di luar gambar
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('active');
  }
});

// Smooth scroll to gallery when the button is clicked // intro button
document.getElementById('btn-lanjut').addEventListener('click', function() {
    const gallerySection = document.querySelector('.gallery');
    const introSection = document.querySelector('#intro'); // Menyimpan intro section
  
    // Set opacity intro menjadi 0
    introSection.style.transition = "opacity 1s ease"; // Tambahkan transisi untuk opacity
    introSection.style.opacity = 0;
  
    gallerySection.scrollIntoView({ behavior: 'smooth' });
  
    // Add transition effect for gallery opacity
    setTimeout(() => {
      gallerySection.style.opacity = 1;
    }, 500); // Wait for the scrolling to complete
  });
  
// Smooth scroll to gallery when the button is clicked // navbar button
document.getElementById('nav-btn').addEventListener('click', function() {
    const gallerySection = document.querySelector('#gallery');
    gallerySection.scrollIntoView({ behavior: 'smooth' });
    
    // Add transition effect for gallery opacity
    setTimeout(() => {
      gallerySection.style.opacity = 1;
    }, 200); // Wait for the scrolling to complete
  });



// Event listener untuk tombol "Intro" pada navbar
document.querySelector('a[href="#left"]').addEventListener("click", function (e) {
    e.preventDefault();  // Mencegah link default behavior (scroll otomatis)
    
    const introSection = document.querySelector('#left');
    
    // Menggunakan scrollIntoView untuk scroll ke element
    introSection.scrollIntoView({
      behavior: "smooth", 
      block: "center", // Pastikan intro section tetap di tengah layar
    });

    // Pastikan opacity gallery kembali ke 0 saat intro section terlihat
    const gallerySection = document.querySelector('.gallery');
    gallerySection.style.opacity = 0;

    // Mengatur opacity #intro menjadi 1
    const introSectionEl = document.querySelector('#intro');
    introSectionEl.style.opacity = 1; // Mengembalikan opacity ke 1
  });
  
  
// Event listener untuk tombol "Galeri" pada navbar
document.querySelector('a[href="#gallery"]').addEventListener("click", function (e) {
    e.preventDefault();  // Mencegah link default behavior (scroll otomatis)
    
    const gallerySection = document.querySelector('.gallery');
    
    // Menggunakan scrollIntoView untuk scroll ke element
    gallerySection.scrollIntoView({
      behavior: "smooth", 
      block: "center", // Pastikan gallery section tetap di tengah layar
    });

    // Menambahkan animasi dan mengubah opacity galeri menjadi 1
    gallerySection.style.transition = "opacity 1s ease";
    gallerySection.style.opacity = 1;

   // Mengatur opacity #intro menjadi 1
   const introSectionEl = document.querySelector('#intro');
   introSectionEl.style.opacity = 0; // Mengem
});


















// clone card

// Daftar gambar yang ingin ditampilkan di galeri
const images = [
    "img/Riska copy.jpeg",
    "img/Riska Os.jpg",
    "img/Riska ii1.jpg",
    "img/risss.jpeg",
    "img/riss.jpeg",
    // Tambahkan gambar lainnya sesuai kebutuhan
  ];
  
  // Menambahkan gambar-gambar ke dalam galeri secara dinamis
  const galleryContainer = document.getElementById('gallery');
  
  // Loop untuk membuat elemen gallery-item
  images.forEach((src, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
  
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Art ${index + 1}`;
  
    galleryItem.appendChild(img);
  
    // Tambahkan galleryItem ke dalam galeri
    galleryContainer.appendChild(galleryItem);
  });
  
  // Mengaktifkan overlay untuk tampilan gambar besar
  const overlayi = document.querySelector('.overlay');
  const overlayImage = overlayi.querySelector('img');
  const closeButton = document.querySelector('.overlay-close');
  
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      overlayi.style.display = 'flex';
      overlayImage.src = img.src;
    });
  });
  
  // Menutup overlay saat tombol close ditekan
  closeButton.addEventListener('click', () => {
    overlayi.style.display = 'none';
  });
  



















  
//   username

// Menampilkan prompt untuk meminta nama pengguna
// Show the popup when the page loads
window.onload = function() {
    document.getElementById("popup").style.display = "flex";
};

function setUserName() {
    // Get the input value
    const name = document.getElementById("name").value;

    // Set the name in the span
    if (name.trim() !== "") {
        document.getElementById("user-name").textContent = name;
        document.getElementById("popup").style.display = "none"; // Hide the popup
    } else {
        alert("Please enter your name!");
    }
}
