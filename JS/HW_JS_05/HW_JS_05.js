// Экранирование необходимо для корректного отображения строки, содержащей спецсимволы

const createNewUser = () => {

  const newUser = {
    firstName: prompt(`What is your name?`),
    lastName: prompt(`What is your lastname?`),
    birthDay: prompt(`Enter your birthday, dd.mm.yyyy`),

    getLogin: function () {
      return this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
    },

    getAge: function () {
      return new Date().getFullYear() - new Date(this.birthDay).getFullYear();
    },

    getPassword: function () {    
      return this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + new Date(this.birthDay).getFullYear();
    },
  }

  return newUser;
}

let newUser = createNewUser();
let age = newUser.getAge();
let password = newUser.getPassword();
let login = newUser.getLogin();

console.log('user age: ', age);
console.log('user password: ', password);
console.log('user login: ', login);
console.log(newUser);

