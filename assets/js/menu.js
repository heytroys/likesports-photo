'use-strict';

const burger = document.querySelector('.burger');

const list = document.querySelector('.sports-list');

const list_contents = document.querySelectorAll('.sports-list li');


burger.addEventListener('click', () => {
  list.classList.toggle("sports-list-active");

  list_contents.forEach((link,index) => {
    if(link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `sports-list-contentsFade 0.5s ease forwards 0.4s`;
    }
  });
  burger.classList.toggle('toggle');
});


$('.menu').hover(
  function() {
    $(this).children('.dropdown-menu').addClass('open');
  },function() {
    $(this).children('.dropdown-menu').removeClass('open');
  }
);



