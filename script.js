document.getElementById('year').textContent = new Date().getFullYear();

// 等 DOM 讀取完成再綁事件
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  const name = document.querySelector('.brand h1');

  if (logo) {
    logo.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  if (name) {
    name.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
});


