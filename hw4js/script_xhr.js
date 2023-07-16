const filmsURL = 'https://swapi.dev/api/films/';

function sendRequest(method, url, bool) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, bool = true);

        xhr.responseType = 'json';

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }
        xhr.send();
    });
}

const dataFilmsArray = sendRequest('GET', filmsURL)
    .then((data) => {
        console.log(data.results);
        return data.results;
    })
    .catch(err => console.log(err))

class Films {
    constructor(films) {
        this.films = films;
    }
    render() {
        this.films.map(({ episode_id, title, opening_crawl, characters }) => {
            const container = document.createElement('div'),
                h2 = document.createElement('h2'),
                p = document.createElement('p');
            h2.textContent = `Episode >>>  ${episode_id} || Title >>>  "${title}"`;
            p.textContent = `Opening crawl >>> ${opening_crawl}`;

            container.append(h2, p);
            document.querySelector('#root').append(container);

            const ul = document.createElement('ul');
            ul.textContent = `Characters of "${title}" : `;
            characters.forEach((el, id) => {
                sendRequest('GET', el, false)
                    .then((data) => {
                        let li = document.createElement('li')
                        li.textContent = `id: ${id + 1} || name: ${data.name} || birth_year: ${data.birth_year} || gender: ${data.gender}`;
                        ul.append(li)
                    })
                container.appendChild(ul).after(p);
            })
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    dataFilmsArray
        .then((data) => { new Films(data).render() });
});
