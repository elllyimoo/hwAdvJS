document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#btn').addEventListener('click', onBtnClick);

    class ServerRequest {
        static async getData(url) {
            const response = await fetch(url);
            return response.json();
        }
    }

    function printDataToDOM(data, ip) {
        return `<ul><h3>Геолокація по IP адресу ${ip}:</h3> ${Object.entries(data)
            .map(([key, value]) => `<li>${key}: ${value}</li>`)
            .join('')}</ul>`;
    }

    async function onBtnClick() {
        const { ip } = await ServerRequest.getData('https://api.ipify.org/?format=json');
        console.log(ip);
        const data = await ServerRequest.getData(`http://ip-api.com/json/${ip}?fields=continent,country,region,regionName,city,zip,query&lang=ru`)
        console.log(data);

        document.querySelector("#root").insertAdjacentHTML("beforeend", printDataToDOM(data, ip));
    }
});
