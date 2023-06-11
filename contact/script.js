const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const number = document.getElementById('number').value;
  const message = document.getElementById('message').value;

  // Process the form data (e.g., send it to the server)
  // ...

  // Reset form
  form.reset();

  // Show success message
  alert('Thank you for contacting us!');
});
