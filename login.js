function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}
function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm(){
    var returnval = true;
    clearErrors();

    var name = document.forms['myForm']["fname"].value;
    if (name.length<1 || name.length>35){
        seterror("name", "*Dear Wizard,Enter a valid name!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (!email.includes("@gmail.com")){
        seterror("email", "*Ohh Wizard,Enter a valid email!");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (password.length < 6){
        // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
        seterror("pass", "*Ohh Wizard,Password is too short!");
        returnval = false;
    }
    if(!specialChars.test(password)){
        seterror("pass","*Wizard,Create a strong password with numbers and special characters!");
        returnval = false;  
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Verily, dear wizard,The password doesn't match!");
        returnval = false;
    }

    return returnval;
}

