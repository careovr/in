const doctors = [
  { name: 'Laxmi Kumari', city: 'Jaipur', link: 'caregivers/laxmi_kumari_23.html', specialty: 'Baby Care', image: 'https://img.freepik.com/premium-photo/women-beautiful-fashion-dress_953724-3410.jpg', verified: true, rating: 4.5, gender: 'Female' },
  { name: 'Madhu Devi', city: 'Samastipur', link: 'caregivers/madhu_devi_0226', specialty: 'General Care',  image: 'https://img.freepik.com/premium-vector/acupuncturist-vector-character-illustration-flat-style_1033579-56623.jpg', verified: false,rating: 4.7, gender: 'Female' },
  { name: 'Aditya Sharma', city: 'Delhi', link: '#', specialty: 'Elder Care',  image: 'https://img.freepik.com/premium-photo/photo-young-man-wearing-casual-clothes-with-happy-cool-smile-face_1058215-16.jpg', verified: false,rating: 4.5, gender: 'Male' },
  { name: 'Prabhat Kumar', city: 'Mumbai', link: '#', specialty: 'Full Time Care', image: 'https://img.freepik.com/premium-photo/portrait-smiling-young-man_1048944-16925927.jpg', verified: true,rating: 4.5, gender: 'Male' },
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
