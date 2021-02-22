//drop down menu
var close = document.querySelector("#close")
var open = document.querySelector("#open")
var navv = document.querySelector("#navv")
function openn(e) {
    navv.style.display = "flex"
    open.style.display = "none"
    close.style.display = "inline"
}
function closee() {
    navv.style.display = "none"
    open.style.display = "inline"
    close.style.display = "none"
}

var user = document.getElementById("user");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");
    var alert_it = document.getElementById("alert-it");
    var alert_name = document.getElementById("alert-name");
    var alert_email = document.getElementById("alert-email");
    var alert_subject = document.getElementById("alert-subject");
    var alert_message = document.getElementById("alert-message");





function show_alert() {
    alert_it.style.display = "block";
}
function hide_alert() {
    alert_it.style.display = "none";
}

function V_name(user) {
    var name_reg = /^[a-z ,.'-]+$/i;
    if (name_reg.test(user.value)) {
        return true;
    }
    else {
        return false;
    }
}
function V_email(email){
    var email_reg=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email_reg.test(email.value)) {
        return true;
    }
    else {
        console.log("not valid email");
        return false;
    }
}
function V_subject(subject) {
    if (subject.value.length==0) {
        return false;
    }
    else {
        return true;
    }
}
function V_message(message) {
    if (message.value.length==0) {
        return false;
    }
    else {
        return true;
    }
}

function submit_it() {
    

    if(V_name(user) && V_email(email) && V_subject(subject) && V_message(message)){
        alert_name.innerHTML=user.value;
        alert_email.innerHTML=email.value;
        alert_subject.innerHTML=subject.value;
        alert_message.innerHTML=message.value;
        show_alert();
    }
    else{
        console.log("sth is wrong");
    }
}