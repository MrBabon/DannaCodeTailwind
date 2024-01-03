document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        var postdata = new FormData(this);
        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '../php/contact.php', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                console.log(xhr.responseText);
                if (xhr.status == 200) {
                    var result = JSON.parse(xhr.responseText);
                    handleFormResponse(result);
                }
            }
        };
        xhr.send(postdata);
    });
});
function validateForm()                                    
{              
    var email = document.forms["DannaForm"]["email"];    
    var phone = document.forms["DannaForm"]["phone"];  
    var company =  document.forms["DannaForm"]["company"];  
    var message =  document.forms["DannaForm"]["message"];  
  
 
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    if (!isValidEmail(email.value)) {
        alert("Mettez une adresse email valide.");
        email.focus();
        return false;
    }
    if (phone.value.length < 10) {
        alert("Le numéro de téléphone doit avoir au moins 10 chiffres.");
        phone.focus();
        return false;
    }    
    if (company.value == "")                  
    { 
        alert("Mettez votre entreprise."); 
        company.focus(); 
        return false; 
    } 
    if (message.value == "")                  
    { 
        alert("Écrivez un commentaire."); 
        message.focus(); 
        return false; 
    } 
    return true; 
}

function clearComments() {
    var formInputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
    formInputs.forEach(function (input) {
        if ((input.tagName === 'INPUT' || input.tagName === 'TEXTAREA') && input.type !== 'submit') {
            // Efface la valeur de l'input
            input.value = '';  
        }
    });
}

function handleFormResponse(result) {
    var errors = ["firstname", "lastname", "email", "phone", "date", "time", "message", "company"];

    errors.forEach(function (field) {
        var errorElement = document.getElementById(field + 'Error');
        if (errorElement) {
            errorElement.innerHTML = result[field + 'Error'] || '';
        }
    });

    if (result.isSuccess) {
        clearComments();
        document.getElementById('overlay').classList.add('flex');
        document.getElementById('overlay').classList.remove('hidden');
        document.getElementById('modal').classList.add('grid');
        document.getElementById('modal').classList.remove('hidden');
    }
}


function closeModal() {
    document.getElementById('overlay').classList.remove("flex");
    document.getElementById('modal').classList.remove("grid");
}
