function Hamburger(size, stuffing) {

    try {
        if (!size) {
            throw new HamburgerException(`No size given`);
        }

        if (size.type !== `size`) {
            throw new HamburgerException(`Enter correct size of hamburger, please!`);
        }

    } catch (error) {
        console.log(error.name + error.message);
    };

    this.size = size;
    this.stuffing = stuffing;
    this.topping = [];
}

Hamburger.SIZE_SMALL = {
    name: `small`,
    price: 50,
    callories: 20,
    type: `size`,
}
Hamburger.SIZE_LARGE = {
    name: `LARGE`,
    price: 100,
    callories: 40,
    type: `size`,
};

Hamburger.STUFFING_CHEESE = {
    name: `Cheese`,
    price: 10,
    callories: 20,
};

Hamburger.STUFFING_SALAD = {
    name: `Salad`,
    price: 20,
    callories: 5,
};

Hamburger.STUFFING_POTATO = {
    name: `Potato`,
    price: 15,
    callories: 10,
}

Hamburger.TOPPING_MAYO = {
    name: `Mayo`,
    price: 5,
    callories: 20,
};

Hamburger.TOPPING_SPICE = {
    name: `Spice`,
    price: 15,
    callories: 0,
};

Hamburger.prototype.addTopping = function (topping) {

    try {
        if (this.topping.includes(topping)) {
            throw new HamburgerException(`duplicate topping ${topping.name}`);
        }

        this.topping.push(topping);
    } catch (error) {
        console.log(error.name, error.message);

    };
}

Hamburger.prototype.removeTopping = function (topping) {
    this.topping.pop(topping);
}

Hamburger.prototype.getToppings = function () {
    return this.topping.map(element => element.name)
}

Hamburger.prototype.getSize = function () {
    return this.size.name;
}

Hamburger.prototype.getStuffing = function () {
    return this.stuffing.name;
}

Hamburger.prototype.calculatePrice = function () {
    let toppingPrice = 0;
    if (this.topping.length) {
        this.topping.forEach(element => toppingPrice += element.price);
    }
    return this.size.price + this.stuffing.price + toppingPrice;
}

Hamburger.prototype.calculateCalories = function () {
    let toppingCallories = 0;
    if (this.topping.length) {
        this.topping.forEach(element => toppingCallories += element.callories);
    }
    return this.size.callories + this.stuffing.callories + toppingCallories;

}

function HamburgerException(message) {
    this.name = ` HamburgerException: `;
    this.message = message;
}

let gamburger1 = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
console.log(gamburger1);

gamburger1.addTopping(Hamburger.TOPPING_MAYO);
// gamburger1.addTopping(Hamburger.TOPPING_MAYO);
gamburger1.addTopping(Hamburger.TOPPING_SPICE);
gamburger1.addTopping(Hamburger.TOPPING_SPICE);

gamburger1.removeTopping(Hamburger.TOPPING_MAYO);

console.log(gamburger1);
console.log(gamburger1.getToppings());
console.log(gamburger1.getSize());
console.log(gamburger1.getStuffing());
console.log(gamburger1.calculatePrice());
console.log(gamburger1.calculateCalories());

