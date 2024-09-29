  document.addEventListener('DOMContentLoaded', function() {
    const faqContainer = document.getElementById('faqContainer');
    const searchInput = document.getElementById('searchInput');

    const faqData = [
    {
        question: "What is Careovr?",
        answer: "Careovr is a healthcare platform that connects patients with hospitals, doctors, caregivers, and other medical professionals for trusted care. We also provide services like online doctor consultations, appointment bookings, and more."
    },
    {
        question: "How does Careovr work?",
        answer: "Careovr allows users to find healthcare providers, book appointments, and access various health services, all in one place. You can also order medicines, schedule an ambulance, or connect with caregivers through our platform."
    },
    {
        question: "Is Careovr available in all cities?",
        answer: "Careovr is expanding its reach to many cities in India. Currently, our services are available in major cities, and we are working to bring our platform to more locations soon."
    },
    {
        question: "How do I create an account?",
        answer: "You can create an account by clicking on the 'Join' button on our website and filling out the required details. Once registered, you can start using our services."
    },
    {
        question: "Is there a fee to join Careovr?",
        answer: "Creating an account on Careovr is free for patients. However, some services like doctor consultations or caregiving services may have associated fees."
    },
    {
        question: "How do I book an appointment with a doctor?",
        answer: "You can easily book an appointment by searching for a doctor or hospital on our platform, selecting the service, and filling in your details. You can choose between a hospital visit or live consultation."
    },
    {
        question: "Can I book a live consultation?",
        answer: "Yes, Careovr allows you to book live consultations with doctors for quick medical advice. You can consult doctors from the comfort of your home."
    },
    {
        question: "How do I know if a doctor is verified?",
        answer: "All doctors listed on Careovr are verified by our team to ensure that they have the appropriate credentials and qualifications. We only work with trusted healthcare providers."
    },
    {
        question: "How can hospitals benefit from joining Careovr?",
        answer: "Hospitals can list their services on Careovr, expand their online presence, and reach a wider audience. They can also manage appointments and connect with patients more efficiently."
    },
    {
        question: "Can I cancel or reschedule an appointment?",
        answer: "Yes, you can cancel or reschedule an appointment through your account. Be sure to check the cancellation policy for the specific service you have booked."
    },
    {
        question: "How do I order medicines on Careovr?",
        answer: "You can order medicines by visiting the Pharmacy section on Careovr. Select the medicines you need, upload your prescription (if required), and choose delivery options."
    },
    {
        question: "Can I get discounts on medicine orders?",
        answer: "Yes, Careovr offers up to 50% off on medicine orders, and premium users can get an additional 2% cashback."
    },
    {
        question: "How long does it take to get medicines delivered?",
        answer: "Careovr offers fast and secure delivery. The time depends on your location, but we aim to deliver medicines within a few hours or by the next day."
    },
    {
        question: "What is a caregiver, and how can I book one?",
        answer: "Caregivers provide assistance to individuals who need help with daily activities or medical care. You can book a caregiver by visiting our Caregivers section and selecting the service that fits your needs."
    },
    {
        question: "Are the caregivers trained and verified?",
        answer: "Yes, all caregivers on Careovr are trained, experienced, and verified to ensure they provide the best care possible to patients."
    },
    {
        question: "How can I register as a blood donor?",
        answer: "You can register as a blood donor by signing up on the Blood Donor page. Once registered, you can help save lives or receive compensation for your donation."
    },
    {
        question: "Is there a reward for blood donors?",
        answer: "Yes, Careovr offers incentives for blood donors. You can either choose to be rewarded financially or donate blood to help those in need."
    },
    {
        question: "How do I book an ambulance?",
        answer: "Booking an ambulance is simple. Go to the Emergency Ambulance section, enter your location, and the ambulance will arrive quickly to take the patient to the nearest trusted hospital."
    },
    {
        question: "How long does it take for the ambulance to arrive?",
        answer: "Careovr ensures fast ambulance response times. Depending on your location, the ambulance will reach you as quickly as possible."
    },
    {
        question: "Can I choose the hospital to be taken to?",
        answer: "Yes, you can specify the hospital you'd like to be taken to, or we can recommend trusted hospitals near your location for urgent care."
    }
];


    function createFaqItems(data) {
        faqContainer.innerHTML = '';
        data.forEach((item, index) => {
            const faqItem = document.createElement('div');
            faqItem.className = 'faq-item';
            faqItem.innerHTML = `
                <div class="faq-question" data-index="${index}">${item.question}</div>
                <div class="faq-answer">${item.answer}</div>
            `;
            faqContainer.appendChild(faqItem);
        });
        addEventListeners();
    }

    function addEventListeners() {
        const questions = document.querySelectorAll('.faq-question');
        questions.forEach(question => {
            question.addEventListener('click', toggleAnswer);
        });
    }

    function toggleAnswer(e) {
        const question = e.target;
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');

        // Close all other answers
        document.querySelectorAll('.faq-question').forEach(q => {
            if (q !== question) {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('show');
            }
        });

        // Toggle current answer
        question.classList.toggle('active', !isActive);
        answer.classList.toggle('show', !isActive);
    }

    function searchFaq(searchTerm) {
        const filteredData = faqData.filter(item => 
            item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
            item.answer.toLowerCase().includes(searchTerm.toLowerCase())
        );
        createFaqItems(filteredData);
    }

    searchInput.addEventListener('input', (e) => {
        searchFaq(e.target.value);
    });

    // Initial creation of FAQ items
    createFaqItems(faqData);
});