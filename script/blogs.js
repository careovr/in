const content = [
    { title: 'Why Rural India Deserves Faster and Affordable Healthcare – Here’s How We’re Making It Happen', link: 'blogs/rural-india-affordable-healthcare-solutions.html', date: '2024-07-15', type: 'blog', category: 'tech', image: 'img/blogs/tsfmGCX1TpyrCGkkwvwW-Q.webp' },
    { title: 'How Blood Donation Can Save Lives: Benefits and How to Get Started', link: 'blogs/how-blood-donation-saves-lives-benefits-getting-started.html', date: '2024-07-16', type: 'blog', category: 'health', image: 'img/blogs/XOwZmWQfSQqLZtO0Jj3IFA.webp' },
    { title: 'कैसे रखें ब्लड प्रेशर और शुगर को कंट्रोल में? | How to Control Blood Pressure and Sugar', link: 'blogs/how-to-control-blood-pressure-and-sugar.html', date: '2024-09-25', type: 'blog', category: 'health', image: 'img/blogs/how-to-control-blood-pressure-and-sugar.webp' },
    { title: 'कैसे रखें अपनी इम्यूनिटी को मजबूत? | How to Keep Your Immunity Strong', link: 'blogs/how-to-keep-your-immunity-strong.html', date: '2024-09-29', type: 'blog', category: 'health', image: 'https://img.freepik.com/free-vector/boost-your-immune-system-infographic_23-2148578950.jpg' },


];

const articleGridEl = document.getElementById('articleGrid');
const searchInputEl = document.getElementById('searchInput');
const categoryBtnsEl = document.querySelectorAll('[data-category]');
const typeBtnsEl = document.querySelectorAll('[data-type]');

function renderArticles(articles) {
    articleGridEl.innerHTML = '';
    articles.forEach((article) => {
        const articleEl = document.createElement('div');
        articleEl.className = 'col';
        articleEl.innerHTML = `
            <div class="card h-100">
                <img src="${article.image}" class="card-img-top" alt="${article.title}">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text"><small class="text-muted">${article.date}</small></p>
                    <a href="${article.link}" class="btn btn-outline-primary">Read More</a>
                </div>
            </div>
        `;
        articleGridEl.appendChild(articleEl);
    });
}

function filterArticles() {
    const searchTerm = searchInputEl.value.toLowerCase();
    const activeCategory = document.querySelector('[data-category].active').dataset.category;
    const activeType = document.querySelector('[data-type].active').dataset.type;

    const filteredContent = content.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm);
        const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
        const matchesType = activeType === 'all' || article.type === activeType;
        return matchesSearch && matchesCategory && matchesType;
    });

    renderArticles(filteredContent);
}

searchInputEl.addEventListener('input', filterArticles);

categoryBtnsEl.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtnsEl.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterArticles();
    });
});

typeBtnsEl.forEach(btn => {
    btn.addEventListener('click', () => {
        typeBtnsEl.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterArticles();
    });
});

// Initial render
renderArticles(content);