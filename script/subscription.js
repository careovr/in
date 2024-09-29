const planData = {
            Basic: {
                title: "Basic Plan",
                subtitle: "Essential features for starters",
                prices: { 12: 299, 3: 79, 1: 29 },
                links: { 12: "https://payments.cashfree.com/forms/careovr-basic-annual", 3: "https://payments.cashfree.com/forms/careovr-basic-3m", 1: "https://payments.cashfree.com/forms/careovr-basic-1month" }
            },
            Care: {
                title: "Care Plan",
                subtitle: "Advanced features for professionals",
                prices: { 12: 499, 3: 129, 1: 49 },
                links: { 12: "https://payments.cashfree.com/forms/careovr-prime-annual", 3: "https://payments.cashfree.com/forms/careovr-prime-quarterly", 1: "https://payments.cashfree.com/forms/careovr-prime-monthly" }
            },
            Premium: {
                title: "Premium Plan",
                subtitle: "Ultimate features for power users",
                prices: { 12: 699, 3: 179, 1: 69 },
                links: { 12: "https://payments.cashfree.com/forms/careovr-premium-annual", 3: "https://payments.cashfree.com/forms/careovr-premium-quarterly", 1: "https://payments.cashfree.com/forms/careovr-premium-monthy" }
            }
        };

        function generatePlanContent(planType) {
            const plan = planData[planType];
            const durations = [12, 3, 1];
            let planOptionsHtml = '';

            durations.forEach(duration => {
                planOptionsHtml += `
                    <div class="plan" onclick="selectPlan(this, ${duration}, ${plan.prices[duration]}, '${plan.links[duration]}')">
                        <h3>${duration}</h3>
                        <p>${duration > 1 ? 'months' : 'month'}</p>
                        <p class="price">₹${plan.prices[duration].toFixed(2)}/mo</p>
                    </div>
                `;
            });

            return `
                <h2>${plan.title}</h2>
                <p class="subtitle">${plan.subtitle}</p>
                <div class="plan-options">
                    ${planOptionsHtml}
                </div>
                <a href="${plan.links[3]}" class="btn btn-primary btn-block">Get 3 Month / ₹${plan.prices[3].toFixed(2)}</a>
                <div class="billing-info">
                    <h4>When will I be billed?</h4>
                    <p>Your Account will be charged at the end of your trial period if applicable or immediately.</p>
                </div>
                <div class="auto-renew">
                    <h4>Does My subscription Auto Renew?</h4>
                    <p>Yes, Your subscription will auto renew at any time with in the app store.</p>
                </div>
            `;
        }

        function selectPlan(element, months, price, link) {
            document.querySelectorAll('.plan').forEach(plan => {
                plan.classList.remove('selected');
            });
            element.classList.add('selected');
            const button = document.querySelector('.btn-primary');
            button.textContent = `Get ${months} Month${months > 1 ? 's' : ''} / ₹${price.toFixed(2)}`;
            button.href = link;
        }

        function switchPlan(planType) {
            document.querySelectorAll('.plan-switcher button').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');

            const planContent = document.getElementById('planContent');
            planContent.innerHTML = generatePlanContent(planType);

            // Select the middle (3-month) plan by default
            const plans = planContent.querySelectorAll('.plan');
            selectPlan(plans[1], 3, planData[planType].prices[3], planData[planType].links[3]);
        }

        // Initialize with Basic plan
        switchPlan('Basic');