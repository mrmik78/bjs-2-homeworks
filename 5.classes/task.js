//Задача 1. Печатное издание
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
    }
    set state(state) {
        (state < 0) ? this.newState = 0 : (state > 100) ? this.newState = 100 : this.newState = state;
    }
    get state() {
        return this.newState;
    }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}
//Задача 2. Библиотека
class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }
    giveBookByName(bookName) {
        const findResult = this.books.find((item) => item.name === bookName);
        this.books = this.books.filter((item) => item.name !== bookName);
        return findResult || null;
       }
}
//Задача 3
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = {};
    }
    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        }
        this.marks[subject] ? this.marks[subject].push(mark) : this.marks[subject] = [mark];
    }
    getAverageBySubject(subject) {
        if (subject in this.marks) {
            return this.marks[subject].reduce((acc, item) => acc += item / this.marks[subject].length, 0);
        }
        return 0;
    }
    getAverage() {
        let subjects = Object.keys(this.marks);
        return Object.keys(this.marks).reduce((acc, item) => acc += this.getAverageBySubject(item) / subjects.length, 0);
    }
}
