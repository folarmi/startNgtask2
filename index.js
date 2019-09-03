const form = document.getElementById('contactForm')
const name = document.getElementById('firstname');
const email = document.getElementById('email');
const title = document.getElementById('title');
const message = document.getElementById('message');

function validateForm() {
    if (name.value === '' || name.value < 4){
        alert('Name cannot be empty')
    }
  }