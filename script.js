
function openBookingForm(destination) {
    document.getElementById('destinationName').textContent = destination;
    document.getElementById('bookingModal').style.display = 'flex';
}

function closeBookingForm() {
    document.getElementById('bookingModal').style.display = 'none';
}

function confirmBooking() {
    const confirm = window.confirm("Dëshironi të konfirmoni rezervimin?");
    alert("Urime. Rezervimi juaj është konfirmuar. Pushime të mbara.");
    closeBookingForm();
}
