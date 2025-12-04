document.addEventListener('DOMContentLoaded', () => {
    const timelineData = [
        {
            period: "Romans",
            title: "Origins of Seville",
            description: "Seville was founded by the Romans as Hispalis. It became an important port city and was one of the most prosperous cities in Roman Hispania.",
            image: null
        },
        {
            period: "Muslims",
            title: "Ishbiliya",
            description: "During the Islamic period (711-1248), Seville flourished as the capital of a taifa kingdom. The city was known as Ishbiliya and became a center of arts and culture.",
            image: null
        },
        {
            period: "",
            title: "Image of Ancient Seville",
            description: "",
            image: "../img/historia1.jpg"
        },
        {
            period: "Christians",
            title: "Kingdom of Seville",
            description: "After the Christian Reconquest in 1248, Seville became the capital of the Kingdom of Seville. The city grew rapidly and became a major center of Christian Spain.",
            image: null
        },
        {
            period: "Golden Age",
            title: "XVI–XVII Centuries",
            description: "Seville experienced its golden age during the 16th and 17th centuries. It was the wealthiest city in Spain due to its monopoly on trade with the Americas.",
            image: null
        },
        {
            period: "",
            title: "Image of Seville's Golden Age",
            description: "",
            image: "../img/historia2.jpg"
        },
        {
            period: "Modern Era",
            title: "Contemporary Seville",
            description: "In modern times, Seville has evolved into a vibrant cultural and economic center. It hosted the 1992 World's Fair and continues to attract visitors from around the world.",
            image: null
        },
        {
            period: "Today",
            title: "Vibrant City Life",
            description: "Seville today is a dynamic city that preserves its rich heritage while embracing modernity. It remains a major tourist destination and cultural hub in southern Spain.",
            image: null
        }, {
            period: "",
            title: "Image of Seville nowadays",
            description: "",
            image: "../img/sevilla-pan.jpg"
        },
    ];

    const container = document.getElementById('timelineItems');
    if (!container) return;

    function renderTimeline() {
        let html = '';

        timelineData.forEach((item, index) => {
            if (item.image) {
                // Render image
                html += `
                    <div class="timeline-image" data-index="${index}">
                        <img src="${item.image}" alt="Seville history">
                    </div>
                `;
            } else {
                // Render text item
                html += `
                    <div class="timeline-item" data-index="${index}">
                        <div class="timeline-content">
                            <h3>${item.period}</h3>
                            <h4>${item.title}</h4>
                            <p>${item.description}</p>
                        </div>
                    </div>
                `;
            }
        });

        container.innerHTML = html;
    }

    renderTimeline();

    // Intersection Observer para scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.timeline-item, .timeline-image').forEach(el => {
        observer.observe(el);
    });

   
});