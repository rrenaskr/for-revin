const title = document.querySelector('.title');
const text = 'For You, My Love'.split('');

// Hapus isi elemen title sebelum menambahkan teks baru
title.textContent = '';

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += <span style="--delay: ${Math.random() * 3}s">${text[index]}</span>;
  } else {
    title.innerHTML += <span style='margin-right: 20px;'></span>;
  }
}

// Ambil semua elemen span di dalam title dan tambahkan animasi
const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  element.style.animationDelay = element.style.getPropertyValue('--delay');
});