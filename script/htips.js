// Health Tips Configuration and Management
const HEALTH_TIPS_CONFIG = {
    storageKey: 'healthTipsDailySelection',
    cardsPerDay: 5,
    allTips: [
      {
        icon: 'fas fa-tint',
        title: 'Stay Hydrated',
        text: 'Drink at least 8 glasses of water daily to maintain proper hydration and support bodily functions.'
      },
      {
        icon: 'fas fa-apple-alt',
        title: 'Eat Nutrient-Rich Foods',
        text: 'Incorporate fruits, vegetables, and whole grains into your diet to maintain good health and boost immunity.'
      },
      {
        icon: 'fas fa-walking',
        title: 'Stay Active',
        text: 'Engage in at least 30 minutes of physical activity daily to keep your heart healthy and improve mental well-being.'
      },
      {
        icon: 'fas fa-bed',
        title: 'Get Enough Sleep',
        text: 'Aim for 7-8 hours of sleep each night to help your body recover and maintain a strong immune system.'
      },
      {
        icon: 'fas fa-brain',
        title: 'Manage Stress',
        text: 'Practice relaxation techniques like meditation or deep breathing to manage stress and improve your mental health.'
      },
      {
        icon: 'fas fa-smile',
        title: 'Maintain Mental Well-being',
        text: 'Take time for activities that bring you joy, socialize with loved ones, and seek support when needed.'
      },
      {
        icon: 'fas fa-dumbbell',
        title: 'Strength Training',
        text: 'Incorporate resistance exercises 2-3 times per week to build muscle, improve metabolism, and strengthen bones.'
      },
      {
        icon: 'fas fa-utensils',
        title: 'Practice Portion Control',
        text: 'Monitor your serving sizes to maintain a healthy weight and prevent overeating, which leads to better digestion.'
      },
      {
        icon: 'fas fa-sun',
        title: 'Get Sunlight Exposure',
        text: 'Spend 10-30 minutes daily in sunlight to boost vitamin D production and improve your mood and energy levels.'
      },
      {
        icon: 'fas fa-leaf',
        title: 'Reduce Sugar Intake',
        text: 'Limit processed sugars and refined carbohydrates to prevent energy crashes and reduce disease risk.'
      },
      {
        icon: 'fas fa-heartbeat',
        title: 'Monitor Heart Health',
        text: 'Check your blood pressure and cholesterol levels regularly, and discuss results with your healthcare provider.'
      },
      {
        icon: 'fas fa-smoking-ban',
        title: 'Avoid Smoking',
        text: 'Quitting smoking dramatically improves lung health, reduces disease risk, and extends your lifespan significantly.'
      },
      {
        icon: 'fas fa-wine-glass-alt',
        title: 'Limit Alcohol Consumption',
        text: 'Drink alcohol in moderation to protect your liver, heart, and overall health. Follow recommended guidelines.'
      },
      {
        icon: 'fas fa-hands-wash',
        title: 'Maintain Good Hygiene',
        text: 'Wash your hands regularly, especially before eating, to prevent the spread of infections and diseases.'
      },
      {
        icon: 'fas fa-teeth',
        title: 'Practice Dental Care',
        text: 'Brush twice daily, floss regularly, and visit your dentist for checkups to maintain oral health and prevent cavities.'
      },
      {
        icon: 'fas fa-eye',
        title: 'Protect Your Eyes',
        text: 'Take breaks from screens every 20 minutes, use proper lighting, and wear UV-protective sunglasses outdoors.'
      },
      {
        icon: 'fas fa-book',
        title: 'Keep Your Mind Active',
        text: 'Engage in mental exercises like reading, puzzles, or learning new skills to maintain cognitive function and memory.'
      },
      {
        icon: 'fas fa-friends',
        title: 'Build Social Connections',
        text: 'Spend quality time with friends and family to reduce stress, improve mental health, and increase longevity.'
      },
      {
        icon: 'fas fa-stethoscope',
        title: 'Schedule Regular Checkups',
        text: 'Visit your doctor annually for preventive care and health screenings to catch issues early.'
      },
      {
        icon: 'fas fa-running',
        title: 'Try Cardio Exercises',
        text: 'Incorporate running, cycling, or swimming for 150 minutes weekly to improve cardiovascular health and endurance.'
      },
      {
        icon: 'fas fa-dumbbell',
        title: 'Practice Yoga or Stretching',
        text: 'Improve flexibility, balance, and body awareness through regular yoga or stretching routines daily.'
      },
      {
        icon: 'fas fa-pill',
        title: 'Take Your Medications',
        text: 'Follow your prescribed medication schedule consistently to manage chronic conditions and maintain optimal health.'
      },
      {
        icon: 'fas fa-temperature-high',
        title: 'Stay Aware of Your Body',
        text: 'Pay attention to changes in your body and report unusual symptoms to your healthcare provider promptly.'
      },
      {
        icon: 'fas fa-water',
        title: 'Eat More Fiber',
        text: 'Include fiber-rich foods like beans, whole grains, and vegetables to improve digestion and reduce disease risk.'
      },
      {
        icon: 'fas fa-moon',
        title: 'Maintain Sleep Schedule',
        text: 'Go to bed and wake up at consistent times to regulate your body clock and improve sleep quality.'
      }
    ]
  };
  
  class HealthTipsManager {
    constructor() {
      this.container = document.getElementById('healthTipsCardsContainer');
      this.selectedTips = this.getOrCreateDailyTips();
    }
  
    /**
     * Get today's date in YYYY-MM-DD format
     */
    getTodayDate() {
      const today = new Date();
      return today.toISOString().split('T')[0];
    }
  
    /**
     * Get or create daily tips selection
     */
    getOrCreateDailyTips() {
      const stored = localStorage.getItem(HEALTH_TIPS_CONFIG.storageKey);
      const today = this.getTodayDate();
  
      if (stored) {
        const data = JSON.parse(stored);
        // If it's a new day, generate new selection
        if (data.date !== today) {
          return this.generateNewDailyTips(today);
        }
        return data.tips;
      }
  
      // No stored data, create new selection
      return this.generateNewDailyTips(today);
    }
  
    /**
     * Generate new random daily tips and store them
     */
    generateNewDailyTips(date) {
      const shuffled = this.shuffleArray([...HEALTH_TIPS_CONFIG.allTips]);
      const selected = shuffled.slice(0, HEALTH_TIPS_CONFIG.cardsPerDay);
  
      localStorage.setItem(
        HEALTH_TIPS_CONFIG.storageKey,
        JSON.stringify({
          date: date,
          tips: selected
        })
      );
  
      return selected;
    }
  
    /**
     * Fisher-Yates shuffle algorithm
     */
    shuffleArray(array) {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    }
  
    /**
     * Create a card HTML element
     */
    createCardElement(tip) {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <div class="card-body text-center">
          <div class="health-tip-icon"><i class="${tip.icon}"></i></div>
          <h5 class="card-title">${tip.title}</h5>
          <p class="card-text">${tip.text}</p>
        </div>
      `;
      return card;
    }
  
    /**
     * Render all selected cards to the container
     */
    renderCards() {
      // Clear existing cards
      this.container.innerHTML = '';
  
      // Create and append cards
      this.selectedTips.forEach(tip => {
        const cardElement = this.createCardElement(tip);
        this.container.appendChild(cardElement);
      });
    }
  
    /**
     * Initialize the health tips manager
     */
    init() {
      if (this.container) {
        this.renderCards();
      }
    }
  }
  
  // Initialize when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    const healthTipsManager = new HealthTipsManager();
    healthTipsManager.init();
  });
  