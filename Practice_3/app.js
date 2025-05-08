// 배열 타입
var numbers = [1, 2, 3, 4, 5];
var strings = ['uno', 'dos', 'tres'];
console.log(numbers);
console.log(strings);
// 배열 매개변수
function printName(names) {
    names.forEach(function (name) { return console.log(name); });
}
printName(['RedBull', 'Monster', 'Coke']);
// 튜플 타입 - 요소의 타입이 고정된 배열
var tuple = ['A', 1, true];
console.log(tuple[0]);
console.log(tuple[1]);
console.log(tuple[2]);
// 튜플을 사용한 함수 반환
function getTup() {
    return ['Name', 5432];
}
var tup = getTup();
console.log(tup);
console.log(tup[0]);
console.log(tup[1]);
// 튜플의 선택적 요소
var optTup = ['FFFF', 1324];
console.log(optTup);
