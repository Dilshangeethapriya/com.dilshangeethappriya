import "./src/navbar.js";
import "./src/canvas1/imagelayers.js";
import "https://smtpjs.com/v3/smtp.js";

const btn = document.querySelector("button");
const sections = document.querySelectorAll("section");

// --------------- contact form submit --------------

const contactForm = document.getElementById("contact-form");

// input validating functions

function validateName(name) {
  if (name.trim() === "") {
    return "Name cannot be empty.";
  }
  // You can add further name validation logic here (e.g., minimum length)
  return true;
}

function sendEmail(name, email, contact, message) {
  // sending the email
  const Body = `
  <b>Name:</b> ${name}<br>
  <b>Email Address:</b> ${email}<br>
  <b>Contact Number:</b> ${contact}<br>
  <br>
  <b>Message:</b><br>
  ${message}<br>
  `;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "dilshan.geethapriya98@gmail.com",
    Password: "826129905235205F112F99F567F67BD083E4",
    To: "dilshan.geethapriya98@gmail.com",
    From: "dilshan.geethapriya98@gmail.com",
    Subject: "New Contact Submission",
    Body,

    // erasing the form
  }).then((message) => alert(message));
}

function authForm() {
  // getting the input data from the contact form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const contactNumber = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // validating the inputs

  const inputs = contactForm.querySelectorAll("input, textarea");

  if (name === "" || email === "" || contactNumber === "" || message == "") {
    console.log(`Please fill out all the fields before submitting!`);
  } else {
    sendEmail(name, email, contactNumber, message);
  }
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission
  authForm();
});
