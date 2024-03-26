function validateForm(event) {
  event.preventDefault(); //

  var fullName = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  // Validating Full Name
  if (fullName === "") {
    alert("Please enter your full name.");
    return false;
  }

  // Validating Email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Validating Password
  if (password === "") {
    alert("Please enter a password.");
    return false;
  }

  // Validating Confirm Password
  if (confirmPassword === "") {
    alert("Please confirm your password.");
    return false;
  }

  // Checking if passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return false;
  }
}
