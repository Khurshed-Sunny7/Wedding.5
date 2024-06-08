document.getElementById('guestForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const guestId = document.getElementById('guestId').value;
    if (guestId) {
        window.location.href = `invitation.html?guest=${guestId}`;
    }
});
