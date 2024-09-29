const jobs = [
    {
      title: 'Service Request Manager',
      department: 'Operations',
      description: 'Manage user requests for services, ensure timely completion and delivery of services, and send payment links to users. This role involves coordinating with different departments to meet user needs efficiently.',
      requirements: ['Strong communication skills', 'Experience in customer service', 'Attention to detail', 'Ability to manage multiple tasks'],
    },
    {
      title: 'Emergency Response Coordinator',
      department: 'Emergency Services',
      description: 'Handle emergency requests, such as ambulance bookings, and ensure fast and efficient response. You will connect ambulances to users and ensure timely arrival. This role also involves contacting blood donors in emergencies and managing brokerage fees.',
      requirements: ['Experience in emergency services or dispatch', 'Strong organizational skills', 'Ability to work under pressure', 'Good communication skills'],
    },
    {
      title: 'Backend Developer',
      department: 'Engineering',
      description: 'Develop and maintain backend systems for the healthcare platform. This role requires strong knowledge of backend technologies, databases, and server-side development.',
      requirements: ['Proficiency in programming languages (e.g., Node.js, Python, Ruby)', 'Experience with databases (e.g., SQL, NoSQL)', 'Understanding of server architecture', 'Strong problem-solving skills'],
    },
    {
      title: 'Customer Support Agent',
      department: 'Customer Support',
      description: 'Assist customers by resolving their inquiries, providing information about services, and ensuring a smooth user experience. You will handle customer questions and provide support via chat, email, and phone.',
      requirements: ['Strong communication skills', 'Experience in customer support or service roles', 'Ability to resolve conflicts', 'Multitasking capabilities'],
    },
    {
      title: 'Caregiver',
      department: 'Caregiver Services',
      description: 'Provide caregiving services for elderly or recovering patients. You will help with daily care, medical assistance, and ensure the well-being of the patient.',
      requirements: ['Experience in caregiving or healthcare', 'Compassion and patience', 'Ability to handle physical tasks', 'Strong interpersonal skills'],
    },
    {
        title: 'Live-In Caregiver',
        department: 'Caregiver Services',
        description: 'Provide 24/7 care for patients in their homes. Responsibilities include assisting with daily activities, medical care, and ensuring the well-being of the patient. This role requires full-time live-in arrangements.',
        requirements: ['Experience in caregiving', 'Patience and compassion', 'Medical training or certification preferred', 'Strong interpersonal skills'],
      },
    {
        title: 'Blood Donor Network Manager',
        department: 'Emergency Services',
        description: 'Manage and expand the network of blood donors on the platform. You will coordinate between donors and patients, ensure timely responses to emergencies, and maintain communication with donors for quick availability.',
        requirements: ['Experience in healthcare or blood donor management', 'Strong organizational skills', 'Ability to work under pressure', 'Excellent communication and relationship-building skills'],
      },
  ];
  

    
        function renderJobs(jobsToRender) {
            const jobList = document.getElementById('job-list');
            jobList.innerHTML = '';
            jobsToRender.forEach(job => {
                const jobCard = document.createElement('div');
                jobCard.className = 'card h-100';
                jobCard.innerHTML = `
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${job.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                            <i class="fas fa-building me-2"></i>${job.department}
                        </h6>
                        <p class="card-text flex-grow-1">${job.description}</p>
                        <p><strong>Requirements</strong></p>
                        <p class="card-text flex-grow-1">${job.requirements}</p>
                        <button class="btn btn-primary mt-auto apply-btn" data-job-title="${job.title}">
                            <i class="fas fa-paper-plane me-2"></i>Apply Now
                        </button>
                    </div>
                `;
                jobList.appendChild(jobCard);
            });

            // Add event listeners to apply buttons
            document.querySelectorAll('.apply-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const jobTitle = this.getAttribute('data-job-title');
                    document.getElementById('jobTitle').textContent = jobTitle;
                    document.getElementById('applyingFor').value = jobTitle;
                    const modal = new bootstrap.Modal(document.getElementById('applicationModal'));
                    modal.show();
                });
            });
        }

        // Initial render
        renderJobs(jobs);

        // Search functionality
        document.getElementById('job-search').addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const filteredJobs = jobs.filter(job => 
                job.title.toLowerCase().includes(searchTerm) || 
                job.description.toLowerCase().includes(searchTerm)
            );
            renderJobs(filteredJobs);
        });

        // Filter functionality
        document.getElementById('job-filter').addEventListener('change', function() {
            const filterTerm = this.value;
            const filteredJobs = filterTerm ? jobs.filter(job => job.department === filterTerm) : jobs;
            renderJobs(filteredJobs);
        });

        

        // Smooth scrolling for navigation links
        document.querySelectorAll('a.nav-link').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
                // Close the offcanvas menu on mobile if it's open
                const offcanvasElement = document.querySelector('#navOffcanvas');
                if (offcanvasElement) {
                    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
                    if (offcanvas) {
                        offcanvas.hide();
                    }
                }
            });
        });