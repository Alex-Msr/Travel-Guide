const email = document.getElementById('email');
const confirmEmail = document.getElementById('confirm-email');
/*const fullName = document.getElementById('name');
const phoneNumber = document.getElementById('phonenumber');
const streetAddress = document.getElementById('street-address');
const city = document.getElementById('city');
const region = document.getElementById('region');
const postalCode = document.getElementById('postal-code');
const message = document.getElementById('message');
const country = document.getElementById ('select-box');*/
const formInputs = form.querySelectorAll('input');
form?.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let emailValue;
  let confirmationEmailValue;

  for (let i = 0; i < formInputs.length; i++) {
    const formInput = formInputs[i]

    if (formInputs.value.trim().length === 0) {
      alert('Fields are missing')
      formInputs.classList.add('on-input-error');
    }
    console.log(formInputs);

    if (formInput.id === 'email') {
      emailValue = formInput.value
    }
    if (formInput.id === 'confirm-email') {
      confirmationEmailValue = formInput.value
    }
  }
  console.warn({ emailValue, confirmationEmailValue });

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
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active1");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}