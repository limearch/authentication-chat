document.getElementById('sign-up-link').addEventListener('click', function() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('signup-screen').style.display = 'block';
});

document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('signup-screen').style.display = 'none';
    document.getElementById('login-screen').style.display = 'block';
});

document.getElementById('forget-password-link').addEventListener('click', function() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('forget-password-screen').style.display = 'block';
});

document.getElementById('forget-password-button').addEventListener('click', function() {
    document.getElementById('forget-password-screen').style.display = 'none';
    document.getElementById('reset-password-screen').style.display = 'block';
});
