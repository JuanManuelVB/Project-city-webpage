const gastronomyData = [
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

function createCard(item) { 
       return  `<div class="food-card" role="button" tabindex="0" aria-expanded="false">
                <img src="${item.img}" alt="${item.alt}">
                <div class="food-content">
                    <h3 class="food-title">${item.title}</h3>
                    <div class="more-hint">Hover or press to see more</div>
                    <div class="food-details" aria-hidden="true">
                        <p>${item. excerpt}</p>
                        <p><strong>Ingredients:</strong> ${item.ingredients}</p>
                        <p><strong>Brief Preparation:</strong> ${item.preparation}</p>
                    </div>
                </div>
            </div>`;
}

document.addEventListener("DOMContentLoaded", () => {   // Esperar a que el DOM esté completamente cargado
    const container = document.querySelector("#foodCardsContainer")     
                   || document.querySelector(".food-list");

    if (!container) return;

    container.innerHTML = "";

    gastronomyData.forEach(item => {

        // Convertir el HTML string en nodo real
        const wrapper = document.createElement("div");
        wrapper.innerHTML = createCard(item);
        const card = wrapper.firstElementChild; //Devuelve el primer elemento hijo (la card)

        const toggle = () => {
            card.classList.toggle("open");
        };

        // Interacciones simples
        card.addEventListener("mouseenter", () => card.classList.add("open"));
        card.addEventListener("mouseleave", () => card.classList.remove("open"));
        card.addEventListener("click", toggle);

        container.appendChild(card);
    });
});