// Image Upload Preview
document.getElementById('image-upload').addEventListener('change', function(event) {
    const imagePreview = document.getElementById('preview-image');
    const file = event.target.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});

// Submission logic (this can be connected to a backend)
function submitProduct() {
    const name = document.getElementById('equipment-name').value;
    const model = document.getElementById('model').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const rentPrice = document.getElementById('rent-price').value;

    // Simple form validation
    if (name && model && description && price) {
        alert('Product submitted successfully!');
        // Send data to the server here
    } else {
        alert('Please fill out all required fields!');
    }
}
