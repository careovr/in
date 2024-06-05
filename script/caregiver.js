const doctors = [
  { name: 'Laxmi Kumari', city: 'Jaipur', link: 'caregivers/laxmik167.html', type: 'Baby Care', image: 'https://img.freepik.com/premium-photo/women-beautiful-fashion-dress_953724-3410.jpg', verified: true },
  { name: 'Aditya Sharma', city: 'Delhi', link: 'caregivers/laxmik167.html', type: 'Elder Care', link: 'doctors/drsumit.html', image: 'https://img.freepik.com/premium-photo/photo-young-man-wearing-casual-clothes-with-happy-cool-smile-face_1058215-16.jpg', verified: false },
  { name: 'Prabhat Kumar', city: 'Mumbai', link: 'caregivers/laxmik167.html', type: 'Full Time Care', link: 'doctors/ananyahealthcare.html', image: 'https://img.freepik.com/premium-photo/portrait-smiling-young-man_1048944-16925927.jpg', verified: true },
];

function createDoctorCard(doctor) {
  const col = document.createElement('div');
  col.classList.add('col-6', 'col-md-4', 'col-lg-2-4', 'doctor-card-col');

  const card = document.createElement('div');
  card.classList.add('card', 'doctor-card', 'h-100');
  card.innerHTML = `
    <img src="${doctor.image}" class="card-img-top" alt="${doctor.name}">
    <div class="card-body">
      <div class="doctor-name">
        <h5 class="doctor-name">${doctor.name}  ${doctor.verified ? '<img src="img/doctors/icon/verified.svg" alt="verified" class="verified">' : ''}</h5>
       
      </div>
      <p class="card-type"><i class="fa-solid fa-hand-holding-medical"></i> ${doctor.type}</p>
      <p class="card-location"> <i class="fa fa-location-dot"></i> ${doctor.city}</p>        
      <a href="${doctor.link}" class="btn btn-primary">View Profile</a>
    </div>
  `;

  col.appendChild(card);
  return col;
}
