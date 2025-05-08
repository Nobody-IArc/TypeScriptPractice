// 유니온 타입
var anyValue = 100;
console.log(anyValue);
anyValue = 'Hello World!';
console.log(anyValue);
// 유니온 타입 매개변수
function printId(id) {
    if (typeof id === 'number') {
        console.log(id);
    }
    else if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
}
printId(12341241);
printId('Architect');
// 유니온 타입과 배열
var values = [1, 'A', 3, 'Que'];
values.push('FXXK');
values.push(123412412);
console.log(values);
var realPerson = {
    name: 'NN',
    age: 20,
};
var fakePerson = {
    name: 'Ghetsis',
    age: '불명',
};
console.log(realPerson);
console.log(fakePerson);
