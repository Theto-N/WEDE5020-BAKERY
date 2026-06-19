// Enquiry Form
document.getElementById('EnquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Form submission logic here
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    if (name && email && phone && message) {
        alert('Thank you for your enquiry, ' + name + '! We will get back to you soon.');
        document.getElementById('EnquiryForm').reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});

// Reset Button
document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('EnquiryForm').reset();
});

// Contact Form
document.getElementById('ContactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    Window.alert('Thank you for contacting us! We will get back to you soon.');
    document.getElementById('ContactForm').reset();

    let name = document.getElementById('contactName').value;
    let email = document.getElementById('contactEmail').value;
    let message = document.getElementById('contactMessage').value;

    if (name=='' || email=='' || message=='') {
        alert('Please fill in all fields before submitting.');
        event.preventDefault();
    } else {
        alert("Form submitted successfully");
    }
});
