const dishes = [
    {
        id: 1,
        name: "Ham and Fontina",
        description: "Roasted eggplant spread, marinated tomatoes.",
        price: "$29.5",
        image: "../img/gastronomy/ham-fontina.jpg"
    },
    {
        id: 2,
        name: "Chicken Italiano",
        description: "Tostique poilifem possitime neque fermentum vel.",
        price: "$11",
        image: "../img/gastronomy/chicken-italiano.jpg"
    },
    {
        id: 3,
        name: "Spaghetti Delle",
        description: "Rustic tagliatelle loaded with herb-garlic butter & parmesan.",
        price: "$28",
        image: "../img/gastronomy/spaghetti-delle.jpg"
    },
    {
        id: 4,
        name: "Crumbled Sausage",
        description: "Natural unprocessed ham, fontina, provolone aoli, fresh tomato.",
        price: "$12.5",
        image: "../img/gastronomy/crumbled-sausage.jpg"
    },
    {
        id: 5,
        name: "Baked Meatballs",
        description: "Our handmade meatballs baked in savory marinara with melted cheese.",
        price: "$32.5",
        image: "../img/gastronomy/baked-meatballs.jpg"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dishesContainer');
    
    dishes.forEach(dish => {
        const card = document.createElement('div');
        card.className = 'dish-card';
        card.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}" class="dish-image">
            <div class="dish-content">
                <h3 class="dish-name">${dish.name}</h3>
                <p class="dish-description">${dish.description}</p>
                <p class="dish-price">${dish.price}</p>
            </div>
        `;
        container.appendChild(card);
    });
});