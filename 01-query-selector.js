const magicBtn = document.querySelector('.js-magic-btn');

// magicBtn.addEventListener('click', () => {
//     console.log('покажи кнопку', magicBtn);
// });


// const navEl = document.querySelector('ul');
// console.log(navEl);


magicBtn.addEventListener('click', () => {
   const navEl = document.querySelector('.site_nav');
console.log(navEl.classList);
    navEl.classList.add('super-cool');//добавит класс
    // navEl.classList.remove('super-cool');// удалит класс
    navEl.classList.replace('super-cool','new-super-cool');// заменит старый класс на новый
});

const navEl = document.querySelector('.site_nav');
console.log(navEl.classList);
navEl.classList.add('super-cool');
console.log(navEl.classList.contains('qwqwqw'))//проверяет есть ли такой класс на элементе

// magicBtn.addEventListener('click', () => {
//     navEl.classList.toggle('new-class');
// })

const currentPageUrl = '/portfolio';
const linkEl = document.querySelector(`.site-nav_link[href="${currentPageUrl}"]`);

console.log(linkEl);
linkEl.classList.add('site-nav_color');
