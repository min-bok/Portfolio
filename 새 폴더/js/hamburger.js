const wrap = document.querySelector('.lineWrap');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const scroll = document.querySelector('#scroll');
const untilGameover = document.querySelector('.untilGameover');
const pofol = document.querySelector('.pofol');
const mandarin = document.querySelector('.mandarin');
const hours = document.querySelector('.hours');
const macro = document.querySelector('.macro');

// untilGameover.classList.add('hide');
// pofol.classList.add('hide');
// mandarin.classList.add('hide');
// hours.classList.add('hide');

// function addClassHidden() {
//     contFeed.classList.toggle('hidden');
//     headFeed.classList.toggle('hidden');
//     headSearch.classList.toggle('hidden');
// }

// 서서히 돌아오도록 업로드하기

function active() {
    macro.classList.toggle('macroBg');
    mandarin.classList.toggle('macroHidden');
    one.classList.toggle('activeOne');
    two.classList.toggle('activeTwo');
    three.classList.toggle('activeThree');
    untilGameover.classList.toggle('untilGameoverClick');
    pofol.classList.toggle('pofolClick');
    mandarin.classList.toggle('mandarinClick');
    hours.classList.toggle('hoursClick');
    macro.classList.toggle('macroClick');
}

// function nonActive() {
//     one.classList.remove('activeOne');
//     two.classList.remove('activeTwo');
//     three.classList.remove('activeThree');
// }

wrap.addEventListener('click', () => {
    active();
});