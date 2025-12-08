/* gastronomy.js - clean renderer and interactions for gastronomy cards
     - Renders cards from data (window.GASTRONOMY_DATA or DEFAULT_GASTRONOMY_DATA)
     - Attaches accessible interactions (hover, focus, click, keyboard)
*/

const DEFAULT_GASTRONOMY_DATA = [
    {
        id: 'tortilla',
        title: 'Spanish Omelette (Tortilla de Patatas)',
        img: '/img/gastronomy/Tortilla-de-Patata-scaled.jpg',
        alt: 'Spanish omelette with potatoes',
        excerpt: 'A classic Spanish omelette: tender inside and golden outside.',
        ingredients: 'Potatoes, eggs, onion (optional), olive oil, salt.',
        preparation: 'Fry sliced potatoes over medium heat, mix with beaten eggs and cook in a pan until set to the desired doneness.'
    },
    {
        id: 'salmorejo',
        title: 'Salmorejo',
        img: '/img/gastronomy/images (3).jpeg',
        alt: 'Bowl of salmorejo (thick cold tomato soup)',
        excerpt: 'A creamy cold tomato purée from Andalusia, thicker than gazpacho and traditionally garnished with ham and egg.',
        ingredients: 'Tomatoes, stale bread, olive oil, garlic, salt, hard-boiled egg and cured ham for garnish.',
        preparation: 'Blend ripe tomatoes with soaked bread, garlic and olive oil until smooth, chill and serve topped with chopped egg and ham.'
    },
    {
        id: 'gazpacho',
        title: 'Gazpacho',
        img: '/img/gastronomy/gazpacho.jpg',
        alt: 'Refreshing gazpacho soup',
        excerpt: 'A refreshing cold tomato and vegetable soup, perfect for hot Andalusian summers.',
        ingredients: 'Tomatoes, cucumber, green pepper, onion, garlic, olive oil, vinegar, stale bread, salt.',
        preparation: 'Blend all vegetables with soaked bread, olive oil and vinegar until smooth, chill well and serve cold.'
    },
    {
        id: 'croquetas-jamon',
        title: 'Creamy Ham Croquettes',
        img: '/img/gastronomy/croqueta.jpg',
        alt: 'Crispy croquettes filled with ham and creamy béchamel',
        excerpt: 'Crispy on the outside with a silky interior infused with ham.',
        ingredients: 'Serrano ham, butter, flour, milk, nutmeg, egg, breadcrumbs, oil.',
        preparation: 'Make a thick béchamel with chopped ham, chill, shape into croquettes, coat and fry until golden.'
    },
    {
        id: 'pescaito-frito',
        title: 'Fried Small Fish (Pescaito Frito)',
        img: '/img/gastronomy/Pescaito-Frito.jpg',
        alt: 'Assortment of small fried fish',
        excerpt: 'An Andalusian staple: lightly battered and fried small fish, crispy and flavorful.',
        ingredients: 'Assorted small fish (anchovies, Mediterranean smelts), flour, salt, olive oil, lemon wedges.',
        preparation: 'Dust small fish in seasoned flour and deep-fry in hot oil until crisp; drain and serve with lemon.'
    },
    {
        id: 'rabo-de-toro',
        title: "Oxtail Stew (Rabo de Toro)",
        img: '/img/gastronomy/rabo-de-toro-a-la-cordobesa.jpg',
        alt: 'Rich oxtail stew',
        excerpt: 'A slow-cooked, hearty oxtail stew with rich, concentrated flavors typical of southern Spain.',
        ingredients: 'Oxtail, onions, carrots, garlic, red wine, beef stock, tomatoes, bay leaf, olive oil, salt, pepper.',
        preparation: 'Brown oxtail, sauté vegetables, deglaze with wine, then simmer slowly in stock and tomatoes until meat is tender and sauce is thick.'
    },
    {
        id: 'serranito',
        title: 'Serranito Sandwich',
        img: '/img/gastronomy/bocadillo-serranito.jpg',
        alt: 'Serranito sandwich with grilled pork and peppers',
        excerpt: 'A popular Sevillian sandwich featuring grilled pork or chicken, cured ham and roasted pepper.',
        ingredients: 'Bread roll, grilled pork or chicken, cured ham (jamón), roasted green pepper, tomato, olive oil, salt.',
        preparation: 'Assemble grilled meat, ham and roasted pepper in a roll with a drizzle of olive oil and a slice of tomato; serve warm.'
    }
];

// Use template-based renderer to preserve the original HTML structure
function escapeHTML(str){
    if(typeof str !== 'string') return '';
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function renderCardsWithTemplate(container, data){
    let html = '';
    data.forEach(item => {
        const title = escapeHTML(item.title || '');
        const img = escapeHTML(item.img || '');
        const alt = escapeHTML(item.alt || item.title || '');
        const excerpt = escapeHTML(item.excerpt || '');
        const ingredients = escapeHTML(item.ingredients || '');
        const preparation = escapeHTML(item.preparation || '');

        html += `
            <div class="food-card" role="button" tabindex="0" aria-expanded="false">
                <img src="${img}" alt="${alt}">
                <div class="card-content">
                    <h3 class="card-title">${title}</h3>
                    <div class="more-hint">Hover or press to see more</div>
                    <div class="card-details" aria-hidden="true">
                        <p>${excerpt}</p>
                        <p><strong>Ingredients:</strong> ${ingredients}</p>
                        <p><strong>Brief Preparation:</strong> ${preparation}</p>
                    </div>
                </div>
            </div>`;
    });

    container.innerHTML = html;
    // Attach interactions to the newly created cards
    const newCards = container.querySelectorAll('.food-card');
    newCards.forEach(attachInteractions);
}

function attachInteractions(card){
    const details = card.querySelector('.card-details');

    const open = () => {
        card.setAttribute('aria-expanded','true');
        if(details) details.setAttribute('aria-hidden','false');
    };
    const close = () => {
        card.setAttribute('aria-expanded','false');
        if(details) details.setAttribute('aria-hidden','true');
    };
    const toggle = () => {
        const opened = card.getAttribute('aria-expanded') === 'true';
        if(opened) close(); else open();
    };

    card.addEventListener('mouseenter', open);
    card.addEventListener('mouseleave', close);
    card.addEventListener('focusin', open);
    card.addEventListener('focusout', close);
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', function(e){
        if(e.key === 'Enter' || e.key === ' '){
            e.preventDefault();
            toggle();
        }
    });
}

function renderCards(container, data){
    container.innerHTML = '';
    data.forEach(item => {
        const card = createCard(item);
        attachInteractions(card);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#foodCardsContainer') || document.querySelector('.cards-list');
    if(!container) return;
    const data = (window.GASTRONOMY_DATA && Array.isArray(window.GASTRONOMY_DATA)) ? window.GASTRONOMY_DATA : DEFAULT_GASTRONOMY_DATA;
    // Use the template renderer to preserve original markup
    renderCardsWithTemplate(container, data);
});
