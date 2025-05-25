document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navList = document.getElementById('navList');

  mobileMenuBtn.addEventListener('click', () => {
    navList.classList.toggle('show'); // ✅ match CSS
  });

  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('show');
    });
  });
});