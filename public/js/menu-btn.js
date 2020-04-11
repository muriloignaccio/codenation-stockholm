const menuBtn = document.querySelector('nav button');
const menu = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu-active');
  console.log("fired")
})

