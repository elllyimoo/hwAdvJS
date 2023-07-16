const requestURL = 'https://swapi.dev/api/films/';

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

const dataArray = sendRequest('GET', requestURL)

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
            const root = document.querySelector('#root'),
                container = document.createElement('div'),
                h1 = document.createElement('h1'),
                p = document.createElement('p');

            h1.textContent = `Episode >>>  ${episode_id} || Title >>>  "${title}"`;
            p.textContent = `Opening crawl >>> ${opening_crawl}`;

            container.append(h1, p);
            root.append(container);

            const ul = document.createElement('ul');
            ul.textContent = `Characters of "${title}" >>> `;
            characters.forEach((el) => {
                sendRequest('GET', el, false)
                    .then((data) => {
                        // console.log(data);
                        let li = document.createElement('li')
                        li.textContent = `name: ${data.name} | birth year: ${data.birth_year} | gender: ${data.gender}`;
                        ul.append(li)
                    })
                container.appendChild(ul).after(p);
            })
        });
    }
}

document.addEventListener('DOMContentLoaded', function () {
    dataArray.then((data) => { new Films(data).render() });
    new Films(arr).render();
});
