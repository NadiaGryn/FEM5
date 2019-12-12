// Т.к. у различных утсройств есть разные способы ввода данных (кроме клавиатурных), то для корректного отслеживания того, что введено в input 
// лучше использовать специальное событие input.

const buttons = document.querySelectorAll(`.btn`);
const btnContent = [];

buttons.forEach(btn => {
 btnContent.push(btn.innerText); 
});

document.addEventListener("keydown", function() {
    for (let i=0; i < buttons.length; i++) {
      if (btnContent[i] === event.key) {
        buttons.forEach((button) => {
          button.classList.remove("active")
        });
        buttons[i].classList.add("active");	
      };
    };
  });