//Mobile Navigation
const btnNavEl = document.querySelector('.nav__mobile');
const navEl = document.querySelector('.nav');
const navBg = document.querySelector('.nav__mobile-bg');


btnNavEl.addEventListener('click', function(){
     navEl.classList.toggle('nav__open');
});

navBg.addEventListener('click', function(){
     navEl.classList.toggle('nav__open');
});



//Pop up
const popUp = document.querySelector('.header__pop-up')
const cancel = document.querySelector('.header__cancel-icon')

setTimeout(function(){popUp.classList.remove('hidden')}, 1500);


cancel.addEventListener('click', function(){
     popUp.classList.add('hidden')
     console.log('click')
})

