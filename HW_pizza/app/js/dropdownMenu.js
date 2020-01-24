
const btnMenu = document.querySelector(`.navbar__menu-ico`);

btnMenu.addEventListener(`click`, function(){

    const icons = document.querySelectorAll('.navbar__menu-ico i');

    icons.forEach(icon => {
        icon.classList.toggle(`hidden`);
    });

    const drpdnMenu = document.querySelector(`.navbar__dropdwn-menu`);
    drpdnMenu.classList.toggle(`hidden`);


    
})
