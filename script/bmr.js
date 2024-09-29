document.getElementById('bmr-form').addEventListener('submit', function(e) {
            e.preventDefault();
            calculateBMR();
        });

        document.getElementById('height-unit').addEventListener('change', function() {
            document.getElementById('inches').style.display = this.value === 'ft' ? 'block' : 'none';
        });

        function calculateBMR() {
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const age = parseInt(document.getElementById('age').value);
            let weight = parseFloat(document.getElementById('weight').value);
            let height = parseFloat(document.getElementById('height').value);
            const weightUnit = document.getElementById('weight-unit').value;
            const heightUnit = document.getElementById('height-unit').value;
            const activityLevel = parseFloat(document.getElementById('activity-level').value);

            if (weightUnit === 'lbs') {
                weight = weight * 0.453592; // Convert lbs to kg
            }

            if (heightUnit === 'ft') {
                const inches = parseFloat(document.getElementById('inches').value) || 0;
                height = (height * 30.48 + inches * 2.54); // Convert ft and inches to cm
            }

            let bmr;
            if (gender === 'male') {
                bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
            } else {
                bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
            }

            const tdee = bmr * activityLevel;
            
            document.getElementById('bmr-value').textContent = `Your BMR: ${Math.round(bmr)} calories per day`;
            
            const caloricNeeds = document.getElementById('caloric-needs');
            caloricNeeds.innerHTML = `
                <li>To maintain weight: ${Math.round(tdee)} calories per day</li>
                <li>To lose weight (10% deficit): ${Math.round(tdee * 0.9)} calories per day</li>
                <li>To gain weight (10% surplus): ${Math.round(tdee * 1.1)} calories per day</li>
            `;

            const bmrExplanation = document.getElementById('bmr-explanation');
            bmrExplanation.textContent = `Your BMR of ${Math.round(bmr)} calories is the number of calories your body burns at rest. Based on your activity level, your total daily energy expenditure (TDEE) is approximately ${Math.round(tdee)} calories. This is the estimated number of calories you burn each day.`;

            const dietExerciseTips = document.getElementById('diet-exercise-tips');
            dietExerciseTips.innerHTML = `
                <li>To lose weight, aim for a calorie intake below your TDEE. A deficit of 500 calories per day can lead to about 1 pound of weight loss per week.</li>
                <li>To gain weight or build muscle, consume more calories than your TDEE and incorporate strength training.</li>
                <li>For overall health, focus on a balanced diet rich in fruits, vegetables, lean proteins, and whole grains.</li>
                <li>Regular exercise, both cardio and strength training, can help boost your metabolism and improve overall health.</li>
            `;

            document.getElementById('result').style.display = 'block';
        }
        function prepareHealthPlan() {
            window.location.href = 'diet-planner.html';
        }

        function consultDoctor() {
            Calendly.initPopupWidget({url: 'https://calendly.com/careovr/doctor-appointment?background_color=4b0082&text_color=ffd700&primary_color=4169e1'});return false;        }
    