document.addEventListener('DOMContentLoaded', () => {
    showSection('home'); // Default to Home section

    document.getElementById('addItemForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const itemName = document.getElementById('itemName').value;
        const itemDescription = document.getElementById('itemDescription').value;
        const itemImage = document.getElementById('itemImage').value;

        const newItem = document.createElement('li');
        newItem.innerHTML = `
            <h3>${itemName}</h3>
            <p>${itemDescription}</p>
            <img src="${itemImage}" alt="${itemName}">
        `;
        
        document.getElementById('itemList').appendChild(newItem);

        // Clear form
        document.getElementById('addItemForm').reset();
    });
});

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

