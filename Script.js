

function waris() {

    var name =
        document.forms.RegForm.name.value;
    var email =
        document.forms.RegForm.email.value;
    var phone =
        document.forms.RegForm.phone.value;
    var message =
        document.forms.RegForm.message.value;
    var regemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.								 // Javascript reGex for Phone Number validation.
    var regname = /\d+$/g;								 // Javascript reGex for Name validation

    if (name == "" || regname.test(name)) {
        window.alert("Please enter your name properly.");
        name.focus();
        return false;
    }

    if (message == "") {
        window.alert("Please enter Message.");
        message.focus();
        return false;
    }

    if (email == "" || !regemail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (phone == "") {
        alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }


    return true;
}

function mouseoverevent() {
    alert("Enter your feedback here.");
}


