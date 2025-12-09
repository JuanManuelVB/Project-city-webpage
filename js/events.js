const eventsData = [
    {
        id: 'feria',
        title: 'La Feria de Abril',
        description: 'The most iconic Sevillian event, a fair with casetas, traditional costumes, and festive programming.',
        image: '../img/events/feria.jpg',
        detailId: 'feria-info'
    },
    {
        id: 'semana',
        title: 'Semana Santa',
        description: 'Internationally known, this religious event is a significant cultural and spiritual experience in Seville.',
        image: '../img/events/semana-santa.jpg',
        detailId: 'semana-info'
    },
    {
        id: 'flamenco',
        title: 'Flamenco',
        description: 'Experience the passion and soul of Flamenco with live performances, dance shows, and cultural events.',
        image: '../img/events/flamenco.jpg',
        detailId: 'flamenco-info'
    },
    {
        id: 'deporte',
        title: 'Sport events',
        description: 'Sevilla takes football culture and their teams seriously: Sevilla FC and Real Betis.',
        image: '../img/events/deporte.jpg',
        detailId: 'deporte-info'
    }
];

function createCard(event) {
    return `
        <div class="event-panel" data-target="#${event.detailId}">
            <div class="card" style="background-image: url('${event.image}');">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
            </div>
        </div>
    `;
}

function renderCards() {
    const container = document.getElementById("events-grid");
    if (container) {
        container.innerHTML = eventsData.map(createCard).join("");// Renderiza
        
        // Delegación de eventos: permite hacer clic en cualquier tarjeta
        container.addEventListener('click', (e) => {
            const panel = e.target.closest('.event-panel');//Busca qué elemento debe mostrarse (data-target="#idDelElemento")
            if (!panel) return;
            const target = document.querySelector(panel.dataset.target);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                //Hace scroll suave hacia ese elemento
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", renderCards);