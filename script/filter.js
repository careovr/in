// Code For PRofile Card Filter

function renderDoctorCards(filteredDoctors) {
  const doctorCards = document.getElementById('doctorCards');
  doctorCards.innerHTML = '';
  filteredDoctors.forEach(doctor => {
    doctorCards.appendChild(createDoctorCard(doctor));
  });
}
function filterByCity(city) {
  const filteredDoctors = doctors.filter(doctor => doctor.city.toLowerCase() === city.toLowerCase());
  renderDoctorCards(filteredDoctors);
}

function filterByName(name) {
  const filteredDoctors = doctors.filter(doctor => doctor.name.toLowerCase().includes(name.toLowerCase()));
  renderDoctorCards(filteredDoctors);
}

function filterByType(type) {
  const filteredDoctors = doctors.filter(doctor => doctor.type.toLowerCase() === type.toLowerCase());
  renderDoctorCards(filteredDoctors);
}

const cityInput = document.getElementById('cityInput');
const doctorInput = document.getElementById('doctorInput');

cityInput.addEventListener('input', () => filterByCity(cityInput.value));
doctorInput.addEventListener('input', () => filterByName(doctorInput.value));

// Initial render
renderDoctorCards(doctors);
// Rest of the code remains the same...