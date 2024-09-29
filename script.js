document.getElementById('attendanceForm').addEventListener('submit', recordAttendance);

// Modal setup for alert messages
const modal = document.getElementById('alertModal');
const modalMessage = document.getElementById('alertMessage');
const closeModal = document.querySelector('.close-btn');

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Thread lock for concurrency control
let lock = false;

// Function to handle form submission
async function recordAttendance(event) {
    event.preventDefault();

    // Check if the lock is active (simulating a concurrency scenario)
    if (lock) {
        showModal('Another attendance is being recorded. Please wait.');
        return;
    }

    lock = true;  // Activate lock

    // Get form data
    const studentName = document.getElementById('studentName').value;
    const attendanceDate = document.getElementById('attendanceDate').value;
    const attendanceStatus = document.getElementById('attendanceStatus').value;

    // Check if attendance has already been marked for this student on this device
    const markedKey = `${studentName}-${attendanceDate}`;
    if (localStorage.getItem(markedKey)) {
        showModal('Attendance for this student has already been marked on this device.');
        lock = false; // Release lock
        return;
    }

    // Simulate an asynchronous operation (e.g., saving to a database)
    await new Promise((resolve) => setTimeout(resolve, 1000));  // Simulating delay

    // Mark the attendance in the localStorage
    localStorage.setItem(markedKey, true);

    // Create a new table row for the attendance record
    const attendanceTableBody = document.getElementById('attendanceTableBody');
    const newRow = attendanceTableBody.insertRow();

    newRow.insertCell(0).textContent = studentName;
    newRow.insertCell(1).textContent = attendanceDate;
    newRow.insertCell(2).textContent = attendanceStatus;

    // Reset form
    document.getElementById('attendanceForm').reset();

    lock = false;  // Release lock
    showModal('Attendance successfully recorded!');
}

// Function to display the modal with a custom message
function showModal(message) {
    modalMessage.textContent = message;
    modal.style.display = 'flex';
}