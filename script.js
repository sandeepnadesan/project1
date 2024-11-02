// script.js

document.getElementById("login").addEventListener("click", function() {
    document.querySelector(".sign-in").style.display = "block";
    document.querySelector(".sign-up").style.display = "none";
});

document.getElementById("register").addEventListener("click", function() {
    document.querySelector(".sign-in").style.display = "none";
    document.querySelector(".sign-up").style.display = "block";
});

// Handle Signup Form Submission
document.getElementById("signupForm").addEventListener("submit", async function(e) {
    e.preventDefault(); // Prevent default form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    try {
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: name, email, password }),
        });
        const data = await response.json();
        // Handle response from the server
        if (response.ok) {
            alert('Signup successful!');
            document.getElementById("signupForm").reset();
        } else {
            alert(data.message || 'Signup failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});

// Handle Signin Form Submission
document.getElementById("signinForm").addEventListener("submit", async function(e) {
    e.preventDefault(); // Prevent default form submission
    const email = document.getElementById("signinEmail").value;
    const password = document.getElementById("signinPassword").value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        // Handle response from the server
        if (response.ok) {
            alert('Signin successful!');
            document.getElementById("signinForm").reset();
            // You can redirect the user or perform further actions here
        } else {
            alert(data.error || 'Signin failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});
