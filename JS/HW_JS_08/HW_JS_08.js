// Обработчик событий - это функция, которая срабатывает в результате действий, осуществленных 
// пользователем на странице, т.е. после наступления события

const input = document.querySelector(`input`);

input.addEventListener(`focus`, function () {
    input.classList.add(`focused`);

    const span = document.querySelector(".spanText");
    if (span) {
        span.remove();
    }
    const div = document.querySelector(".div");
    if (div) {
        div.remove();
    }
});

input.addEventListener(`blur`, function () {
    input.classList.remove(`focused`);

    if (input.value <= 0 || !Number(input.value)) {
        input.style.border = "3px solid red";
        const div = document.createElement(`div`);
        div.classList.add(`div`);
        div.innerText = `Please, enter correct price!`;
        this.after(div);
        input.style.color = `red`;
        // input.value = ``;
    } else {
        const spanText = document.createElement(`span`);
        spanText.classList.add(`spanText`);
        spanText.innerHTML = `Current price is: ${input.value} $ <span class= "close">X</span>`;
        input.style.border = ``;
        
        input.before(spanText);
        input.style.color = `lightgreen`;
        spanText.addEventListener("click", function (e) {
            if (e.target.classList.contains("close")) {
                e.target.parentElement.remove();
                input.value = ``;                
            }
        });        
    }
});