import "./src/navbar.js";
import "./src/canvas1/imagelayers.js";
//import "https://smtpjs.com/v3/smtp.js";

const btn = document.querySelector("button");
const sections = document.querySelectorAll("section");

// contact form submit

const contactForm = document.getElementById("contact-form");
console.log(contactForm);
function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "username",
    Password: "password",
    To: "them@website.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
