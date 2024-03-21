'use-strict';

document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('touchmove', function(e) {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
    }
  }, { passive: false });

  document.addEventListener('wheel', function(e) {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
    }
  });
});

  

