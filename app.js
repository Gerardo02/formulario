document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Create a FormData object from the form
    var formData = new FormData(this);

    // Create an object to store the form data
    var data = {};

    // Iterate through the formData entries and add them to the data object
    formData.forEach((value, key) => {
        if (value instanceof File) {
            data[key] = value; // Store the file object
        } else {
            data[key] = value; // Store the value for text and email inputs
        }
    });

    // Log the captured data to the console
    console.log('Captured Form Data:', data);

    // Add any additional form handling or data processing here

    fetch('http://localhost:8000/files', {
        method: 'POST',
        body: formData
    })
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.error('Error:', error);
    });
});