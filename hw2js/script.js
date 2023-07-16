const books = [
    {
        author: "Люсі Фолі",
        name: "Список запрошених",
        price: 70
    },
    {
        author: "Сюзанна Кларк",
        name: "Джонатан Стрейндж і м-р Норрелл",
    },
    {
        name: "Дизайн. Книга для недизайнерів.",
        price: 70
    },
    {
        author: "Алан Мур",
        name: "Неономікон",
        price: 70
    },
    {
        author: "Террі Пратчетт",
        name: "Рухомі картинки",
        price: 40
    },
    {
        author: "Анґус Гайленд",
        name: "Коти в мистецтві",
    }
];

function createElementUl(array) {
    const filledBooksArray = array.map((item, index) => {
        try {
            if (!item.author) {
                throw new SyntaxError(`Нема імені автора ${index}-ой книги`);
            }
            if (!item.name) {
                throw new SyntaxError(`Нема назви ${index}-ой книги`);
            }
            if (!item.price) {
                throw new SyntaxError(`Нема ціни ${index}-ой книги`);
            }
        } catch (err) {
            if (err.name === "SyntaxError") {
                console.log(`${err.stack}  |  Details: ${err.message}`);
            } else {
                throw err;
            }
        } finally {
            if (item.author && item.name && item.price) {
                return `<li>Автор: ${item.author} | Назва: "${item.name}" | Коштує: ${item.price}грн.</li>`;
            }
        }
    }).filter(Boolean);
    const strHtml = `<ul>Книги c повними данними: ${filledBooksArray.join('')}</ul>`;
    document.querySelector('#root').insertAdjacentHTML("afterbegin", strHtml);
}
createElementUl(books);
