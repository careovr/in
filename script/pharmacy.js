 let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let addresses = JSON.parse(localStorage.getItem('addresses')) || [];

    function addToCart() {
      const medicineName = document.getElementById('medicine-name').value;
      const medicineQty = document.getElementById('medicine-qty').value;
      if (medicineName && medicineQty > 0) {
        cart.push({ name: medicineName, qty: medicineQty });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
        showNotification('Added to Cart');
      }
    }

    function updateCart() {
      const cartItems = document.getElementById('cart-items');
      cartItems.innerHTML = '';
      cart.forEach((item, index) => {
        cartItems.innerHTML += `
          <tr>
            <td>${item.name}</td>
            <td>${item.qty}</td>
            <td><button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button></td>
          </tr>`;
      });
    }

    function removeFromCart(index) {
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCart();
      showNotification('Removed from Cart');
    }

    function showAddressPopup() {
      $('#address-popup').modal('show');
    }

    function saveAddress() {
      const name = document.getElementById('user-name').value;
      const phone = document.getElementById('user-phone').value;
      const city = document.getElementById('user-city').value;
      const pincode = document.getElementById('user-pincode').value;
      const state = document.getElementById('user-state').value;
      const nearby = document.getElementById('user-nearby').value;
      const fullAddress = `${name}, ${phone}, ${city}, ${pincode}, ${state}, ${nearby}`;

      addresses.push(fullAddress);
      localStorage.setItem('addresses', JSON.stringify(addresses));
      $('#address-popup').modal('hide');
      updateAddressDropdown();
      showNotification('Address Added');
    }

    function updateAddressDropdown() {
      const selectAddress = document.getElementById('select-address');
      selectAddress.innerHTML = '';
      addresses.forEach((address, index) => {
        selectAddress.innerHTML += `<option value="${address}">${address}</option>`;
      });
    }

    function showStep(step) {
      document.querySelectorAll('.step').forEach(el => el.classList.remove('step-active'));
      document.querySelector(`.step-${step}`).classList.add('step-active');
      if (step === 3) {
        updateOrderSummary();
      }
    }

    function updateOrderSummary() {
      const summaryItems = document.getElementById('summary-items');
      const summaryAddress = document.getElementById('summary-address');
      const selectedAddress = document.getElementById('select-address').value;

      summaryItems.value = cart.map(item => `${item.name} (Qty: ${item.qty})`).join('\n');
      summaryAddress.value = selectedAddress;
    }

    function togglePrescription(hasPrescription) {
      document.getElementById('prescription-upload').style.display = hasPrescription ? 'block' : 'none';
      document.getElementById('consultation-fee').style.display = hasPrescription ? 'none' : 'block';
    }

    function showNotification(message) {
      alert(message);
    }

    function placeOrder() {
      const summaryItems = document.getElementById('summary-items').value;
      const summaryAddress = document.getElementById('summary-address').value;
      const paymentMethod = document.getElementById('payment-method').value;
      const hasPrescription = document.querySelector('input[name="has-prescription"]:checked').value;

      const lastOrder = {
        items: summaryItems,
        address: summaryAddress
      };
      localStorage.setItem('lastOrder', JSON.stringify(lastOrder));

      // Clear cart
      localStorage.removeItem('cart');
      cart = [];
      updateCart();

      // Show success message
      showNotification('Order placed successfully!');
      document.getElementById('last-summary-items').value = summaryItems;
      document.getElementById('last-summary-address').value = summaryAddress;
      document.getElementById('last-order-summary').style.display = 'block';
      showStep(1);
    }

    // Initial setup
    updateCart();
    updateAddressDropdown();
    if (localStorage.getItem('lastOrder')) {
      const lastOrder = JSON.parse(localStorage.getItem('lastOrder'));
      document.getElementById('last-summary-items').value = lastOrder.items;
      document.getElementById('last-summary-address').value = lastOrder.address;
      document.getElementById('last-order-summary').style.display = 'block';
    }