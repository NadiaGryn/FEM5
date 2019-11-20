// Если один и тот же код нужно использовать несколько раз в разных местах или совершать какие-то повторяющиеся действия, применяются циклы.

let userNumber = +prompt('Enter your number');

while (!Number.isInteger(userNumber) || !userNumber) {
    userNumber = +prompt('Enter your number');    
}

for (let i=0; i <= userNumber; i+=5) {
    if (userNumber < 5) {
        console.log (`Sorry, no numbers`);         
      }
    else {
        console.log(i);
    } 
}
 

let numberN = +prompt('Enter "N"-number (from 50)');

while (!numberN || numberN < 50) {
    numberN = +prompt('Enter "N"-number (from 50)');    
}

let numberM = +prompt('Enter "M"-number (to 49)');

while (!numberM || numberM > 49) {
    numberM = +prompt('Enter "M"-number (to 49)');    
}

nextPrime:
for (let i = numberM; i <= numberN; i++) { 
  for (let j = numberM; j < i; j++) { 
    if (i % j == 0) continue nextPrime; 
  }

  console.log(`${i} - простое число`);
}