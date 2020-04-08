let token = "7fd08d813e37";
const login = "stepproject@gmail.com";
const password = "fem-5";

const root = document.getElementById('root');

class Modal {
    constructor(classList, ...elements) {
        // this._content = content,
        // this._classList = classList,
        // this._id = id,
        // this._effect = effect || 'fade',
        this._classList = classList.join(''),
            this._elements = elements,
            this._modal = null
    }
    render(container) {
        this._modal = document.createElement('div');
        this._modal.className = 'modal-content';
        this._modal.innerHTML = `

        <span class='close'>x</span>
 `;
        this._elements.forEach(element => {

            this._modal.appendChild(element.render());
        })
        // this._modal.className = this._classList.join(' ');
        // this._modal.id = this._id;
        const openAutoForm = document.getElementById('btn');
        openAutoForm.addEventListener('click', () => {
            modal.show();
            document.body.append(this._modal);
        });

        this._modal.addEventListener('click', (event) => {
            if (event.target.classList.contains('close')) {
                this.hide();
            };
        });
    }
    show() {
        this._modal.classList.add('active');
    }
    hide() {
        this._modal.classList.remove('active');
    }
};

class Form {
    constructor(className, ...args) {
            this._className = className,
            this._args = args,
            this.form = null
    }
    render() {
        this.form = document.createElement('form');
        this._args.forEach(formElement => {
            this.form.appendChild(formElement.render());
        });
        
        return this.form;
    }
    collectingDataJSON() {
        const objJson = {};
        const inputs = this.form.querySelectorAll('input');
        inputs.forEach(input => {
            objJson[input.name] = input.value
        })
        return objJson;
    }
};

class Input {
    constructor(name, type, placeholder, ...classList) {
        this._name = name,
            this._type = type,
            this._placeholder = placeholder || '',
            this._classList = classList.join(' ')
    }
    render() {
        const inputElement = document.createElement('input');
        inputElement.name = this._name;
        inputElement.type = this._type;
        inputElement.placeholder = this._placeholder;
        inputElement.classList = this._classList;
        return inputElement;
    }
}



// class Autorization extends Modal {
//     constructor(placeholder1, placeholder2, btnSendText, ...args) {
//         super(...args),
//             this._placeholder1 = placeholder1,
//             this._placeholder2 = placeholder2,
//             this._btnSendText = btnSendText
//     };
//     render(container) {
//         super.render();
//         const form = document.createElement('form');
//         form.innerHTML = `
//             <input name='user-name' placeholder='${this._placeholder1}'></input>
//             <input name='password' placeholder='${this._placeholder2}'></input>
//             <input type='submit' value='${this._btnSendText}'>
//         `;
//         const modalContent = this._modal.querySelector('.modal-content');
//         modalContent.append(form);
//         container.append(this._modal);

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const login = this.querySelector('input[name="user-name"]').value;
//     const password = this.querySelector('input[name="password"]').value;
//     const data = {
//         login,
//         password
//     };

//     // for(let item of e.target.getElementByTagName('input')) {
//     //     if(item.type !== 'submit') {
//     //         data[item.name] = item.value
//     //     }
//     // }

//     let request = fetch('http://cards.danit.com.ua/cards', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify(data)
//     });
//     let result = await response.json();
//     localStorage.setItem('token', result.token);

//     if(result.status !== 'Error') {
//         const button = document.createElement('button');
//         button.innerHTML = 'Создать';

//     }
// })
//     }
// }
// const autorizationForm = new Autorization('Ваш логин', 'Введите пароль', 'ВХОД', 'Ваша авторизация', 'myModal', ['modal']);
// autorizationForm.render(document.body);

const inputLogin = new Input('login', 'text', 'введите ваш логин');
const inputPassword = new Input('password', 'text', 'введите ваш пароль');
const inputSubmit = new Input('submit-button', 'submit', '', 'button-submit')
const form = new Form([''], inputLogin, inputPassword, inputSubmit);
const modal = new Modal(['modal'], form);


modal.render(document.body);


// форма для слоздания карточки

const inputPatientName = new Input ('patient-name', 'text', 'Введите имя пациента')
const inputDoctortName = new Input ('doctor-name', 'text', 'Введите имя доктора');

const formCard = new Form(['card-form'],inputPatientName, inputDoctortName);
const modalCard = new Modal (['modal-create-card'], formCard);

const openCreateCard = document.getElementById('btn-create-card');
openCreateCard.addEventListener('click', function (event) {
    modalCard.show();
    document.body.append(modalCard);
    console.log(modalCard);
    console.log(formCard);
    
    
});

modalCard.render(root);





