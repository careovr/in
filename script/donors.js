// Sample donor data
        
let form = document.querySelector("#blood-form");
                        form.addEventListener('submit', (e) => {
                            e.preventDefault();
                            document.querySelector("#sub").value = "Submitting..";
                            let data = new FormData(form);
                            fetch('https://script.google.com/macros/s/AKfycbxaC3B1eJd90RCwgHmyf0oTfWL8CwfLKfBYRY1t9hRSgxeHDBFNPWz5n_0sEt9tAyJdWQ/exec', {
                                method: "POST",
                                body: data
                            })
                            .then(res => res.text())
                            .then(data => {
                                document.querySelector("#sub").value = "Submit";
                                document.querySelector("#success-popup").style.display = 'flex';
                            });
                        });
                        
const donors = [
    { name: 'SUSHANT KUMAR', bloodGroup: 'A+', city: 'Samastipur', phone: '+919910736534' },
    { name: 'SUJIT GHOSH', bloodGroup: 'A+', city: 'Samastipur', phone: '+918510336699' },
    { name: 'VIJAY KUMAR', bloodGroup: 'A+', city: 'Samastipur', phone: '+919871206854' },
    { name: 'VINOD KUMAR', bloodGroup: 'A+', city: 'Samastipur', phone: '+919810079967' },
    { name: 'AMIT KUMAR', bloodGroup: 'A+', city: 'Samastipur', phone: '+918010179958' },
    { name: 'RAMVEER SINGH', bloodGroup: 'A+', city: 'Samastipur', phone: '+919911575982' },
    { name: 'RAMESH KUMAR', bloodGroup: 'A+', city: 'Samastipur', phone: '+919811501887' },
    { name: 'SURESH PRASAD', bloodGroup: 'A+', city: 'Samastipur', phone: '+919810441769' },
    { name: 'VIKAS KUMAR', bloodGroup: 'A+', city: 'Samastipur', phone: '+919810625010' },
    { name: 'VIVEK KUMAR', bloodGroup: 'A+', city: 'Samastipur', phone: '+919311409052' },
    { name: 'PRIYANKA SINGH', bloodGroup: 'A-', city: 'Samastipur', phone: '+919711027343' },
    { name: 'MANOJ KUMAR', bloodGroup: 'B+', city: 'Samastipur', phone: '+919818489565' },
    { name: 'SANJAY KUMAR SHARMA', bloodGroup: 'B+', city: 'Samastipur', phone: '+919810200458' },
    { name: 'RAVI SHANKAR', bloodGroup: 'B+', city: 'Samastipur', phone: '+919818604667' },
    { name: 'RASHID AHAMAD', bloodGroup: 'B+', city: 'Samastipur', phone: '+919810896482' },
    { name: 'PREM SINGH', bloodGroup: 'B+', city: 'Samastipur', phone: '+919811683431' },
    { name: 'DINESH KUMAR', bloodGroup: 'B+', city: 'Samastipur', phone: '+919810911184' },
    { name: 'SAURABH SHARMA', bloodGroup: 'B+', city: 'Samastipur', phone: '+919868685657' },
    { name: 'VINOD KUMAR', bloodGroup: 'B+', city: 'Samastipur', phone: '+919868359325' },
    { name: 'S N RAJPUT', bloodGroup: 'B+', city: 'Samastipur', phone: '+919868494473' },
    { name: 'MD. SARFARAZ', bloodGroup: 'B+', city: 'Samastipur', phone: '+918750005588' },
    { name: 'SURESH YADAV', bloodGroup: 'B-', city: 'Samastipur', phone: '+918130007460' },
    { name: 'PRAVEEN KUMAR', bloodGroup: 'B-', city: 'Samastipur', phone: '+919718648093' },
    { name: 'SUNNY CHUG', bloodGroup: 'B-', city: 'Samastipur', phone: '+917838381460' },
    { name: 'SANDEEP YADAV', bloodGroup: 'B-', city: 'Samastipur', phone: '+919718024380' },
    { name: 'KRISHAN KUMAR', bloodGroup: 'B-', city: 'Samastipur', phone: '+919718004443' },
    { name: 'DEEPAK SINGH', bloodGroup: 'AB+', city: 'Samastipur', phone: '+918860911823' },
    { name: 'VED', bloodGroup: 'AB+', city: 'Samastipur', phone: '+917668973552' },
    { name: 'ANURAG SNGH', bloodGroup: 'AB+', city: 'Samastipur', phone: '+917668573500' },
    { name: 'SURENDRA KUMAR SINGH', bloodGroup: 'AB+', city: 'Samastipur', phone: '+919711676676' },
    { name: 'AJIT KUMAR', bloodGroup: 'AB+', city: 'Samastipur', phone: '+917503870706' },
    { name: 'POOJA', bloodGroup: 'AB-', city: 'Samastipur', phone: '+918800334894' },
    { name: 'RAJESH', bloodGroup: 'O+', city: 'Samastipur', phone: '+919911481229' },
    { name: 'MUKESH KUMAR', bloodGroup: 'O+', city: 'Samastipur', phone: '+919891077679' },
    { name: 'RAHUL SHARMA', bloodGroup: 'O+', city: 'Samastipur', phone: '+918447430397' },
    { name: 'SANDEEP KUMAR', bloodGroup: 'O+', city: 'Samastipur', phone: '+918447560337' },
    { name: 'RAVINDER SINGH', bloodGroup: 'O+', city: 'Samastipur', phone: '+918130915075' },
    { name: 'ANUJ KUMAR', bloodGroup: 'O+', city: 'Samastipur', phone: '+919313073708' },
    { name: 'JOGINDER SHARMA', bloodGroup: 'O+', city: 'Samastipur', phone: '+919718261639' },
    { name: 'PRAVEEN KUMAR', bloodGroup: 'O+', city: 'Samastipur', phone: '+919718796933' },
    { name: 'SONU MALL', bloodGroup: 'O+', city: 'Samastipur', phone: '+919810909244' },
    { name: 'VIKASH KUMAR SAHA', bloodGroup: 'O+', city: 'Samastipur', phone: '+918750740003' },
    { name: 'LT GEN R S SUJLANA', bloodGroup: 'O-', city: 'Samastipur', phone: '+919818439385' },
    { name: 'BALBIR SAMANA', bloodGroup: 'O-', city: 'Samastipur', phone: '+919874430389' },
    { name: 'RAJINDER DHULL', bloodGroup: 'O-', city: 'Samastipur', phone: '+919718635160' },
    { name: 'B.M.S.BAKSHI', bloodGroup: 'O-', city: 'Samastipur', phone: '+919868460130' },
    { name: 'RAVI NAUTAN', bloodGroup: 'O-', city: 'Samastipur', phone: '+919915126643' },
        ];

        function searchDonors() {
            const bloodGroup = document.getElementById("bloodGroup").value;
            const city = document.getElementById("city").value.toLowerCase();
            const results = donors.filter(donor => 
                (bloodGroup === "" || donor.bloodGroup === bloodGroup) &&
                (city === "" || donor.city.toLowerCase().includes(city))
            );
            displayResults(results);
        }

        function displayResults(results) {
            const resultsContainer = document.getElementById("donorResults");
            resultsContainer.innerHTML = "";
            if (results.length === 0) {
                resultsContainer.innerHTML = "<p class='text-center'>No donors found. Try different search criteria.</p>";
                return;
            }
            results.forEach(donor => {
                const donorCard = `
                    <div class="col-md-6 mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${donor.name}</h5>
                                <div class="donor-info">
                                    <i class="fas fa-tint"></i>
                                    <span>Blood Group: ${donor.bloodGroup}</span>
                                </div>
                                <div class="donor-info">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>City: ${donor.city}</span>
                                </div>
                                <a href="tel:${donor.phone}" class="btn btn-primary w-100"><i class="fas fa-phone me-2"></i>Call Donor</a>
                            </div>
                        </div>
                    </div>
                `;
                resultsContainer.innerHTML += donorCard;
            });
        }

        // Get user's location and city
        function getUserLocationAndCity(cityFieldId = 'city') {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    document.getElementById("location").value = `${lat}, ${lon}`;
                    
                    // Use reverse geocoding to get the city
                    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
                        .then(response => response.json())
                        .then(data => {
                            const city = data.address.city || data.address.town || data.address.village || '';
                            document.getElementById(cityFieldId).value = city;
                        })
                        .catch(error => console.error('Error:', error));
                });
            } else {
                console.log("Geolocation is not available in your browser.");
            }
        }

        // Auto-detect user's blood group (this is a mock function, as it's not possible to detect blood group automatically)
        function mockDetectBloodGroup() {
            const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
            const randomBloodGroup = bloodGroups[Math.floor(Math.random() * bloodGroups.length)];
            document.getElementById("bloodGroup").value = randomBloodGroup;
            document.getElementById("bloodGroupPremium").value = randomBloodGroup;
        }

        // Call these functions when the page loads
        window.onload = function() {
            getUserLocationAndCity();
            mockDetectBloodGroup();
        };

        // Call getUserLocationAndCity when the modal is shown
        document.getElementById('premiumBloodModal').addEventListener('shown.bs.modal', () => getUserLocationAndCity('cityPremium'));

        document.getElementById("premiumBloodForm").addEventListener("submit", function(e) {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const phone = document.getElementById("phone").value;
            const city = document.getElementById("cityPremium").value;
            const bloodGroup = document.getElementById("bloodGroupPremium").value;
            const location = document.getElementById("location").value;

            // Here you would typically send this data to your server
            console.log("Premium Blood Request:", { name, phone, city, bloodGroup, location });

            // Close the modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('premiumBloodModal'));
            modal.hide();

            // Clear the form
            e.target.reset();
        });