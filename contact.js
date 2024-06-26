document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // It prevents the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create an object to store the data entered by users
    const userData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    // Save the data to local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    // alert users about the form submission
    alert('The form has been submitted successfully')

    // Display a success message
    document.getElementById('result').innerText = 'Your form has been saved successfully in a local storage';
});
