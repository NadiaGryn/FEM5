// Теоретический вопрос

// Опишите своими словами, как Вы понимаете, что такое обработчик событий.


// Задание
// Создать поле для ввода цены с валидацией.

// Технические требования:

// При загрузке страницы показать пользователю поле ввода (input) с надписью Price. Это поле будет служить для ввода числовых значений
// Поведение поля должно быть следующим:

// При фокусе на поле ввода - у него должна появиться рамка зеленого цвета. При потере фокуса она пропадает.
// Когда убран фокус с поля - его значение считывается, над полем создается span, в котором должен быть выведен текст: 
// Текущая цена: ${значение из поля ввода}. Рядом с ним должна быть кнопка с крестиком (X). Значение внутри поля ввода окрашивается в зеленый цвет.
// При нажатии на Х - span с текстом и кнопка X должны быть удалены. Значение, введенное в поле ввода, обнуляется.
// Если пользователь ввел число меньше 0 - при потере фокуса подсвечивать поле ввода красной рамкой, под полем выводить фразу - 
// Please enter correct price. span со значением при этом не создается.

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