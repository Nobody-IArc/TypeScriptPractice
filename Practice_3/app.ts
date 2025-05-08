// 배열 타입
let numbers = [1, 2, 3, 4, 5];
let strings = ['uno', 'dos', 'tres'];

console.log(numbers);
console.log(strings);

// 배열 매개변수
function printName(names: string[]): void {
    names.forEach(name => console.log(name));
}

printName(['RedBull', 'Monster', 'Coke']);

// 튜플 타입 - 요소의 타입이 고정된 배열
let tuple: [string, number, boolean] = ['A', 1, true];

console.log(tuple[0]);
console.log(tuple[1]);
console.log(tuple[2]);

// 튜플을 사용한 함수 반환
function getTup(): [string, number] {
    return ['Name', 5432];
}

let tup = getTup();
console.log(tup);
console.log(tup[0]);
console.log(tup[1]);

// 튜플의 선택적 요소
let optTup: [string, number?] = ['FFFF', 1324];
console.log(optTup);