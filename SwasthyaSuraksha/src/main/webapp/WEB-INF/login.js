document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Send login credentials to server for authentication
        fetch('LoginServlet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Login failed');
            }
        })
        .then(data => {
            // Handle successful login
            console.log('Login successful:', data);
            // Redirect to dashboard or perform other actions
        })
        .catch(error => {
            // Handle login error
            console.error('Login error:', error.message);
            // Display error message to the user
        });
    });
});
