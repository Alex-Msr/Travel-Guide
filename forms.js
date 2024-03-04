const email = document.getElementById('email');
const confirmEmail = document.getElementById('confirm-email');
const form = document.getElementById("form");
const fullname = document.getElementById('name');
const phonenumber = document.getElementById('phonenumber');
const streetAddress = document.getElementById('street-address');
const city = document.getElementById('city');
const region = document.getElementById('region');
const postalCode = document.getElementById('postal-code');
const message = document.getElementById('message');

form?.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    let emailValue;
    let confirmationEmailValue;

    const formInputs = form.querySelectorAll('input');
    


    for (let i = 0; i < formInputs.length; i++){
        const formInput = formInputs[i]

        if (formInput.value.trim().length === 0){
            alert ('Fields are missing')
            formInput.classList.add('on-input-error');
        }
        // console.log(formInput);

        if(formInput.id === 'email') {
            emailValue = formInput.value
        }
        if(formInput.id === 'confirm-email') {
            confirmationEmailValue = formInput.value
        }
    }
    console.warn({emailValue, confirmationEmailValue});

    if (emailValue !== confirmationEmailValue) {
        const confirmationEmailElement = form.querySelector('#confirm-email')

        confirmationEmailElement.classList.add('on-input-error-test');
    }
   
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//ACCORDION

var acc = document.getElementsByClassName("accordion-header");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active1");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}