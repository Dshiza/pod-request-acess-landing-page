function ValidateEmail() {
  let emailInput = document.getElementById("email").value;
  console.log(emailInput)
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  email = document.getElementsByClassName("error");
  console.log(email)
  if (emailInput.match(validRegex)) {  
    email[0].style.display = "none";
    
    return true;

  } else {
    email[0].style.display = "block";
    email[0].style.fontSize = "1rem";
    
    return false;
  }

}



