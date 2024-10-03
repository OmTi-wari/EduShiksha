document.getElementById('studentloginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.querySelector('input[name="Username"]').value;
    const email = document.querySelector('input[name="Email"]').value;
    const password = document.querySelector('input[name="Password"]').value;
    const confirmPassword = document.querySelector('input[name="Confirm"]').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

   window.location.href = 'success2.html';
});