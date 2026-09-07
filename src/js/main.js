const CONFIG = {
    cardCount: 25,
    loremText: `Рыбный текст — это просто текст-заполнитель, который используется в типографике и веб-дизайне. Он помогает визуально оценить, как будет выглядеть страница с контентом, не отвлекаясь на смысл.`,
    cardTitle: 'Карточка',
    categoryPrefix: 'Категория'
};

const grid = document.getElementById('cards-grid');

for (let i = 1; i <= CONFIG.cardCount; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card_image">
            <img src="https://picsum.photos/seed/${i}/400/400" alt="${CONFIG.cardTitle} ${i}" loading="lazy">
        </div>
        <div class="card_content">
            <h3 class="card_title">${CONFIG.cardTitle} ${i}</h3>
            <p class="card_text">${CONFIG.loremText.slice(0, 80)}...</p>
        </div>
        <div class="card_footer">
            <span class="card_tag">${CONFIG.categoryPrefix} ${(i % 4) + 1}</span>
            <a href="#" class="card_link">→</a>
        </div>
    `;
    grid.appendChild(card);
}

function hideIncompleteRow() {
    const cards = grid.querySelectorAll('.card');
    const cols = getComputedStyle(grid).gridTemplateColumns.split(' ').length;
    const visible = Math.floor(cards.length / cols) * cols;

    cards.forEach((card, i) => {
        card.style.display = i < visible ? '' : 'none';
    });
}

hideIncompleteRow();

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(hideIncompleteRow, 200);
});

const burger = document.getElementById('burgerToggle');
const sidebar = document.getElementById('sidebar');

if (burger && sidebar) {
    burger.addEventListener('click', () => {
        sidebar.classList.toggle('is-open');
        document.body.style.overflow = sidebar.classList.contains('is-open') ? 'hidden' : '';
    });

    document.querySelectorAll('.sidebar_link').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('is-open');
            document.body.style.overflow = '';
        });
    });
}