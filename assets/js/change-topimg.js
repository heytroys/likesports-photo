'use-strict';


const imgs = document.querySelectorAll('.image-change .all-imgs li');

const samne_img = document.querySelectorAll('.image-change .all-samne li .samne-img');


for(let i = 0; i < samne_img.length; i++) {
  samne_img[i].addEventListener('click', function() {
    for(let j = 0; j < samne_img.length; j++) {
      samne_img[j].classList.remove('active');
    }
    for(let j = 0; j < samne_img.length; j++) {
      imgs[j].classList.remove('active');
    }

    samne_img[i].classList.add('active');
    imgs[i].classList.add('active');
  })
}

