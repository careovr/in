const blogs = [
    { title: 'The Importance of Telemedicine: Transforming Healthcare', link: 'blogs/The-Vital-Role-of-Telemedicine-in-Modern-Healthcare.html', writer: 'Dr. Ayush Jain', date: '2024-07-11', image: 'https://img.freepik.com/free-vector/flat-design-online-medical-conference_23-2148884051.jpg' },
    { title: 'Guide to Better Sleep: Tips for a Restful Night ', link: 'blogs/Guide-to-Better-Sleep.html', writer: 'Dr. Riya Singh ', date: '2024-07-13', image: 'https://img.freepik.com/free-vector/insomnia-concept_23-2148652825.jpg' },
    { title: 'The Power of Mindfulness: Practices for Present-Moment Awareness', link: 'blogs/The-Power-of-Mindfulness.html', writer: 'Dr. Rakesh Jha', date: '2024-07-14', image: 'https://img.freepik.com/free-vector/hand-drawn-flat-digital-detox-illustration_23-2149328555.jpg' },
    { title: 'Save Tax, Stay Healthy: A Win-Win Guide for India', link: '#', writer: 'C.A. Rishi Roy', date: '2024-07-15', image: 'https://img.freepik.com/free-vector/hand-drawn-employee-benefits-illustration_23-2149538426.jpg?w=740' }
  ];

  function createBlogCard(blog) {
    const col = document.createElement('div');
    col.classList.add('col-6', 'col-md-4', 'col-lg-2-4', 'blog-card-col');

    const card = document.createElement('div');
    card.classList.add('card', 'blog-card', 'h-100');
    card.innerHTML = `
      <img src="${blog.image}" class="blog-img-top" alt="${blog.title}">
      <div class="card-body">
        <h5 class="doctor-name">${blog.title}</h5>
        <p class="card-text">By ${blog.writer}</p>
        <small class="card-text">${blog.date}</small><br>
        <a href="${blog.link}" class="btn btn-primary">Read More</a>
      </div>
    `;

    col.appendChild(card);
    return col;
  }

  function renderBlogCards(filteredBlogs) {
    const blogCards = document.getElementById('blogCards');
    blogCards.innerHTML = '';
    filteredBlogs.forEach(blog => {
      blogCards.appendChild(createBlogCard(blog));
    });
  }

  function filterBySearch(searchTerm) {
    const filteredBlogs = blogs.filter(blog =>
      blog.writer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderBlogCards(filteredBlogs);
  }

  function filterByDate(date) {
    const filteredBlogs = blogs.filter(blog => blog.date === date);
    renderBlogCards(filteredBlogs);
  }

  const searchInput = document.getElementById('searchInput');
  const dateInput = document.getElementById('dateInput');

  searchInput.addEventListener('input', () => filterBySearch(searchInput.value));
  dateInput.addEventListener('change', () => filterByDate(dateInput.value));

  // Initial render
  renderBlogCards(blogs);