const doctors = [
  { name: 'Dr. Aadarsh Mehra', city: 'Jaipur', link: 'doctors/draadarsh.html', type: 'Endocrinologists', image: 'img/doctors/aadarsh.png', verified: true },
  { name: 'Dr. Sumit Sharma', city: 'Delhi', type: 'Audiologists', link: 'doctors/drsumit.html', image: 'img/doctors/Sumit.png', verified: true },
  { name: 'Dr. Ananya Mishra', city: 'Mumbai', type: 'Cardiologist', link: 'doctors/ananyahealthcare.html', image: 'img/doctors/a.png', verified: true },
  { name: 'Dr. Raghav Singh', city: 'Delhi', type: 'Dentist', link: 'doctors/draadarsh.html', image: 'img/doctors/aadarsh.png', verified: false }
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
      <p class="card-type"><i class="fa-solid fa-stethoscope"></i> ${doctor.type}</p>
      <p class="card-location"> <i class="fa fa-location-dot"></i> ${doctor.city}</p>        
      <a href="${doctor.link}" class="btn btn-primary">View Profile</a>
    </div>
  `;

  col.appendChild(card);
  return col;
}

