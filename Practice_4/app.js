// 객체 데이터 타입
var book = {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
};
console.log(book);
console.log(book.title);
console.log(book.author);
console.log(book.year);
// 중첩 객체
var author = {
    name: 'Paulo Coelho',
    books: [
        { title: 'The Alchemist', year: 1988 },
        { title: 'O Diário de um Mage' }
    ],
};
console.log(author);
console.log(author.name);
console.log(author.books);
console.log(author.books[0].title);
console.log(author.books[1].title);
// 객체의 함수 속성
var alchemist = {
    name: 'Santiago',
    say: function () {
        return "MakTub, I am ".concat(this.name);
    },
};
console.log(alchemist.say());
