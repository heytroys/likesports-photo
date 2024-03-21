'use-strict';

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('body').addEventListener('touchmove', function(e) {
      e.preventDefault();
    }, { passive: false });
  
    document.querySelector('body').addEventListener('wheel', function(e) {
      if (e.deltaX !== 0) {
        e.preventDefault();
      }
    });
  });
  

