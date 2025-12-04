    const transportData = [
        {
            title: "Bus network",
            desc: "Day and night bus service, with a single ticket costing 1.4€",
            img: "../img/transport/bus-sevilla.jpg",
            detailText: "Sevilla's bus network covers the entire city with extensive routes operating from 6:00 AM to 11:00 PM (starting later on holidays) with varying frequencies of between 15 and 20 minutes depending on the line and time of day. In addition to single tickets, multi-trip or tourist tickets are available for purchase",
            detailImg: "../img/transport/map-bus-sevilla.png",
            officialUrl: "https://www.tussam.es/"
        },
        {
            title: "Tram lines",
            desc: "The tram has a single line (Metrocentro (T1)) that you can use with a 1.4€ ticket",
            img: "../img/transport/tram-sevilla.png",
            detailText: "It travels through the city's historic center, connecting Plaza Nueva with San Bernardo. The route is 2 kilometers long and takes approximately 19 minutes round trip. For the tickets, you can find the same options as for the bus.",
            detailImg: "../img/transport/seville-tram-map.jpg",
            officialUrl: "https://www.tussam.es/es/paginas/linea-t1"
        },
        {
            title: "Metro connection",
            desc: "A single line divided into 3 sections. The price is 1.35€/ticket",
            img: "../img/transport/metro-sevilla.png",
            detailText: "TIt connects the city with municipalities such as Mairena del Aljarafe and Dos Hermanas via 21 stations. The price of the Seville metro varies depending on the number of stops on the route and whether you use a single ticket or a transport card.",
            detailImg: "../img/transport/map-metro-sevilla.png",
            officialUrl: "https://www.consorcio-transporte-sevilla.es/"
        },
        {
            title: "Sevici",
            desc: "Public bike-rental service for €2.59 per day",
            img: "../img/transport/sevici.png",
            detailText: "Available at over 260 stations throughout the city, and can be used via the <a href='https://play.google.com/store/apps/details?id=com.jcdecaux.vls.seville&hl=es_EC'>Sevici mobile app on Google Play</a>. First 30 minutes are free!",
            detailImg: "../img/map-sevici.png",
            officialUrl: "https://www.sevici.es/"
        }
    ];

document.addEventListener('DOMContentLoaded', () => {

    const container = document.getElementById('featuresContainer');
    if (!container) return;

    function createCard(item) {
        return `
            <article class="feature-card">
                <button class="close-btn" aria-label="Cerrar">&times;</button>
                <div class="feature-img">
                    <img src="${item.img}" alt="${item.title}">
                </div>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <div class="feature-expanded-info">
                    <div class="expanded-content">
                        <p class="detail-text">${item.detailText}</p>
                        <img src="${item.detailImg}" alt="${item.title} detail" class="detail-img">
                        <a href="${item.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn-official">
                            Visit Official Website →
                        </a>
                    </div>
                </div>
            </article>
        `;
    }

    container.innerHTML = transportData.map(createCard).join('');

    // Event delegation: expandir/contraer cards
    container.addEventListener('click', (e) => {
        const card = e.target.closest('.feature-card');
        const closeBtn = e.target.closest('.close-btn');

        if (!card) return;

        // Si clickea en el botón cerrar, contraer
        if (closeBtn) {
            e.stopPropagation();
            card.classList.remove('expanded');
            return;
        }

        // Cerrar otras cards expandidas
        document.querySelectorAll('.feature-card.expanded').forEach(c => {
            if (c !== card) c.classList.remove('expanded');
        });

        // Toggle expandida en la actual
        card.classList.toggle('expanded');
    });

    // Cerrar al presionar ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.feature-card.expanded').forEach(c => {
                c.classList.remove('expanded');
            });
        }
    });
});