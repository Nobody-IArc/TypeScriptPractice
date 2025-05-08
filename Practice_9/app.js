function handleRequest(request) {
    console.log(request);
}
handleRequest('GET');
handleRequest('POST');
function rollDice() {
    return Math.floor((Math.random() * 6) + 1);
}
var rollResult = rollDice();
console.log(rollResult);
function checkIsTrue(result) {
    if (result === false) {
        console.log('FFFFFF');
    }
    else {
        console.log('TTTTTT');
    }
}
checkIsTrue(false);
checkIsTrue(true);
function getStatus(code) {
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
