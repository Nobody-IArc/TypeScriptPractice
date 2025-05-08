// 열거형
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Left"] = 1] = "Left";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Down"] = 3] = "Down";
})(Direction || (Direction = {}));
console.log(Direction);
console.log(Direction.Up);
console.log(Direction.Left);
console.log(Direction.Right);
console.log(Direction.Down);
// 열거형 조작
var Player = /** @class */ (function () {
    function Player() {
        this.x = 0;
        this.y = 0;
    }
    Player.prototype.move = function (direction) {
        if (direction === Direction.Up)
            this.y += 1;
        else if (direction === Direction.Down)
            this.y -= 1;
        else if (direction === Direction.Left)
            this.x -= 1;
        else if (direction === Direction.Right)
            this.x += 1;
        console.log("Moved to ".concat(direction)); // 숫자 값으로 나옴
        console.log("Moved to ".concat(Direction[direction])); // 열거형 이름대로 나옴 ex) Up
    };
    Player.prototype.getPosition = function () {
        return { x: this.x, y: this.y };
    };
    return Player;
}());
var player = new Player();
player.move(Direction.Up);
player.move(Direction.Down);
player.move(Direction.Left);
player.move(Direction.Right);
console.log(player.getPosition());
// 명시적 숫자 값 할당
var Time;
(function (Time) {
    Time[Time["Dawn"] = 6] = "Dawn";
    Time[Time["Morning"] = 9] = "Morning";
    Time[Time["Daytime"] = 13] = "Daytime";
    Time[Time["Evening"] = 17] = "Evening";
    Time[Time["Night"] = 22] = "Night";
    Time[Time["Early"] = 23] = "Early";
})(Time || (Time = {}));
console.log(Time);
console.log(Time.Dawn);
console.log(Time.Morning);
console.log(Time.Daytime);
console.log(Time.Evening);
console.log(Time.Night);
console.log(Time.Early);
// 명시적 문자열 값 할당
var Code;
(function (Code) {
    Code["PS"] = "Sony";
    Code["NSW"] = "Nintendo";
    Code["XBOX"] = "MicroSoft";
})(Code || (Code = {}));
console.log(Code.PS);
console.log(Code.NSW);
console.log(Code.XBOX);
