// JavaScript for filling the username
document.addEventListener("DOMContentLoaded", function () {
  var usernameElement = document.getElementById("username");
  var username = prompt("Please enter your name:");
  usernameElement.textContent = username;
});

// JavaScript for form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Display submitted values
    alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);

    // Optional: You can send the form data to a server using AJAX here
  });
