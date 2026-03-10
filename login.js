console ("Login page loaded successfully." );
// Function to handle login form submission
function handleLogin(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can replace this with actual authentication logic)
    if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect to dashboard or another page
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}