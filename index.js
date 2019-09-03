const form = document.getElementById('contactForm')
const name = document.getElementById('firstname');
const email = document.getElementById('email');
const title = document.getElementById('title');
const message = document.getElementById('message');
function validateForm() {
    var x = document.forms["contactForm"]["firstname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }