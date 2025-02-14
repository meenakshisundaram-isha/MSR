// script.js
fetch('coupons.json') // or the correct relative path
    .then(response => response.json())
    .then(jsonData => {
        const vendorSelect = document.getElementById('vendor-select');
        const pocName = document.getElementById('poc-name');
        const pocNumber = document.getElementById('poc-number');
        const couponCode = document.getElementById('coupon-code');
        const maxSeats = document.getElementById('max-seats');

        for (const vendor in jsonData) {
            const option = document.createElement('option');
            option.value = vendor;
            option.text = vendor;
            vendorSelect.appendChild(option);
        }

        vendorSelect.addEventListener('change', () => {
            const selectedVendor = vendorSelect.value;
            const selectedData = jsonData[selectedVendor];

            if (selectedData) {
                pocName.textContent = selectedData['POC Name'] || "";
                pocNumber.textContent = selectedData['POC Number'] || "";
                couponCode.textContent = selectedData['coupon_code'] || "";
                maxSeats.textContent = selectedData['Max Seats'] || "";
            } else {
                pocName.textContent = "";
                pocNumber.textContent = "";
                couponCode.textContent = "";
                maxSeats.textContent = "";
            }
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));