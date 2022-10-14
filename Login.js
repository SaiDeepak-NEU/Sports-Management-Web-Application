function OnLogin() {

    credentials = {
        "cricket@gmail.com" : "Cricket",
        "badminton@yahoo.com" : "Badminton",
        "football@outlook.com" : "Football"
    }

    var username = document.getElementById('username');
    var password = document.getElementById('password').value;

    if(password == credentials[username.value] ) {        

    window.location.href = "/Home.html";

    } else {
        alert('Invalid Username or Password');
    }


}