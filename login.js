$(document).ready(){
    const DATABASE_URI = 'http://localhost:3000/user';
    $('#login').click(function(e) {
        e.preventDefaul();
        const username = $('#username').val().trim();
        const password = $('#password').val().trim();

        if (username !== "" && password !== "") {
            fetch(`${DATABASE_URI}`).then(response =>
                response.json()).then(userData => {
                    const user = userData.find(user =>
                    user.username == username)
                    if (!user) return $('#usernameError').html
                    ("Invalid Email");

                    if (user.password != password) return $('#pwError').html("Invalid Password");

                localStorage.setItem('user', JSON.stringify(user))
                window.location = "index.html";
                })
        } else {
            if (username == "") {
                $('#usernameError').html("Invalid Username");
            }
            if (password == "") {
                $('#passwordError').html("Invalid Password");
            }
        }
    })
}
