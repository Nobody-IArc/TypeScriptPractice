// 리터럴 타입 - 값 제한
type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

function handleRequest(request: RequestMethod) {
    console.log(request);
}

handleRequest('GET');
handleRequest('POST');
// handleRequest('PEST'); // 컴파일 오류

type Dice = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice(): Dice {
    return Math.floor((Math.random() * 6) + 1) as Dice;
}

const rollResult = rollDice();
console.log(rollResult);

type IsTrue = true | false;

function checkIsTrue(result: IsTrue) {
    if (result === false) {
        console.log('FFFFFF');
    } else {
        console.log('TTTTTT');
    }
}
checkIsTrue(false);
checkIsTrue(true);

// 리터럴 타입을 이용한 함수 오버로딩
function getStatus(code: 200): "Success";   // 오버로딩 시그니처
function getStatus(code: 404): "Not Found"; // 오버로딩 시그니처
function getStatus(code: 500): "Internal Server Error"; // 오버로딩 시그니처
function getStatus(code: number): string {
    switch (code) {
        case 200:
            return 'Success';
        case 404:
            return 'Not Found';
        case 500:
            return 'Internal Server Error';
    }
}

console.log(getStatus(200));
console.log(getStatus(404));
console.log(getStatus(500));