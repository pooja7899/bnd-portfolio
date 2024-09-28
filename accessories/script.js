document.addEventListener('DOMContentLoaded', () => {
    showSection('all'); // Default to All Accessories section

    document.querySelectorAll('nav button').forEach(button => {
        button.addEventListener('click', (event) => {
            showSection(event.target.getAttribute('onclick').split("'")[1]);
        });
    });

    document.getElementById('uploadImageForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const uploadInput = document.getElementById('uploadImage');
        const file = uploadInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                alert('Image uploaded successfully!');
                // Display the uploaded image here
                // You can create an <img> element and set its src to e.target.result
            };
            reader.readAsDataURL(file);
        }
    });
});

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}
