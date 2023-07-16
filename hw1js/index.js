class Employee {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    // Гетери і сеттери для властивостей
    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        this._salary = value;
    }
}

class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this.lang = lang;
    }

    // Перезаписаний гетер для властивості salary
    get salary() {
        return super.salary * 3;
    }
}

// Створення екземплярів об'єкта Programmer
const programmer1 = new Programmer('John Doe', 25, 5000, ['JavaScript', 'C#']);
const programmer2 = new Programmer('Jane Smith', 30, 6000, ['Java']);

// Виведення об'єктів у консоль
console.log(programmer1);
console.log(programmer2);
