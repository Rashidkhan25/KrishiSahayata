document.querySelector('.add-task-btn').addEventListener('click', () => {
    document.getElementById('taskModal').style.display = 'block';
});

// Close modal
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('taskModal').style.display = 'none';
});

// Add task to the table
document.getElementById('taskForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const taskName = document.getElementById('taskName').value;
    const farmerName = document.getElementById('farmerName').value;
    const dueDate = document.getElementById('dueDate').value;

    const tableBody = document.getElementById('taskTableBody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${taskName}</td>
        <td>Farmer ${farmerName}</td>
        <td>${dueDate}</td>
        <td class="status pending">Pending</td>
    `;

    // Add click and double-click event for status change
    const statusCell = newRow.querySelector('.status');

    statusCell.addEventListener('click', () => {
        if (statusCell.classList.contains('pending')) {
            statusCell.textContent = 'In Progress';
            statusCell.classList.remove('pending');
            statusCell.classList.add('in-progress');
        }
    });

    statusCell.addEventListener('dblclick', () => {
        if (statusCell.classList.contains('in-progress')) {
            statusCell.textContent = 'Completed';
            statusCell.classList.remove('in-progress');
            statusCell.classList.add('completed');
            setTimeout(() => {
                // Remove the row after task is marked as completed
                newRow.remove();
            }, 500); // Delay for visual confirmation
        }
    });

    tableBody.appendChild(newRow);

    // Close modal and reset form
    document.getElementById('taskModal').style.display = 'none';
    document.getElementById('taskForm').reset();
});

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
    if (event.target == document.getElementById('taskModal')) {
        document.getElementById('taskModal').style.display = 'none';
    }
};