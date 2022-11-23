function valid(){
    var sid=document.forms["frm"]["sid"].value;
    var name=document.forms["frm"]["name"].value;
    var email=document.forms["frm"]["email"].value;
    var address=document.forms["frm"]["address"].value;
    var english=document.forms["frm"]["english"].value;
    var physics=document.forms["frm"]["physics"].value;
    var chemistry=document.forms["frm"]["chemistry"].value;
    var maths=document.forms["frm"]["maths"].value;
    var computers=document.forms["frm"]["computers"].value;

    var address=document.forms["frm"]["address"].value;

    if(sid==""){
        alert("please enter your student id first")
        return false;
    }
    if(name==""){
        alert("please enter your name first")
        return false;
    }
    else if(email==""){
        alert("please enter your email")
        return false;
    }
    else if(address==""){
        alert("please enter your address")
        return false;
    }
    else if(english==""){
        alert("please enter your marks ")
        return false;
    }
    else if(physics==""){
        alert("please enter your marks ")
        return false;
    } 
    else if(chemistry==""){
        alert("please enter your marks ")
        return false;
    }
    else if(maths==""){
        alert("please enter your marks ")
        return false;
    }
    else if(computers==""){
        alert("please enter your marks ")
        return false;
    }
    
    // else{
    //     alert("Form submitted successfully")
    //     return true;
    // }
}