// 열거형
enum Direction {
    Up,
    Left,
    Right,
    Down,
}

console.log(Direction);
console.log(Direction.Up);
console.log(Direction.Left);
console.log(Direction.Right);
console.log(Direction.Down);

// 열거형 조작
class Player {
    x: number = 0;
    y: number = 0;

    move(direction: Direction) {
        if (direction === Direction.Up) this.y += 1;
        else if (direction === Direction.Down) this.y -= 1;
        else if (direction === Direction.Left) this.x -= 1;
        else if (direction === Direction.Right) this.x += 1;
        console.log(`Moved to ${direction}`); // 숫자 값으로 나옴
        console.log(`Moved to ${Direction[direction]}`); // 열거형 이름대로 나옴 ex) Up
    }

    getPosition() {
        return { x: this.x, y: this.y };
    }
}

const player = new Player();
player.move(Direction.Up);
player.move(Direction.Down);
player.move(Direction.Left);
player.move(Direction.Right);

console.log(player.getPosition());

// 명시적 숫자 값 할당
enum Time {
    Dawn = 6,
    Morning = 9,
    Daytime = 13,
    Evening = 17,
    Night = 22,
    Early, // 자동 23 할당
}

console.log(Time);
console.log(Time.Dawn);
console.log(Time.Morning);
console.log(Time.Daytime);
console.log(Time.Evening);
console.log(Time.Night);
console.log(Time.Early);

// 명시적 문자열 값 할당
enum Code {
    PS = 'Sony',
    NSW = 'Nintendo',
    XBOX = 'MicroSoft',
}

console.log(Code.PS);
console.log(Code.NSW);
console.log(Code.XBOX);