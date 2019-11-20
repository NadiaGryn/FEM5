// Теоретический вопрос

//         1. Обьяснить своими словами разницу между обьявлением переменных через var, let и const.

//     Var можно переобъявить. Она живет и внутри фигурных скобок, и сохраняет свое значение после них. Использовалась до ЕS6.
//     Let можно переобъявить, но нельзя пересохранить. Другой ее не займет. После фигурных скобок не существует, возвращается занчение, которое было до 
//     скобок.
//     Const нельзя ни переобъвить, ни переназвать. Используется, если етсть учеренность, что переменная не будет меняться. В фигурных скобках ведет себя 
//     также как Let.

//         2. Почему объявлять переменную через var считается плохим тоном?

//     Ее может в любой момент занять другой и переобъявить\пересохранить.            


let userName = prompt('What is your name?');

for (let i = 1; i <= 3; i++) {
    if (userName === '' || userName === null || typeof +userName === 'number' && !Number.isNaN(+userName)) {
        userName = prompt("Enter correct name, please!");
    } 
}



let userAge = +prompt(`How old are you?`);

for (let i = 1; i <= 3; i++) {
    if (!userAge) {
        userAge = prompt("Enter correct age, please!");
    }
}



if (userAge < 18) {
    alert (`You are not allowed to visit this website`);
}      

else if (userAge >= 18 && userAge <= 22) {

 let userAnswer = confirm (`Are you sure you want to continue?`);
    if (userAnswer) {
        alert (`Welcome, ${userName}!`);
    }
    else {
        alert (`You are not allowed to visit this website`);
    }    
}

else {
    alert (`Welcome, ${userName}!`);
}



