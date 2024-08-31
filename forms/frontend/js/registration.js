document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('newPassword').value;

    fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.text())
    .then(result => {
        if (result === "Registration successful") {
            alert('Registration successful! Please log in.');
            window.location.href = 'login.html';
        } else {
            alert('Registration failed');
        }
    })
    .catch(error => {
        alert('Registration failed');
        console.error('Error:', error);
    });
});
