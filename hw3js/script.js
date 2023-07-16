//1

const clients1 = ["Пирс", "Гилберт", "Сальваторе", "Пирс", "Соммерс", "Форбс", "Донован", "Беннет"];
const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон", "Пирс"];


let debug = [];
const uniqClients = [...clients1, ...clients2].filter((item, index) => {
    debug.push({ item, index, indexOf: [...clients1, ...clients2].indexOf(item) });
    return index === [...clients1, ...clients2].indexOf(item);
});
console.table(debug);
console.log('TASK 1 >>> Uniq Clients array : ', uniqClients);


//2
const characters = [
    {
        name: "Елена",
        lastName: "Гилберт",
        age: 17,
        gender: "woman",
        status: "human"
    },
    {
        name: "Кэролайн",
        lastName: "Форбс",
        age: 17,
        gender: "woman",
        status: "human"
    },
    {
        name: "Аларик",
        lastName: "Зальцман",
        age: 31,
        gender: "man",
        status: "human"
    },
    {
        name: "Дэймон",
        lastName: "Сальваторе",
        age: 156,
        gender: "man",
        status: "vampire"
    },
    {
        name: "Ребекка",
        lastName: "Майклсон",
        age: 1089,
        gender: "woman",
        status: "vempire"
    },
    {
        name: "Клаус",
        lastName: "Майклсон",
        age: 1093,
        gender: "man",
        status: "vampire"
    }
];

const charactersShortInfo = characters.map((item) => {
    let { name, lastName, age } = ({ ...item });
    return { name: name, lastName: lastName, age: age };
});
console.log('TASK 2 >>> ShortInfo array of objects : ', charactersShortInfo);



//3
const user1 = { name: "John", years: 30 };

let { name, years: age, isAdmin = false } = user1;    // alert( name ); // alert( age ); alert( isAdmin );
console.log('TASK 3 >>> Name :', name + '  / Age :', age + '  / isAdmin :', isAdmin);



//4
const satoshi2020 = {
    name: 'Nick',
    surname: 'Sabo',
    age: 51,
    country: 'Japan',
    birth: '1979-08-21',
    location: {
        lat: 38.869422,
        lng: 139.876632
    }
}
const satoshi2019 = {
    name: 'Dorian',
    surname: 'Nakamoto',
    age: 44,
    hidden: true,
    country: 'USA',
    wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    browser: 'Chrome'
}
const satoshi2018 = {
    name: 'Satoshi',
    surname: 'Nakamoto',
    technology: 'Bitcoin',
    country: 'Japan',
    browser: 'Tor',
    birth: '1975-04-05'
}

const satoshiFullProfile = ({ ...satoshi2018, ...satoshi2019, ...satoshi2020 });
console.log('TASK 4 >>> Satoshi Full Profile :', satoshiFullProfile);



// 5
const books = [{
    name: 'Harry Potter',
    author: 'J.K. Rowling'
}, {
    name: 'Lord of the rings',
    author: 'J.R.R. Tolkien'
}, {
    name: 'The witcher',
    author: 'Andrzej Sapkowski'
}];

const bookToAdd = {
    name: 'Game of thrones',
    author: 'George R. R. Martin'
}


const newBooksarray = [...books, ({ ...bookToAdd })];
console.log('TASK 5 >>> new Books array : ', newBooksarray);



// 6
const employee = {
    name: 'Vitalii',
    surname: 'Klichko'
}

const addedSomeKeysEmployee = ({ ...employee, age: 35, salary: 12000 });
console.log('TASK 6 >>> new object Employee :', addedSomeKeysEmployee);




// 7
const array = ['value', () => 'showValue'];
const [value, showValue] = array;
console.log('TASK 7 >>> value :', value + '  / showValue() :', showValue());












