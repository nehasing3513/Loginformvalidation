console.log("Javascript working...")

function validateform() {
    var name1 = document.myform.FirstName.value;
    name1 = name1.trim();
    var name2 = document.myform.FirstName.value;
    name2 = name2.trim();

    var passwordd = document.myform.password.value;
    var confpass =  document.myform.confirmpassword.value;
    var mail = document.myform.mailId.value;
    var atposition = mail.indexOf("@");
    var dotposition = mail.lastIndexOf(".");

    if (name1 == null || name1 == "") {
        alert("Name can't be blank");
        return false;
    }

    else if (name2 == null || name2 == "") {
        alert("Name can't be blank");
        return false;
    }


    else if (passwordd.length < 6 ) {
        alert("Password must be 6 characters long");
        return false;
    }

    else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= mail.length) {
        alert("Please enter a valid e-mail address \n atpostion:" + atposition + "\n dotposition:" + dotposition);
        return false;
    }

    else if(passwordd !=confpass){
      alert("Your Password did not match");
       return false;
    }

    return true;
}





