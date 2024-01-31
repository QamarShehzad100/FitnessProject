
// Signup Process
// formic, react hook form validations in react
document.getElementById("btnSignup")?.addEventListener("click", function(e)
{
  e.preventDefault();
let userName = document.getElementById("inputName").value;
let userEmail = document.getElementById("inputEmail").value;
let userPassword = document.getElementById("inputPassword").value;
let userAddress = document.getElementById("inputAddress").value;

//validations
if(userName=== "")
{
  alert("Please enter username");
  document.getElementById("inputName").focus();
   return;
}
else if(userPassword=== "")
{
  alert("Please enter password");
  document.getElementById("inputPassword").focus();
   return;
}
else if(userPassword.length<8)
{
  alert("Password lenght shoud be more than 8 characters ")
  document.getElementById("inputPassword").focus();
  return;
}
else if(userEmail=== "")
{
  alert("Please enter email address");
  document.getElementById("inputEmail").focus();
   return;
}
else if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(userEmail))
{
  alert("Please enter valid email address");
  document.getElementById("inputEmail").focus();
  return;
}
else if(userAddress=== "")
{
  alert("Please enter your address");
  document.getElementById("inputAddress").focus();
   return;
}

var user = {
  name : userName,
  email : userEmail,
  password : userPassword,
  address : userAddress
}
sessionStorage.setItem("user", JSON.stringify(user));
  alert("Signup successful!");
window.location.href = "Login.html";
})

// Login Functionality

// function userLogin()
// {
//   const {name,email}=JSON.parse(sessionStorage.getItem("user"));
//   console.log(name);

// }

// userLogin()