confirm("clue, Your P : R****E****")

function checkPassword() {
    var userPass = document.getElementById('UserPass').value;
    var correctPassword = '10000100010';

    if(userPass == correctPassword) {
        window.location.href = 'Beranda/home.html';
    } else {
        alert('Passwords do not match please try again');
    }
}

document.getElementById('Open-btn').addEventListener('click', checkPassword);
