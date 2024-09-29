const doctors = [
  { name: 'Laxmi Kumari', city: 'Jaipur', link: 'caregivers/laxmi_kumari_23.html', specialty: 'Baby Care', image: 'https://img.freepik.com/premium-photo/women-beautiful-fashion-dress_953724-3410.jpg', verified: true, rating: 4.5, gender: 'Female' },
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
        <h5 class="doctor-name">${doctor.name}  ${doctor.verified ? '<img src="img/doctors/icon/verified.svg" alt="verified" class="verified">' : ''}</h5>
                  <p class="card-text">${doctor.specialty}</p>
                  <p class="card-text"><small class="text-muted"><i class="fa fa-location-pin"> ${doctor.city}</i></small></p>
                  <p class="card-text"><small class="text-muted">Rating: ${doctor.rating}<i class="fa fa-star"></i></small></p>
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