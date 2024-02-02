document.addEventListener("DOMContentLoaded", function () {
  // Signup Functionality
  document.getElementById("btnSignin").addEventListener("click", function (e) {
    e.preventDefault();

    // Trim whitespace from input values
    let userName = document.getElementById("inputName").value.trim();
    let userEmail = document.getElementById("inputEmail").value.trim();
    let userPassword = document.getElementById("inputPassword").value.trim();
    let userAddress = document.getElementById("inputAddress").value.trim();

    // Validations
    if (!userName || !userPassword || !userEmail || !userAddress) {
      alert("Please fill out all fields.");
      return;
    }

    if (userPassword.length < 8) {
      alert("Password length should be at least 8 characters");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(userEmail)) {
      alert("Please enter a valid email address");
      return;
    }

    // Retrieve existing user records from session storage or initialize an empty array
    let users = JSON.parse(sessionStorage.getItem("users")) || [];

    // Check if the email is already registered
    if (users.some((user) => user.email === userEmail)) {
      alert("Email already exists. Please use a different email address.");
      return;
    }

    // Create a new user object
    let newUser = {
      name: userName,
      email: userEmail,
      password: userPassword,
      address: userAddress,
    };

    // Adding new user to the array of user records
    users.push(newUser);

    // Store the updated array of user records back into session storage
    sessionStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");
    window.location.href = "Login.html";
  });

  // Login Functionality
});
