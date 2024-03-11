const form = document.querySelector("form");
const email1 = document.querySelector("#email");
const email2 = document.getElementById("confirm-email");
form?.addEventListener("submit", handleSubmit);

function handleSubmit(event) {

    if (email1.value === email2.value) {
        email2.style.background = "transparent";
        alert("Submission successful!")
        document.getElementById("form").reset();
    }
    else {
        const email2 = document.querySelector("#confirm-email");
        event.preventDefault();
        email2.classList.add('on-input-error');
        alert("Confirmation failed. Check email")
    }
    if(email1.value === email2.value){
      email2.classList.remove('on-input-error');
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


