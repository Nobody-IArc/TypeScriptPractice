// 인터페이스 사용
interface Movie {
    title: string;
    year: number;
    genre: string;
    maker?: string;
    readonly directorCompany: string;
}

const AvengersMovie: Movie = {
    title: 'avengers',
    year: 2012,
    genre: 'hero',
    directorCompany: 'Marvel',
};

console.log(AvengersMovie);
console.log(AvengersMovie.title);
console.log(AvengersMovie.year);
console.log(AvengersMovie.genre);

// 인터페이스 함수 타입
interface Calculator {
    plus(a: number, b: number): number;
    minus(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number;
}

const ObjCalculator: Calculator = {
    plus(a, b) {
        return a + b;
    },
    minus(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    },
};

console.log(ObjCalculator.plus(10, 1));
console.log(ObjCalculator.minus(10, 1));
console.log(ObjCalculator.multiply(10, 3));
console.log(ObjCalculator.divide(10, 5));

// 인터페이스간의 상속
interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    company: string;
}

const employee: Employee = {
    name: 'Name',
    age: 3030,
    company: 'Oracle',
};

console.log(employee);
console.log(employee.name);
console.log(employee.age);
console.log(employee.company);

// 클래스와 인터페이스
class CompanyEmployee implements Employee {
    name: string;
    age: number;
    company: string;

    constructor(name: string, age: number, company: string) {
        this.name = name;
        this.age = age;
        this.company = company;
    }
}

const cEmployee = new CompanyEmployee('NNaammee', 124, 'JobLess');

console.log(cEmployee);
console.log(cEmployee.name);
console.log(cEmployee.age);
console.log(cEmployee.company);