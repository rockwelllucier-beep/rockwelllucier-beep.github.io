document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault()
    const user = document.getElementById('username').value
    const pass = document.getElementById('password').value
    if (user === 'user123' && pass === 'cheesecake') {
        window.location.href = '../../../index.html'
    }else{
        alert('Invalid username or password')
    }
})
