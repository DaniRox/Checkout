let btnOk = document.getElementById("btn-ok");
let btnError = document.getElementById("btn-error");
let msgOk = document.getElementById("submit");
let msgError = document.getElementById("submit-error")


document.getElementById("my-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    if (validateForm()) {
        showSuccessMessage();
    } else {
        showErrorMessage();
    }
});


function validateForm() {
    let emailInput = document.getElementById("email");
    if (emailInput.value.trim() === "") {
        return false;
    }
  
    return true;
}
  
function showSuccessMessage() {
    msgOk.style.display = "flex";
    msgError.style.display = "none";
}

function showErrorMessage() {
    msgOk.style.display = "none";
    msgError.style.display = "flex";
}
  

document.getElementById("btn-ok").addEventListener("click", function () {
    hideMessages();
});
  
document.getElementById("btn-error").addEventListener("click", function () {
    hideMessages();
});

function hideMessages() {
    document.getElementById("submit").style.display = "none"; // Oculta el mensaje de éxito
    document.getElementById("submit-error").style.display = "none"; // Oculta el mensaje de error
}
  