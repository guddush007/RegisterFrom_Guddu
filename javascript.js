function validateform() {
    var name  = document.forms.myform.fname.value;
    var fname = document.forms.myform.ffname.value;
    var regName = /\d+$/g;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  
    var regPhone=/^\d{10}$/;  
    if((name == " " && name==" ") || (regName.test(name) || regName.test(name))){
       document.getElementById("sname").innerHTML("Your Full name must be filled out properly");
        return false;
    }
    
    return true;
}