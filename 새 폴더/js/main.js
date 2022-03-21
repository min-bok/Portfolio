// Slide

const prevtBtn = document.querySelector('.prevtBtn');
const nextBtn = document.querySelector('.nextBtn');

const slideWrap = document.querySelector('.slideWrap');
const slideList = document.querySelector('.slideList');
const slideOne = document.querySelector('.slideOne');
const slideTwo = document.querySelector('.slideTwo');
const slideThree = document.querySelector('.slideThree');
const slideFour = document.querySelector('.slideFour');

nextBtn.addEventListener('click', () => {
    slideOne.classList.add('next');
});