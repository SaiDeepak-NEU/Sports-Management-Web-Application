function OnLogin() {

    credentials = {
        "cricket@gmail.com": "Cricket",
        "badminton@yahoo.com": "Badminton",
        "football@outlook.com": "Football"
    }

    var username = document.getElementById('username');
    var password = document.getElementById('password').value;

    if (password == credentials[username.value]) {

        window.location.href = "/Home.html";

    } else {
        //alert('Invalid Username or Password');

        const alertPlaceholder = document.getElementById('alertmsg')

        const alert = (message, type) => {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<div class="alert alert-${type} alert-dismissible" role="alert">`,
                `   <div>${message}</div>`,
                '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
                '</div>'
            ].join('')

            alertPlaceholder.append(wrapper)
        }

        alert('Invalid Username or Password!', 'danger');

    }


}

const rmCheck = document.getElementById("rememberMe"),
    emailInput = document.getElementById("username");

if (localStorage.checkbox && localStorage.checkbox !== "") {
    rmCheck.setAttribute("checked", "checked");
    emailInput.value = localStorage.username;
} else {
    rmCheck.removeAttribute("checked");
    emailInput.value = "";
}

function lsRememberMe() {
    if (rmCheck.checked && emailInput.value !== "") {
        localStorage.username = emailInput.value;
        localStorage.checkbox = rmCheck.value;
    } else {
        localStorage.username = "";
        localStorage.checkbox = "";
    }
}