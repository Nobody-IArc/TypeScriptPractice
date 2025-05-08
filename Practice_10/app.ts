// 타입 가드

// typeof
function printValue(value: string | number) {
    if (typeof value === "number") {
        console.log('number: ' + value);
    } else if (typeof value === "string") {
        console.log('string: ' + value);
    }
}

printValue("Hello, World!");
printValue(3);

// instanceof
class Cat {
    meow() {
        console.log('MEEEEEOW');
    }
}

class Dog {
    bark() {
        console.log('Baaark');
    }
}

function makeSound(pet: Dog | Cat) {
    if (pet instanceof Dog) {
        pet.bark();
    } else if (pet instanceof Cat) {
        pet.meow();
    }
}

const dog = new Dog();
const cat = new Cat();

makeSound(dog);
makeSound(cat);

// in 연산자
interface Bird {
    fly(): void;
}

interface Shark {
    say(): void;
}

function signitureMove(animal: Bird | Shark) {
    if ('say' in animal) {
        animal.say();
    } else if ('fly' in animal) {
        animal.fly();
    }
}

const bird: Bird = {
    fly() {
        console.log('봄바르딜로 크로코딜로');
    },
};

const shark: Shark = {
    say() {
        console.log('트랄랄레로 트랄랄라');
    },
};

signitureMove(shark);
signitureMove(bird);

// null 사용 타입 가드
function printLength(value: string | null) {
    if (value !== null) {
        console.log('퉁 퉁 퉁 퉁 퉁 퉁 퉁 퉁 퉁 사후르');
    } else {
        console.log('퉁은 9번');
    }
}

printLength('1234');
printLength(null);