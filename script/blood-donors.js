 // Dummy data for testing
 const donors = [
    // Blood Category: A+
    { name: 'SUSHANT KUMAR', bloodGroup: 'A+', city: 'Samastipur', mobileNo: '9910736534' },
    { name: 'SUJIT GHOSH', bloodGroup: 'A+', city: 'Samastipur', mobileNo: '8510336699' },
    { name: 'VIJAY KUMAR', bloodGroup: 'A+', city: 'Samastipur', mobileNo: '9871206854' },
    { name: 'VINOD KUMAR', bloodGroup: 'A+', city: 'Samastipur', mobileNo: '9810079967' },
    { name: 'AMIT KUMAR', bloodGroup: 'A+', city: 'Samastipur', mobileNo: '8010179958' },
    { name: 'RAMVEER SINGH', bloodGroup: 'A+', city: 'Samastipur', mobileNo: '9911575982' },
    { name: 'RAMESH KUMAR', bloodGroup: 'A+', city: 'Samastipur', mobileNo: '9811501887' },
    { name: 'SURESH PRASAD', bloodGroup: 'A+', city: 'Samastipur', mobileNo: '9810441769' },
    { name: 'VIKAS KUMAR', bloodGroup: 'A+', city: 'Samastipur', mobileNo: '9810625010' },
    { name: 'VIVEK KUMAR', bloodGroup: 'A+', city: 'Samastipur', mobileNo: '9311409052' },
    // Add more A+ donors here...
  
    // Blood Category: A-
    { name: 'PRIYANKA SINGH', bloodGroup: 'A-', city: 'Samastipur', mobileNo: '9711027343' },
    // Add more A- donors here...
  
    // Blood Category: B+
    { name: 'MANOJ KUMAR', bloodGroup: 'B+', city: 'Samastipur', mobileNo: '9818489565' },
    { name: 'SANJAY KUMAR SHARMA', bloodGroup: 'B+', city: 'Samastipur', mobileNo: '9810200458' },
    { name: 'RAVI SHANKAR', bloodGroup: 'B+', city: 'Samastipur', mobileNo: '9818604667' },
    { name: 'RASHID AHAMAD', bloodGroup: 'B+', city: 'Samastipur', mobileNo: '9810896482' },
    { name: 'PREM SINGH', bloodGroup: 'B+', city: 'Samastipur', mobileNo: '9811683431' },
    { name: 'DINESH KUMAR', bloodGroup: 'B+', city: 'Samastipur', mobileNo: '9810911184' },
    { name: 'SAURABH SHARMA', bloodGroup: 'B+', city: 'Samastipur', mobileNo: '9868685657' },
    { name: 'VINOD KUMAR', bloodGroup: 'B+', city: 'Samastipur', mobileNo: '9868359325' },
    { name: 'S N RAJPUT', bloodGroup: 'B+', city: 'Samastipur', mobileNo: '9868494473' },
    { name: 'MD. SARFARAZ', bloodGroup: 'B+', city: 'Samastipur', mobileNo: '8750005588' },
    // Add more B+ donors here...
  
    // Blood Category: B-
    { name: 'SURESH YADAV', bloodGroup: 'B-', city: 'Samastipur', mobileNo: '8130007460' },
    { name: 'PRAVEEN KUMAR', bloodGroup: 'B-', city: 'Samastipur', mobileNo: '9718648093' },
    { name: 'SUNNY CHUG', bloodGroup: 'B-', city: 'Samastipur', mobileNo: '7838381460' },
    { name: 'SANDEEP YADAV', bloodGroup: 'B-', city: 'Samastipur', mobileNo: '9718024380' },
    { name: 'KRISHAN KUMAR', bloodGroup: 'B-', city: 'Samastipur', mobileNo: '9718004443' },
    // Add more B- donors here...
  
    // Blood Category: AB+
    { name: 'DEEPAK SINGH', bloodGroup: 'AB+', city: 'Samastipur', mobileNo: '8860911823' },
    { name: 'VED', bloodGroup: 'AB+', city: 'Samastipur', mobileNo: '7668973552' },
    { name: 'ANURAG SNGH', bloodGroup: 'AB+', city: 'Samastipur', mobileNo: '7668573500' },
    { name: 'SURENDRA KUMAR SINGH', bloodGroup: 'AB+', city: 'Samastipur', mobileNo: '9711676676' },
    { name: 'AJIT KUMAR', bloodGroup: 'AB+', city: 'Samastipur', mobileNo: '7503870706' },
    // Add more AB+ donors here...
  
    // Blood Category: AB-
    { name: 'POOJA', bloodGroup: 'AB-', city: 'Samastipur', mobileNo: '8800334894' },
  
    // Blood Category: O+
    { name: 'RAJESH', bloodGroup: 'O+', city: 'Samastipur', mobileNo: '9911481229' },
    { name: 'MUKESH KUMAR', bloodGroup: 'O+', city: 'Samastipur', mobileNo: '9891077679' },
    { name: 'RAHUL SHARMA', bloodGroup: 'O+', city: 'Samastipur', mobileNo: '8447430397' },
    { name: 'SANDEEP KUMAR', bloodGroup: 'O+', city: 'Samastipur', mobileNo: '8447560337' },
    { name: 'RAVINDER SINGH', bloodGroup: 'O+', city: 'Samastipur', mobileNo: '8130915075' },
    { name: 'ANUJ KUMAR', bloodGroup: 'O+', city: 'Samastipur', mobileNo: '9313073708' },
    { name: 'JOGINDER SHARMA', bloodGroup: 'O+', city: 'Samastipur', mobileNo: '9718261639' },
    { name: 'PRAVEEN KUMAR', bloodGroup: 'O+', city: 'Samastipur', mobileNo: '9718796933' },
    { name: 'SONU MALL', bloodGroup: 'O+', city: 'Samastipur', mobileNo: '9810909244' },
    { name: 'VIKASH KUMAR SAHA', bloodGroup: 'O+', city: 'Samastipur', mobileNo: '8750740003' },
    // Add more O+ donors here...
  
    // Blood Category: O-
    { name: 'LT GEN R S SUJLANA', bloodGroup: 'O-', city: 'Samastipur', mobileNo: '9818439385' },
    { name: 'BALBIR SAMANA', bloodGroup: 'O-', city: 'Samastipur', mobileNo: '9874430389' },
    { name: 'RAJINDER DHULL', bloodGroup: 'O-', city: 'Samastipur', mobileNo: '9718635160' },
    { name: 'B.M.S.BAKSHI', bloodGroup: 'O-', city: 'Samastipur', mobileNo: '9868460130' },
    { name: 'RAVI NAUTAN', bloodGroup: 'O-', city: 'Samastipur', mobileNo: '9915126643' },
    // Add more O- donors here...
  ];
  
  function searchDonors() {
    const citySelect = document.getElementById('city');
    const bloodGroupSelect = document.getElementById('bloodGroup');
    const selectedCity = citySelect.value;
    const selectedBloodGroup = bloodGroupSelect.value;
    const donorTableBody = document.querySelector('#donorTable tbody');
    donorTableBody.innerHTML = ''; // Clear previous results
  
    donors.forEach(donor => {
      if (
        (selectedCity === '' || donor.city === selectedCity) &&
        (selectedBloodGroup === '' || donor.bloodGroup === selectedBloodGroup)
      ) {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${donor.name}</td>
          <td>   <a href="tel:+91${donor.mobileNo}">Call Me</a></td>
          <td>${donor.bloodGroup}</td>
          <td>${donor.city}</td>  
        `;
        donorTableBody.appendChild(row);
      }
    });
  }
  // Get user's live location (if permitted)
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
  
  function showPosition(position) {
    const locationInput = document.getElementById('location');
    locationInput.value = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
  }
  
  // Request form submission
  const requestForm = document.getElementById('requestForm');
  requestForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Handle form data as needed
    alert('Request submitted successfully!');
    requestForm.reset();
  });
  
  // Call getLocation() to populate the live location field
  getLocation();