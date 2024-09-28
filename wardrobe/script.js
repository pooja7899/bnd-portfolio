document.addEventListener("DOMContentLoaded", function() {
    const itemList = document.getElementById('itemList');
    const addItemButton = document.getElementById('addItemButton');
    const newItemInput = document.getElementById('newItemInput');
  
    // Function to add a new item
    addItemButton.addEventListener("click", function() {
        const newItemName = newItemInput.value.trim(); // Get the input value and remove extra spaces
  
        if (newItemName !== "") {
            // Create a new div for the item
            const newItemDiv = document.createElement('div');
            newItemDiv.classList.add('item'); // Add 'item' class for styling
  
            // Set the inner HTML of the new item div
            newItemDiv.innerHTML = `
                <span>${newItemName}</span>
                <button class="delete-item">Delete Item</button>
            `;
  
            // Add the new item to the item list
            itemList.appendChild(newItemDiv);
  
            // Clear the input field
            newItemInput.value = '';
  
            // Add delete functionality to the new delete button
            newItemDiv.querySelector('.delete-item').addEventListener('click', function() {
                newItemDiv.remove(); // Remove the item when the delete button is clicked
            });
        } else {
            alert("Please enter a valid item name.");
        }
    });
  
    // Event listener for deleting existing items
    itemList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-item')) {
            e.target.parentElement.remove(); // Remove the parent item of the clicked button
        }
    });
  });