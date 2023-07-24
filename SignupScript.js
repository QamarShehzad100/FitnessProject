const submitButton = document.querySelector(".btnSignup");
const signupForm = document.getElementById("formSignup");
const formDataContainer = [];

submitButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const formData = new FormData(signupForm);
  const userName = formData.get("name");
  const userPassword = formData.get("password");
  const userEmail = formData.get("email");
  const userAddress = formData.get("address");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(userEmail)) {
    alert("Invalid email address");
    return; // Prevent form submission if email is invalid
  }

  if (!userName || !userEmail || !userAddress || !userPassword) {
    alert("Please fill all fields");
    return; // Prevent form submission if any field is missing
  }

  // Form data is valid, perform the necessary actions
  signupForm.reset();
  formDataContainer.push(userName, userPassword, userEmail, userAddress);
  alert("Signup Successful");
  console.log(formDataContainer);
});
