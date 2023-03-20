console.log("Javascript working...")

function validateform() {
    var name1 = document.myform.FirstName.value;
    name1 = name1.trim();
    var name2 = document.myform.LastName.value;
    name2 = name2.trim();

    var passwordd = document.myform.password.value;
    var confpass = document.myform.confirmpassword.value;
    var mail = document.myform.mailId.value;

    if (validatename(name1) == true && validatename(name2) == true)
        return true;



    else if (validatePasswords(passwordd, confpass) != true) {
        alert("Password length should be atleast 8 and should be less than 15 and password and confirm password should be same");
        return false;
    }


    if (validatemailId(mail) != true) {
        alert("Enter your mailId correctly");
        return false;
    }

    return true;

}



//validating name
function validatename(name) {
    const pattern = /^[A-Za-z ]^/;
    if (pattern.test(name) != true)
        alert("Password length should be atleast 8 and should be less than 15 and password and confirm password should be same");


}

//validate password
function validatePasswords(passwordd, confpass) {

    if (passwordd.length >= 8 || passwordd.length <= 15) {

        if (passwordd == confpass)
            return true;

    }
}


function validatemailId(mail) {
    var ispresent = mail.indexOf("@");
    if (ispresent < 1) return false;

    var dot = mail.indexOf(".");
    if (dot <= ispresent + 2) return false;

    // check that the dot is not at the end
    if (dot === mail.length - 1) return false;

    return true;

}



