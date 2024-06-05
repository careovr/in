const doctors = [
  { name: 'Isha Healthcare', city: 'Jaipur', link: 'hospitals/ishahealthcare.html', image: 'https://img.freepik.com/premium-photo/hospital-building-red-cross-medical-institution-health-treatment-disease-wallpaper-background_327903-1523123.jpg', verified: true },
  { name: 'Jiwan Hospital', city: 'Delhi', link: 'hospitals/ishahealthcare.html', image: 'https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661462.jpg', verified: true },
  { name: 'Sri Ram Janki Hospital', city: 'Mumbai', link: 'hospitals/ishahealthcare.html', image: 'https://img.freepik.com/free-photo/glass-designed-building-view_23-2148230382.jpg', verified: true },
];

function createDoctorCard(doctor) {
  const col = document.createElement('div');
  col.classList.add('col-6', 'col-md-4', 'col-lg-2-4', 'doctor-card-col');

  const card = document.createElement('div');
  card.classList.add('card', 'doctor-card', 'h-100');
  card.innerHTML = `
    <img src="${doctor.image}" class="hospital-img-top" alt="${doctor.name}">
    <div class="card-body">
      <div class="doctor-name">
        <h5 class="doctor-name">${doctor.name}  ${doctor.verified ? '<img src="img/doctors/icon/verified.svg" alt="verified" class="verified">' : ''}</h5>
       
      </div>
      <p class="card-location"> <i class="fa fa-location-dot"></i> ${doctor.city}</p>        
      <a href="${doctor.link}" class="btn btn-primary">View Profile</a>
    </div>
  `;

  col.appendChild(card);
  return col;
}

