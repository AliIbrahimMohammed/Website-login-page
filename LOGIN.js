// Get the login button element by its class name
const loginButton = document.querySelector('.button1');

// Add an event listener to the login button
loginButton.addEventListener('click', function(e) {
    // Prevent the form from submitting
    e.preventDefault();

    // Get the values of the username and password fields
    const username = document.querySelector('#Username').value;
    const password = document.querySelector('#Password').value;

    // Get the IP address of the user
    const ipAddress = e.target.ownerDocument.defaultView.location.hostname;

    // Check if the username and password are correct
    if (username === 'User77' && password === '123456789') {
        // Redirect the user to the appropriate page
        window.location.href = `user-page.html?username=${username}&password=${password}&ip_address=${ipAddress}`;
    } else if (username === 'Admin77' && password === '1985127') {
        // Redirect the admin to the appropriate page
        window.location.href = `admin-page.html?username=${username}&password=${password}&ip_address=${ipAddress}`;
    } else {
        // Display an error message
        alert('Invalid username or password');

        // Clear the input fields
        document.querySelector('#Username').value = '';
        document.querySelector('#Password').value = '';
    }
});