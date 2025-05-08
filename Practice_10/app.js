// 타입 가드
// typeof
function printValue(value) {
    if (typeof value === "number") {
        console.log('number: ' + value);
    }
    else if (typeof value === "string") {
        console.log('string: ' + value);
    }
}
printValue("Hello, World!");
printValue(3);
// instanceof
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log('MEEEEEOW');
    };
    return Cat;
}());
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log('Baaark');
    };
    return Dog;
}());
function makeSound(pet) {
    if (pet instanceof Dog) {
        pet.bark();
    }
    else if (pet instanceof Cat) {
        pet.meow();
    }
}
var dog = new Dog();
var cat = new Cat();
makeSound(dog);
makeSound(cat);
function signitureMove(animal) {
    if ('say' in animal) {
        animal.say();
    }
    else if ('fly' in animal) {
        animal.fly();
    }
}
var bird = {
    fly: function () {
        console.log('봄바르딜로 크로코딜로');
    },
};
var shark = {
    say: function () {
        console.log('트랄랄레로 트랄랄라');
    },
};
signitureMove(shark);
signitureMove(bird);
// null 사용 타입 가드
function printLength(value) {
    if (value !== null) {
        console.log('퉁 퉁 퉁 퉁 퉁 퉁 퉁 퉁 퉁 사후르');
    }
    else {
        console.log('퉁은 9번');
    }
}
printLength('1234');
printLength(null);
