document.addEventListener("DOMContentLoaded", function() {
    // Signup Functionality
    document.getElementById("btnSignup").addEventListener("click", function(e) {
        e.preventDefault();

        let userName = document.getElementById("inputName").value;
        let userEmail = document.getElementById("inputEmail").value;
        let userPassword = document.getElementById("inputPassword").value;
        let userAddress = document.getElementById("inputAddress").value;

        // Validations
        if (userName === "") {
            alert("Please enter username");
            document.getElementById("inputName").focus();
            return;
        } else if (userPassword === "") {
            alert("Please enter password");
            document.getElementById("inputPassword").focus();
            return;
        } else if (userPassword.length < 8) {
            alert("Password length should be more than 8 characters ");
            document.getElementById("inputPassword").focus();
            return;
        } else if (userEmail === "") {
            alert("Please enter email address");
            document.getElementById("inputEmail").focus();
            return;
        } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(userEmail)) {
            alert("Please enter a valid email address");
            document.getElementById("inputEmail").focus();
            return;
        } else if (userAddress === "") {
            alert("Please enter your address");
            document.getElementById("inputAddress").focus();
            return;
        }

        // Retrieve existing user records from session storage or initialize an empty array
        let users = JSON.parse(sessionStorage.getItem("users")) || [];

        // Create a new user object
        let newUser = {
            name: userName,
            email: userEmail,
            password: userPassword,
            address: userAddress
        };

        // Adding new user to the array of user records
        users.push(newUser);

        // Store the updated array of user records back into session storage
        sessionStorage.setItem("users", JSON.stringify(users));

        alert("Signup successful!");
        window.location.href = "Login.html";
    });

    // Login Functionality
    document.getElementById("btnSignin").addEventListener("click", function(e) {
        e.preventDefault();
        let userEmail = document.getElementById("emailInput").value;
        let userPassword = document.getElementById("passwordInput").value;

        let users = JSON.parse(sessionStorage.getItem("users")) || [];
        let foundUser = users.find(user => user.email === userEmail);
        if (foundUser && foundUser.password === userPassword) {
            alert("Login successful! Welcome," + foundUser.name);
            // window.location.href("Dashboard.html");
        } else {
            alert("Invalid email or password. Please try again.");
            console.log("Not ffffff");
        }
    });
});