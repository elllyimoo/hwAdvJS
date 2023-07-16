async function sendQueryGetData(url) {
    const response = await fetch(url);
    return response.json();
}

async function getFilms() {
    return await sendQueryGetData('https://swapi.dev/api/films/');
}

getFilms()
    .then(({ results }) => results)
    .then(films => {
        const ul = document.createElement('ul');
        document.querySelector('#root').append(ul);

        films.forEach(({ episode_id, title, opening_crawl, characters }) => {
            const li = document.createElement('li');
            li.innerHTML = `<h3>Title: ${title} ||
                                Episode: ${episode_id} </h3>
                                <p><strong>Opening crawl:</strong> ${opening_crawl}</p>`;
            ul.appendChild(li);

            Promise
                .all(characters.map(url => sendQueryGetData(url)))
                .then((charactersList) => {
                    const UlForCharacters = document.createElement('ul');
                    UlForCharacters.innerHTML = `<strong>Characters</strong> of "${title}": `

                    charactersList.forEach(({ name, birth_year, gender }) => {
                        const LiForCharacters = document.createElement('li');
                        LiForCharacters.innerHTML = `name: ${name} || birth_year: ${birth_year} || gender: ${gender}`;
                        UlForCharacters.appendChild(LiForCharacters);
                    });

                    li.appendChild(UlForCharacters);
                });
        });
    });