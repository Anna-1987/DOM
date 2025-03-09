// Создание елементов
// вставка узлов



//****создаем загаловок */

const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'Это заголовок:)';

document.body.appendChild(titleEl);

//**** Coздадим картинку */

const imgEl = document.createElement('img');
imgEl.src = "https://i.pinimg.com/236x/71/1b/53/711b5384406f643d21f52e3bc1eeb391.jpg";
imgEl.alt = 'heart';
imgEl.width = 340;
console.log(imgEl);
document.body.appendChild(imgEl);

//****новый пункт меню */

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav_item');

const navLink = document.createElement('a');
navLink.classList.add('site-nav_link');
navLink.textContent = 'Личный кабинет';
navLink.href = '/portfolio';

navItemEl.appendChild(navLink);

// const ulEl = document.querySelector('.site_nav');
// ulEl.appendChild(navItemEl);

//***вставляем елемент в любом месте списка */
const ulEl = document.querySelector('.site_nav');
ulEl.insertBefore(navItemEl, ulEl.children[1]);


