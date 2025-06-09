const featuredItems = [
    { name: 'Book Appointment', icon: 'img/ico/video-call.png', link: '#', calendly: true },
    { name: 'Doctors', icon: 'img/ico/medical-team.png', link: 'doctors.html' },
    { name: 'Hospitals', icon: 'img/ico/hospital.png', link: 'hospitals.html' },
    { name: 'Find Labs', icon: 'img/ico/pharmacy.png', link: 'pathlabs.html' },
    { name: 'Order Medicine', icon: 'img/ico/medicine.png', link: 'https://gostore.app/berrybone/manualorders' },
    { name: 'Book Lab Tests', icon: 'img/ico/microscope.png', link: 'https://gostore.app/berrybone/categories/sKh2KDDiBaXSl5G4u0tg' },
    { name: 'Book Ambulance', icon: 'img/ico/ambulance.png', link: 'ambulance.html' },
    { name: 'Blood Donors', icon: 'img/ico/donors.png', link: 'blood-finder.html' },
    { name: 'Caregivers', icon: 'img/ico/old.png', link: 'caregivers.html' },
    { name: 'My V-Pet', icon: 'img/ico/virtual-pet.png', link: 'my-vpet.html' },
    { name: 'Breathing Meditation', icon: 'img/ico/yoga.png', link: 'breath.html' },
    { name: 'BMI Calculator', icon: 'img/ico/bmi.png', link: 'bmi-calculator.html' },
    { name: 'BMR Calculator', icon: 'img/ico/bmr.png', link: 'bmr-calculator.html' },
    // { name: 'Custom Diet', icon: 'img/ico/wellbeing.png', link: 'diet-planner.html' },
    { name: 'Store', icon: 'img/ico/pharmacy.png', link: 'https://gostore.app/berrybone' },
    { name: 'Learning Center', icon: 'img/ico/blogs.png', link: 'blogs.html' },
    // { name: 'Doctor at Home', icon: 'img/ico/doctor-at-home.png', link: 'schedule-doctor-home-visit.html' },
    // { name: 'Vaccination Appointment', icon: 'img/ico/vaccine-record.png', link: 'vaccine-appointment-booking.html' },
    
];

const row1 = document.getElementById('featuredSliderRow1');
const row2 = document.getElementById('featuredSliderRow2');

featuredItems.forEach((item, index) => {
    const button = document.createElement('button');
    button.className = 'featured-button';
    
    let buttonContent = `
        <a href="${item.link}" class="btn-link">
            <img src="${item.icon}" alt="${item.name}">
        </a>
        <span>${item.name}</span>
    `;
    
    if (item.calendly) {
        button.setAttribute('onclick', "Calendly.initPopupWidget({url: 'https://calendly.com/careovr/doctor-appointment?background_color=4b0082&text_color=ffd700&primary_color=4169e1'});return false;");
        buttonContent = `
            <a href="#" class="btn-link">
                <img src="${item.icon}" alt="${item.name}">
            </a>
            <span>${item.name}</span>
        `;
    }
    
    button.innerHTML = buttonContent;

    if (index < 7) {
        row1.appendChild(button);
    } else {
        row2.appendChild(button);
    }
});