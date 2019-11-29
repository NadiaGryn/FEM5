// Методы объекта - это свойства объекта, встроенные в объект в виде функции и которые работают с переменными внутри объекта 
// и передаными ему в качестве аргументов значениями.

const createNewUser = () => {

  const newUser = {
    firstName: prompt(`What is your name?`),
    lastName: prompt(`What is your lastname?`),
    getLogin: function() {      
      return this.firstName[0].toLowerCase() + this.lastName.toLowerCase(); 
    }
  }

  console.log(newUser.getLogin());

  return newUser;
}
console.log(createNewUser());



