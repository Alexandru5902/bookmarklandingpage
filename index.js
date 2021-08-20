/* The navbar */
const navbtn = document.querySelector('.nav-buton');
const navlist = document.querySelector('.nav-list');
const navitems = document.querySelectorAll('.nav-item');
const navlinks = document.querySelectorAll('.nav-link');

navbtn.addEventListener('click',function(){
  navlist.classList.toggle('active');

  navitems.forEach((item) => {
      item.classList.toggle('active');
  });

  navlinks.forEach((link) => {
      link.classList.toggle('active');
  })
});



/* The buttons */
let simplebtn = document.querySelector('.simple-btn');
let speedybtn = document.querySelector('.speedy-btn');
let easybtn = document.querySelector('.easy-btn');

/* The tabs */
let simpleitem = document.querySelector('.simple-item');
let speedyitem = document.querySelector('.speedy-item');
let easyitem = document.querySelector('.easy-item');

simplebtn.addEventListener('click',function(){
  simpleitem.classList.add('active');
  simplebtn.classList.add('active');
  speedyitem.classList.remove('active');
  speedybtn.classList.remove('active');
  easyitem.classList.remove('active');
  easybtn.classList.remove('acttive');
});

speedybtn.addEventListener('click',function(){
   simplebtn.classList.remove('active');
   simpleitem.classList.remove('active');
   speedybtn.classList.add('active');
   speedyitem.classList.add('active');
   easybtn.classList.remove('active');
   easyitem.classList.remove('active');
});

easybtn.addEventListener('click',function(){
    simplebtn.classList.remove('active');
    simpleitem.classList.remove('active');
    speedybtn.classList.remove('active');
    speedyitem.classList.remove('active');
    easybtn.classList.add('active');
    easyitem.classList.add('active');
});


/* FAQ SECTION */
const questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
    const buton = question.querySelector('.faq-btn');
       buton.addEventListener('click',function(e){
         e.preventDefault();
         question.classList.toggle('active');
         question.nextElementSibling.classList.remove('active');
         question.previousElementSibling.classList.remove('active');
       });
}) 