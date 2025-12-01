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

        container.addEventListener('click', (e) => {
            const btn = e.target.closest('.view-btn');
            if (!btn) return;
            const url = btn.dataset.url;
            if (url) window.open(url, '_blank', 'noopener');
        });
    }
}

document.addEventListener("DOMContentLoaded", renderCards);

document.addEventListener('DOMContentLoaded', () => {
    // Open modal when clicking any timeline link
    const modal = document.getElementById('history-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = modal.querySelector('.history-modal-close');

    function openModal(title, desc, imgSrc, imgAlt) {
        modalTitle.textContent = title || '';
        modalDesc.textContent = desc || '';
        if (imgSrc) {
            modalImg.src = imgSrc;
            modalImg.alt = imgAlt || title;
            modalImg.style.display = 'block';
        } else {
            modalImg.style.display = 'none';
        }
        modal.classList.add('show');
        modal.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
    }

    // delegate clicks on timeline links
    document.querySelectorAll('.timeline-img a').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const title = a.dataset.title || '';
            const desc = a.dataset.desc || '';
            const img = a.querySelector('img')?.src || '';
            openModal(title, desc, img, a.querySelector('img')?.alt || '');
        });
    });

    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // reveal animation on scroll
    const items = document.querySelectorAll('.timeline-item');
    const io = new IntersectionObserver((entries) => {
        entries.forEach(ent => {
            if (ent.isIntersecting) ent.target.classList.add('in-view');
        });
    }, { threshold: 0.15 });

    items.forEach(i => io.observe(i));
});
