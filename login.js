document.getElementById("btnSignin").addEventListener("click", function (e) {
  e.preventDefault();

  let userEmail = document.getElementById("emailInput").value.trim();
  let userPassword = document.getElementById("passwordInput").value.trim();

  // Retrieve existing user records from session storage or initialize an empty array
  let users = JSON.parse(sessionStorage.getItem("users")) || [];

  // Find user by email
  let foundUser = users.find((user) => user.email === userEmail);

  if (!foundUser) {
    alert("User not found. Please sign up.");
    return;
  }

  if (foundUser.password !== userPassword) {
    alert("Invalid password. Please try again.");
    return;
  }

  alert("Login successful! Welcome, " + foundUser.name);
  // Redirect to Dashboard.html or perform other actions
  window.location.href("Index.html");
});
