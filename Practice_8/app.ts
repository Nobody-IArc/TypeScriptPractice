// 타입 별칭
type ID = string | number;

let userId: ID;
userId = '1234';
console.log(userId);
userId = 2314;
console.log(userId);

// 객체 타입 별칭
type User = {
    name: string,
    age: number,
    nickname?: string,
};

const user1: User = {
    name: 'n1',
    age: 5,
    nickname: 'P',
};

const user2: User = {
    name: 'n2',
    age: 88,
};

console.log(user1);
console.log(user2);

// 함수 타입 별칭
type Operation = (x: number, y: number) => number;

const plus: Operation = (a, b) => a + b;
const minus: Operation = (a, b) => a - b;

console.log(plus(10, 3));
console.log(minus(10, 3));

// 타입 별칭과 인터페이스
type MLocation = {
    country: string,
    city: string,
    zipcode: string,
};

interface Company {
    name: string;
    employees: number;
    location: MLocation;
}

const company: Company = {
    name: '삼성전자',
    employees: 20000,
    location: {
        country: '대한민국',
        city: '수원',
        zipcode: 'unknown',
    },
};

console.log(company);