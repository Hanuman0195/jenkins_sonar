function showMessage() {
    alert("Welcome! You clicked the button.");
}

function handleSubmit() {
    const name = document.getElementById("name").value;
    alert("Thank you, " + name + "! Your message has been received.");
    return false; // prevent actual form submit
}
