const button = document.querySelector('.header__button');

function smoothScrollDown() {
  window.scrollTo ({
    top: document.documentElement.clientHeight,  // сдвигаем на экран вниз, пропуская Header
    left: 0,
    behavior: 'smooth'
  });
}

button.addEventListener('click', smoothScrollDown);