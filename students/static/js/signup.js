var nam = document.getElementById("name");
var email = document.getElementById("email");
var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");
var ph = document.getElementById("ph");



function validname() {
   
    var fn = nam.value;
    if (isNaN(fn)) {
        nam.className = "success";
        document.getElementById("text").innerHTML = "";
        
    } else {
        nam.className = "error";
        document.getElementById("signup").disabled = true;
        document.getElementById("text").innerHTML = "please enter name ";
    }
}
function validemail() {
    var mail = email.value;
    var re = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (re.test(mail)) {
        email.className = "success";
        document.getElementById("text").innerHTML = "";
    } else {
        email.className = "error";
        document.getElementById("signup").disabled = true;
        document.getElementById("text").innerHTML = "please enter the valid email";

    }
}

function validphone() {
    var num = ph.value;
    if (isNaN(num)) {
        ph.className = "error";
        document.getElementById("signup").disabled = true;
        document.getElementById("text").innerHTML = "please enter the valid phone number";
    } else {
        var numl = num.length;
        if (numl == 10) {
            ph.className = "success";
            document.getElementById("text").innerHTML = "";
        } else {
            ph.className = "error";
            document.getElementById("signup").disabled = true;
            document.getElementById("text").innerHTML = "please enter the valid phone number";
        }
    }
}
function validpassword  () {
    var passl = pass1.value.length;
    if (passl >= 8 & passl <= 16) {
        pass1.className = "success";
        document.getElementById("text").innerHTML = "";
    } else {
        pass1.className = "error";
        document.getElementById("signup").disabled = true;
        document.getElementById("text").innerHTML = "Password length must be greater than 8 characters.and not excced 15 ";
    }
}

function validpassconform() {
    var pass = pass1.value;
    var passc = pass2.value;
    if (pass == passc) {
        pass2.className = "success";
        document.getElementById("text").innerHTML = "";
        document.getElementById("signup").disabled = false;
      
    } else {
        document.getElementById("signup").disabled = true;
        pass2.className = "error";
        document.getElementById("text").innerHTML = "Password not match";
    }
}

document.getElementById("signup").disabled = true;