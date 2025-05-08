var AvengersMovie = {
    title: 'avengers',
    year: 2012,
    genre: 'hero',
    directorCompany: 'Marvel',
};
console.log(AvengersMovie);
console.log(AvengersMovie.title);
console.log(AvengersMovie.year);
console.log(AvengersMovie.genre);
var ObjCalculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
};
console.log(ObjCalculator.plus(10, 1));
console.log(ObjCalculator.minus(10, 1));
console.log(ObjCalculator.multiply(10, 3));
console.log(ObjCalculator.divide(10, 5));
var employee = {
    name: 'Name',
    age: 3030,
    company: 'Oracle',
};
console.log(employee);
console.log(employee.name);
console.log(employee.age);
console.log(employee.company);
// 클래스와 인터페이스
var CompanyEmployee = /** @class */ (function () {
    function CompanyEmployee(name, age, company) {
        this.name = name;
        this.age = age;
        this.company = company;
    }
    return CompanyEmployee;
}());
var cEmployee = new CompanyEmployee('NNaammee', 124, 'JobLess');
console.log(cEmployee);
console.log(cEmployee.name);
console.log(cEmployee.age);
console.log(cEmployee.company);
