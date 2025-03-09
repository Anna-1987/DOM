// Свойства елемента Hero
// - изображение
// - текст и TextContent

const imgEl = document.querySelector('.hero_img');
console.log(imgEl);
console.log(imgEl.alt);

const heroTitleEl = document.querySelector('.hero_title');
console.log('text::', heroTitleEl.textContent);
heroTitleEl.textContent = 'Это новый я!'

const btnEl = document.querySelector('.js-magic-btn');

btnEl.addEventListener('click', () => {
   imgEl.alt = "it's new cat";
console.log(imgEl.alt); 
})

//* Атрибуты
    // - get(имя-атрибута)
console.log('get-атрибут::', imgEl.getAttribute('alt'));
    // - set(имя-атрибута)
    // - remove(имя-атрибута)
    // - has(имя-атрибута)
console.log('has-фтрибут::', imgEl.hasAttribute('type'));
console.log('has-фтрибут::', imgEl.hasAttribute('src'));

// Data - атрибуты

const btnAction = document.querySelectorAll('.js_actions button');
console.log(btnAction);//[button, button, button]
console.log(btnAction[0].dataset);//{action: 'add'}
console.log(btnAction[0].dataset.action);//add
console.log(btnAction[2].dataset);//{action: 'edit'}

const magicBtn = document.querySelector('.magic-btn');

magicBtn.addEventListener('click', () => {
    const inputEl = document.querySelector('.js-input');
    console.log(inputEl.value);

})