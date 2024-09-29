const hospitals = [
  { name: 'Isha Healthcare', city: 'Samastipur', link: 'hospitals/isha_healthcare.html', image: 'https://img.freepik.com/free-photo/glass-designed-building-view_23-2148230382.jpg', rating: 4.3, verified: true },
  { name: 'Jiwan Hospital', city: 'Delhi', link: '#', image: 'https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661462.jpg', rating: 3.8, verified: false },
  { name: 'Sri Ram Janki Hospital', city: 'Mumbai', link: '#', image: 'https://img.freepik.com/premium-photo/hospital-building-red-cross-medical-institution-health-treatment-disease-wallpaper-background_327903-1523123.jpg', rating: 4.1, verified: true },
  { name: 'Gangotri Memorial Hospital', city: 'Madhepura', link: '#', image: 'https://img.freepik.com/free-photo/glass-designed-building-view_23-2148230382.jpg', rating: 4.0, verified: false },
];

const searchInput = document.getElementById('searchInput');
const citySelect = document.getElementById('citySelect');
const hospitalCards = document.getElementById('hospitalCards');
const filterOptions = document.querySelectorAll('.filter-option');

function populateCitySelect() {
  const cities = [...new Set(hospitals.map(hospital => hospital.city))];
  cities.forEach(city => {
      const option = document.createElement('option');
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
  });
}

function createHospitalCard(hospital) {
  return `
  <a href="${hospital.link}" class="none-link">
      <div class="col">
          <div class="hospital-card">
              <img src="${hospital.image}" alt="${hospital.name}">
              <div class="hospital-info">
                  <div class="hospital-name">
                                                     ${hospital.name}      ${hospital.verified ? '<img src="img/doctors/icon/verified.svg" alt="verified" class="verified">' : ''}

                  </div>
                  <div class="hospital-location"><i class="fas fa-map-marker-alt me-1"></i>${hospital.city}</div>
                  <div class="rating">
                      ${'★'.repeat(Math.floor(hospital.rating))}${hospital.rating % 1 !== 0 ? '½' : ''}
                      ${'☆'.repeat(5 - Math.ceil(hospital.rating))}
                      <span class="ms-1">${hospital.rating.toFixed(1)}</span>
                  </div>
              </div>
          </div>
      </div>
      </a>
  `;
}

function filterHospitals() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCity = citySelect.value;
  const activeFilters = Array.from(document.querySelectorAll('.filter-option.active')).map(el => el.dataset.filter);

  const filteredHospitals = hospitals.filter(hospital => {
      const matchesSearch = hospital.name.toLowerCase().includes(searchTerm) || hospital.city.toLowerCase().includes(searchTerm);
      const matchesCity = selectedCity === '' || hospital.city === selectedCity;
      const matchesFilters = activeFilters.every(filter => {
          switch(filter) {
              case 'all': return true;
              case 'verified': return hospital.verified;
              case '5star': return hospital.rating === 5;
              case '4star': return hospital.rating <= 4.9;
              case '3star': return hospital.rating <= 3;
              default: return true;
          }
      });
      return matchesSearch && matchesCity && matchesFilters;
  });

  hospitalCards.innerHTML = filteredHospitals.map(createHospitalCard).join('');
}

searchInput.addEventListener('input', filterHospitals);
citySelect.addEventListener('change', filterHospitals);

filterOptions.forEach(option => {
  option.addEventListener('click', () => {
      if (option.dataset.filter === 'all') {
          filterOptions.forEach(opt => opt.classList.remove('active'));
          option.classList.add('active');
      } else {
          filterOptions[0].classList.remove('active');
          option.classList.toggle('active');
      }
      filterHospitals();
  });
});

populateCitySelect();
filterHospitals();