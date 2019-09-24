// Listeners 
document.getElementById('login').addEventListener('click', login);

// Functions
function login(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username == "user" && password == "pass"){
        alert ("AAAAAAAAAA!!!!!!")
    }
    else if(username != "user" && password == "pass"){
        alert ("Username is Wrong")
    }
    else if(username == "user" && password != "pass"){
        alert ("Password is Wrong")
    }
    else if(username != "user" && password != "pass"){
        alert ("WRONG!!!!!")
    }

}