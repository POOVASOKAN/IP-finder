function getPublicIPAddress() {
    const resultDiv = document.getElementById('result');

    //! Fetching the public IP address using the ipify API
    fetch('https://api.ipify.org?format=json')
        .then(response => {
            if (!response.ok) {
                //! Log the error message to the console
                console.error(`Request failed with status ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const ipAddress = data.ip;
            resultDiv.textContent = `Your public IP address is: ${ipAddress}`;
        })
        .catch(error => {
            //! Log any network or other errors to the console
            console.error('Error fetching public IP address:', error);
            resultDiv.textContent = 'Unable to fetch the public IP address.';
        });
}

function clearResult() {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';

    //!Clear any error messages from the console
    console.clear();
}