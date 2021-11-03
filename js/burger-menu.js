window.addEventListener('DOMContentLoaded', function(){
 document.querySelector('.section-header__burger').addEventListener('click', function() {
   document.querySelector('.burger-menu').classList.toggle('is-active-burger-menu');
   document.querySelector('.section-projects').classList.toggle('section-projects-is-active-burger');
  });
});
