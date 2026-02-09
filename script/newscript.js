const menuBtn = document.querySelector('.menu-btn');
        const closeBtn = document.querySelector('.close-btn');
        const sideNavbar = document.querySelector('.side-navbar');
        const emergencyBtn = document.querySelector('.emergency-btn');
        const emergencyMenu = document.querySelector('.emergency-menu');
        const profilePic = document.querySelector('.profile-pic');
        const profileMenu = document.querySelector('.profile-menu');

        menuBtn.addEventListener('click', () => {
            sideNavbar.classList.toggle('open');
        });

        closeBtn.addEventListener('click', () => {
            sideNavbar.classList.remove('open');
        });

        // emergencyBtn.addEventListener('click', (e) => {
        //     e.stopPropagation();
        //     emergencyMenu.classList.toggle('open');
        //     profileMenu.classList.remove('open');
        // });

        profilePic.addEventListener('click', (e) => {
            e.stopPropagation();
            profileMenu.classList.toggle('open');
            // emergencyMenu.classList.remove('open');
        });

        document.body.addEventListener('click', () => {
            // emergencyMenu.classList.remove('open');
            profileMenu.classList.remove('open');
        });

        // emergencyMenu.addEventListener('click', (e) => {
        //     e.stopPropagation();
        // });

        profileMenu.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        // Add smooth scroll behavior to footer links
        document.querySelectorAll('.careovr-footer a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        document.addEventListener('DOMContentLoaded', function() {
            const buttons = document.querySelectorAll('.footer-button');
            
            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    buttons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        });





         // Code for Banner
         document.addEventListener('DOMContentLoaded', function() {
            const sliders = document.querySelectorAll('.banner-slider');
            
            sliders.forEach(slider => {
                const container = slider.querySelector('.banner-container');
                const slides = slider.querySelectorAll('.banner-slide');
                const prevBtn = slider.querySelector('#prevBtn');
                const nextBtn = slider.querySelector('#nextBtn');
                let currentIndex = 0;
                let slideInterval;
        
                function showSlide(index) {
                    container.style.transform = `translateX(-${index * 100}%)`;
                }
        
                function nextSlide() {
                    currentIndex = (currentIndex + 1) % slides.length;
                    showSlide(currentIndex);
                }
        
                function prevSlide() {
                    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                    showSlide(currentIndex);
                }
        
                function startAutoSlide() {
                    slideInterval = setInterval(nextSlide, 3000);
                }
        
                function resetInterval() {
                    clearInterval(slideInterval);
                    startAutoSlide();
                }
        
                nextBtn.addEventListener('click', () => {
                    nextSlide();
                    resetInterval();
                });
        
                prevBtn.addEventListener('click', () => {
                    prevSlide();
                    resetInterval();
                });
        
                startAutoSlide();
            });
        });
document.addEventListener('DOMContentLoaded', function() {
            const loadingOverlay = document.getElementById('loading-overlay');
            const externalLinks = document.querySelectorAll('.none-link');
            let navigationTimeout;

            function showLoader() {
                loadingOverlay.classList.add('active');
                // Automatically hide loader after 5 seconds if navigation doesn't occur
                navigationTimeout = setTimeout(hideLoader, 5000);
            }

            function hideLoader() {
                loadingOverlay.classList.remove('active');
                if (navigationTimeout) {
                    clearTimeout(navigationTimeout);
                }
            }

            // Show loading overlay immediately when the script runs
            showLoader();

            // Hide loading overlay when the page finishes loading
            window.addEventListener('load', hideLoader);

            // Show loading overlay when clicking external links
            externalLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    if (!link.getAttribute('href').startsWith('tel:')) {
                        e.preventDefault();
                        const href = this.getAttribute('href');
                        showLoader();
                        
                        // Navigate to the new page
                        setTimeout(() => {
                            window.location.href = href;
                        }, 1000); // Adjust the delay as needed
                    }
                });
            });

            // Handle page visibility changes
            document.addEventListener('visibilitychange', function() {
                if (!document.hidden) {
                    hideLoader();
                }
            });

            // Handle page unload
            window.addEventListener('beforeunload', showLoader);

            // Handle page load and back button navigation
            window.addEventListener('pageshow', function(event) {
                if (event.persisted) {
                    hideLoader();
                }
            });

            // Handle navigation cancellation
            window.addEventListener('popstate', hideLoader);
        });

 // Service worker script
 self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
    });
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('../script/service-worker.js')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    }
// Code ended for ServiceWorker 

    document.addEventListener('DOMContentLoaded', function() {
        const accordionButtons = document.querySelectorAll('.accordion-button');
    
        accordionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                
                if (!isExpanded) {
                    this.classList.add('active-accordion');
                } else {
                    this.classList.remove('active-accordion');
                }
            });
        });
    });
    // Code For chatbot
    window.embeddedChatbotConfig = {
        chatbotId: "PgxNyy5vQs2kT2xN7O7A9",
        domain: "www.chatbase.co"
        }
