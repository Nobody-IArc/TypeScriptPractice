// 유니온 타입
let anyValue: number | string = 100;
console.log(anyValue);
anyValue = 'Hello World!';
console.log(anyValue);

// 유니온 타입 매개변수
function printId(id: string | number) {
    if (typeof id === 'number') {
        console.log(id);
    } else if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
}

printId(12341241);
printId('Architect');

// 유니온 타입과 배열
let values: (number | string)[] = [1, 'A', 3, 'Que'];

values.push('FXXK');
values.push(123412412);

console.log(values);

// 객체 속성 유니온 타입
interface Person {
    name: string;
    age: number | string;
}

const realPerson: Person = {
    name: 'NN',
    age: 20,
};

const fakePerson: Person = {
    name: 'Ghetsis',
    age: '불명',
};

console.log(realPerson);
console.log(fakePerson);