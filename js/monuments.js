// load-header.js
// External loader to inject header.html into the page.
// Usage in HTML (from html/index.html):
// <div id="site-header"></div>
// <script src="../js/load-header.js" defer data-path="header.html" data-target="site-header"></script>

const monumentsData = [
    {
        title: "Cathedral of Seville (+ La Giralda)",
        location: "Plaza del Triunfo",
        img: "../img/monuments/Seville_Cathedral.jpg",
        url: "https://www.catedraldesevilla.es/en/"
    },
    {
        title: "Alcázar Palace",
        location: "Patio de Banderas",
        img: "../img/monuments/alcazar.jpg",
        url: "https://www.alcazarsevilla.org/en/"
    },
    {
        title: "Torre del Oro",
        location: "Paseo de Cristóbal Colón",
        img: "../img/monuments/torre-del-oro.jpg",
        url: "https://en.andalucia.org/listing/torre-del-oro-naval-museum/16418101/"
    },
    {
        title: "Plaza de España",
        location: "Parque de María Luisa",
        img: "../img/monuments/plaza-españa.jpg",
        url: "https://www.andalucia.org/listing/plaza-de-espa%C3%B1a/16337102/"
    },
    {
        title: "Sevilla University",
        location: "Calle San Fernando",
        img: "../img/monuments/universidad-sevilla.jpg",
        url: "https://www.us.es/"
    },
    {
        title: "Triana District",
        location: "Barrio de Triana",
        img: "../img/monuments/triana.jpg",
        url: "https://www.visitasevilla.es/en/areas/triana"
    },
    {
        title: "Andalusian Parliament",
        location: "Plaza del Parlamento",
        img: "../img/monuments/parlamento.jpg",
        url: "https://www.parlamentodeandalucia.es/servicio-de-publicaciones-oficiales"
    },
    {
        title: "Archivo de Indias",
        location: "Plaza del Triunfo",
        img: "../img/monuments/archivo-indias.jpg",
        url: "https://www.mecd.gob.es/cultura-mecd/areas-cultura/archivos/mc/archivos/aid/index.html"
    },
    {
        title: "Casa de Pilatos",
        location: "Plaza de Pilatos",
        img: "../img/monuments/pilatos.jpg",
        url: "https://www.casadepilatos.es/en/"
    },
    {
        title: "Metropol Parasol",
        location: "Plaza de la Encarnación",
        img: "../img/monuments/setas-sevilla.jpg",
        url: "https://setasdesevilla.com/en/"
    },
    {
        title: "Italica ruins",
        location: "Santiponce",
        img: "../img/monuments/italica.jpg",
        url: "https://www.italicasevilla.org/en/"
    },
    {
        title: "Arch of Macarena",
        location: "Calle San Luis",
        img: "../img/monuments/arco-macarena.jpg",
        url: "https://www.andalucia.org/listing/arco-de-la-macarena/24931102/"
    }
];

function createCard(item) {
    return `
        <div class="card">
            <img src="${item.img}" alt="${item.title}">
            <div class="info">
                <span>${item.location}</span>
                <h3>${item.title}</h3>
                <div class="link">
                    <button class="view-btn" data-url="${item.url}">View Details ➜</button>
                </div>
            </div>
        </div>
    `;
}

function renderCards() {
    const container = document.getElementById("travelCards");
    if (container) {
        container.innerHTML = monumentsData.map(createCard).join("");

        //Se abre el boton que contiene el link en una nueva pestaña
        container.addEventListener('click', (e) => {
            const btn = e.target.closest('.view-btn');
            if (!btn) return;
            const url = btn.dataset.url;
            if (url) window.open(url, '_blank', 'noopener');
        });
    }
}

document.addEventListener("DOMContentLoaded", renderCards);
