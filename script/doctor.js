const doctors = [
  { name: 'Dr. Kavya Gupta', city: 'Mumbai', specialty: 'Cardiologist', link: 'doctors/dr_kavya_gupta.html', image: 'img/doctors/a.png', verified: true, rating: 4.9, gender: 'Female' },
  { name: 'Dr. Aadarsh Mehra', city: 'Jaipur', specialty: 'Endocrinologists', link: '#', image: 'img/doctors/aadarsh.png', verified: true, rating: 4.5, gender: 'Male' },
  { name: 'Dr. Sumit Sharma', city: 'Delhi', specialty: 'Audiologists', link: '#', image: 'img/doctors/Sumit.png', verified: true, rating: 4.7, gender: 'Male' },
  { name: 'Dr. Raghav Singh', city: 'Delhi', specialty: 'Dentist', link: '#', image: 'img/doctors/aadarsh.png', verified: false, rating: 4.2, gender: 'Male' },
  { name: 'Dr. S. Jhunjhun Wala', city: 'Hasanpur', specialty: 'General Physician', link: '#', image: 'img/doctors/564532435.png', verified: false, rating: 4.5, gender: 'Male' },
  { name: 'Dr. Neeraj Kumar', city: 'Madhepura', specialty: 'Urologist', link: '#', image: 'img/doctors/doctor-male.png', verified: false, rating: 3.8, gender: 'Male' },
  { name: 'Dr. Rakesh Kumar', city: 'Madhepura', specialty: 'Orthopedic', link: '#', image: 'img/doctors/doctor-male.png', verified: false, rating: 3.9, gender: 'Male' },
  { name: 'Dr. Mukesh Kumar', city: 'Madhepura', specialty: 'Laproscopy', link: '#', image: 'img/doctors/doctor-male.png', verified: false, rating: 4.1, gender: 'Male' },
  { name: 'Dr. Manoj Kumar', city: 'Madhepura', specialty: 'General Practitioner', link: '#', image: 'img/doctors/doctor-male.png', verified: false, rating: 3.7, gender: 'Male' },
  { name: 'Dr. Sonu Kumar', city: 'Madhepura', specialty: 'General Practitioner', link: '#', image: 'img/doctors/doctor-male.png', verified: false, rating: 3.6, gender: 'Male' },
  { name: 'Dr. Punita Kumari', city: 'Madhepura', specialty: 'General Practitioner', link: '#', image: 'img/doctors/doctor-female.png', verified: false, rating: 3.8, gender: 'Female' },
  { name: 'Dr. Siddhart Priyadarshi', city: 'Madhepura', specialty: 'Neurologist', link: '#', image: 'img/doctors/doctor-male.png', verified: false, rating: 4.3, gender: 'Male' },
  { name: 'Dr. K. K. Pujan', city: 'Madhepura', specialty: 'General Surgeon', link: '#', image: 'img/doctors/doctor-male.png', verified: false, rating: 4.0, gender: 'Male' }
];


document.addEventListener('DOMContentLoaded', () => {
  loadDoctorCards(doctors);

  document.getElementById('searchInput').addEventListener('input', filterDoctors);
  document.getElementById('filterBtn').addEventListener('click', filterDoctors);
});

function loadDoctorCards(doctors) {
  const container = document.getElementById('doctorCardsContainer');
  container.innerHTML = '';

  doctors.forEach(doctor => {
      const card = document.createElement('div');
      card.className = 'col-6 col-md-4 col-lg-3 card-pro';
      card.innerHTML = `
      <a class="profile-link" href="${doctor.link}">
          <div class="card">
              <img src="${doctor.image}" class="card-img-top profile" alt="${doctor.name}">
              <div class="card-body">
        <h5 class="doctor-name card-title">${doctor.name}  ${doctor.verified ? '<img src="img/doctors/icon/verified.svg" alt="verified" class="verified">' : ''}</h5>
                  <p class="card-text">${doctor.specialty}</p>
                
                  <div class="location">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>${doctor.city}</span>
                        </div></p>
                                          <p class="card-text"><small class="text-muted "><i class="fa fa-star rating"></i> (${doctor.rating}) </small></p>

              </div>
          </div>
          </a>
      `;
      container.appendChild(card);
  });
}

function filterDoctors() {
  const searchQuery = document.getElementById('searchInput').value.toLowerCase();
  const selectedGender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
  const selectedSpecialty = document.getElementById('specialtySelect').value;

  const filteredDoctors = doctors.filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchQuery) || doctor.city.toLowerCase().includes(searchQuery);
      const matchesGender = selectedGender ? doctor.gender === selectedGender : true;
      const matchesSpecialty = selectedSpecialty ? doctor.specialty === selectedSpecialty : true;

      return matchesSearch && matchesGender && matchesSpecialty;
  });

  loadDoctorCards(filteredDoctors);
}
