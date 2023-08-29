const formData = document.getElementById('signinForm');

formData.addEventListener('submit', (e)=>{
    const userName = document.getElementById('emailInput').value;
    const userPassword = document.getElementById('passwordInput').value;

    // adding above form values to localStorage
    localStorage.setItem('username',userName);
    localStorage.setItem('password', userPassword);
    alert("Your details are saved to localStorage")
    console.log(userName);
})


// Uncaught TypeError: document.getElementById(...) is null


// I'll send you Login html code, then Login JS code and then error you need to help me finding solution