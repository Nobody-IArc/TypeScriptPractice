// 객체 데이터 타입
const book: { title: string; author: string; year: number } = {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
};

console.log(book);
console.log(book.title);
console.log(book.author);
console.log(book.year);

// 중첩 객체
const author: { name: string; books: { title: string, readonly year?: number }[] } = {
    name: 'Paulo Coelho',
    books: [
        { title: 'The Alchemist', year: 1988 },
        { title: 'O Diário de um Mage'}
    ],
};

console.log(author);
console.log(author.name);
console.log(author.books);
console.log(author.books[0].title);
console.log(author.books[1].title);

// 객체의 함수 속성
const alchemist: { name: string; say(): string } = {
    name: 'Santiago',
    say() {
        return `MakTub, I am ${this.name}`;
    },
};

console.log(alchemist.say());