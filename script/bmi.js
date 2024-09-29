 document.getElementById('bmi-form').addEventListener('submit', function(e) {
            e.preventDefault();
            calculateBMI();
        });

        document.getElementById('height-unit').addEventListener('change', function() {
            document.getElementById('inches').style.display = this.value === 'ft' ? 'block' : 'none';
        });

        function calculateBMI() {
            let weight = parseFloat(document.getElementById('weight').value);
            let height = parseFloat(document.getElementById('height').value);
            const weightUnit = document.getElementById('weight-unit').value;
            const heightUnit = document.getElementById('height-unit').value;

            if (weightUnit === 'lbs') {
                weight = weight * 0.453592; // Convert lbs to kg
            }

            if (heightUnit === 'ft') {
                const inches = parseFloat(document.getElementById('inches').value) || 0;
                height = (height * 30.48 + inches * 2.54) / 100; // Convert ft and inches to meters
            } else {
                height = height / 100; // Convert cm to meters
            }

            const bmi = weight / (height * height);
            
            document.getElementById('bmi-value').textContent = `Your BMI: ${bmi.toFixed(1)}`;
            
            let category, implications;
            if (bmi < 18.5) {
                category = "Underweight";
                implications = "Being underweight can be associated with certain health risks. Consider consulting a healthcare professional about achieving a healthy weight through proper nutrition.";
            } else if (bmi < 25) {
                category = "Normal weight";
                implications = "Your BMI falls within the normal weight range. Maintain a balanced diet and regular physical activity to stay healthy.";
            } else if (bmi < 30) {
                category = "Overweight";
                implications = "Being overweight may increase your risk of certain health conditions. Consider making lifestyle changes and consult a healthcare professional for personalized advice.";
            } else {
                category = "Obese";
                implications = "Obesity is associated with increased health risks. It's recommended to consult a healthcare professional for a comprehensive health assessment and weight management strategies.";
            }
            
            document.getElementById('bmi-category').textContent = `Category: ${category}`;
            document.getElementById('bmi-implications').textContent = implications;
            document.getElementById('result').style.display = 'block';

            // Position BMI marker
            const markerPosition = ((bmi - 15) / 25) * 100;
            document.getElementById('bmi-marker').style.left = `${Math.min(Math.max(markerPosition, 0), 100)}%`;
        }

        function prepareHealthPlan() {
            window.location.href = 'diet-planner.html';
        }

        function consultDoctor() {
            Calendly.initPopupWidget({url: 'https://calendly.com/careovr/doctor-appointment?background_color=4b0082&text_color=ffd700&primary_color=4169e1'});return false;        }
    