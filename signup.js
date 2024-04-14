document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    
    var username = document.getElementById('register-username').value;
    var email = document.getElementById('register-email').value;
    var password = document.getElementById('register-password').value;
    var phone = document.getElementById('register-phone').value;

    
    window.location.href = 'login.html';
});

