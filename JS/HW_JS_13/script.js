// Взять любое готовое домашнее задание по HTML/CSS.
// Добавить на макете кнопку "Сменить тему".
// При нажатии на кнопку - менять цветовую гамму сайта (цвета кнопок, фона и т.д.) на ваше усмотрение. 
// При повтором нажатии - возвращать все как было изначально - как будто для страницы доступны две цветовых темы.
// Выбранная тема должна сохраняться и после перезагрузки страницы

const btn = document.querySelector(`.btn`);
const body = document.querySelector(`body`);

if (localStorage.getItem(`theme`)) {
    const themeClass = JSON.parse(localStorage.getItem(`theme`));
    // console.log(themeClass);
    body.classList.add(themeClass);
    
}

btn.addEventListener(`click`, () => {

    if (localStorage.getItem(`theme`)) {
        localStorage.removeItem(`theme`);
        body.classList.remove(`dark-theme`)    
    }
    else {
        localStorage.setItem(`theme`, JSON.stringify(`dark-theme`));
        body.classList.add(`dark-theme`);
    }
} )





