document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/api/login?username=' + username + '&password=' + password, {
        method: 'POST'
    })
    .then(response => response.json())
    .then(success => {
        if (success) {
            window.location.href = 'success.html';
        } else {
            alert('Login failed');
        }
    })
    .catch(error => {
        alert('Login failed');
        console.error('Error:', error);
    });
});
