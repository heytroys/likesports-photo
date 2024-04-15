'use-strict';


const moving = function() {
    const target = document.getElementsByClassName('header-wrapper');

    const position = Math.floor(window.innerHeight * 1.50);

    for(let i = 0; i < target.length; i++) {
        offsetTop = Math.floor(target[i].getBoundingClientRect().top);

        if(offsetTop < position) {
            target[i].classList.add('active-header', 'fade');
        }
    }
}

window.addEventListener('scroll', moving, false);

