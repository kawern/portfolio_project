// ### CONTACT VALIDATION ### ///
const error=document.querySelector("#error");
function valider(f){
    if(f.name.value==""){
      error.innerHTML="&nbsp;&nbsp;<li class='fas fa-exclamation-circle'> </li> Please enter your name&nbsp;&nbsp;"
        f.name.focus();
        return false;
    }
    if(f.email.value==""){
      error.innerHTML="&nbsp;&nbsp;<li class='fas fa-exclamation-circle'> </li> Please enter your email&nbsp;&nbsp;";
      f.email.focus();
    return false;
    }
    var atpos = f.email.value.indexOf("@");
        var dotpos = f.email.value.lastIndexOf(".");
        if (atpos<1 || dotpos<+2 || f.email.value.lenght <= dotpos+2){
          error.innerHTML="&nbsp;&nbsp;<li class='fas fa-exclamation-circle'> </li> Please enter a valid email&nbsp;&nbsp;";
            f.email.focus();
            return false;
        }
if(f.message.value==""){
  error.innerHTML="&nbsp;&nbsp;<li class='fas fa-exclamation-circle'> </li> Please write a message&nbsp;&nbsp;";
  f.message.focus();
return false;
}
if(f.spamcheck.value==""){
  error.innerHTML="&nbsp;&nbsp;<li class='fas fa-exclamation-circle'> </li> Please solve the math&nbsp;&nbsp;";
  f.spamcheck.focus();
return false;
}
const x = 12; 
if(f.spamcheck.value < x){
  error.innerHTML="&nbsp;&nbsp;<li class='fas fa-exclamation-circle'> </li> Come on buddy! It's simple math!&nbsp;&nbsp;";
  f.spamcheck.focus();
return false;
}
if(f.spamcheck.value > x){
  error.innerHTML="&nbsp;&nbsp;<li class='fas fa-exclamation-circle'> </li> Really?&nbsp;&nbsp;";
  f.spamcheck.focus();
return false;
}
  if(f.spamcheck.value == x){
  
return true;
  }else{
    return false;
  }
}

// ### JS CONTACT VALIDATION END ### ///
(function nytRegnestykke() {
    const regnestykker = ['1+11', '2+10', '3+9', '4+8', '5+7', '6+6', '7+5', '8+4', '9+3', '10+2', '11+1'];
    const randomRegnestykke = Math.floor(Math.random() * regnestykker.length);
    document.getElementById('regnestykke').innerHTML = regnestykker[randomRegnestykke];
    })();

