$(document).ready(function() {
    $('form').on('submit', function(event) {
      event.preventDefault();
      let isValid = true;
      
      const name = $('input[name="name"]').val().trim();
      const phone = $('input[name="phone"]').val().trim();
      
      if (name === '') {
        alert("Please enter your name.");
        isValid = false;
      }
      
      const phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        isValid = false;
      }
      
      if (isValid) {
        // Submit the form
        alert("Form submitted successfully!");
      }
    });
  });
  