function showPassword() {
    let input = document.getElementById("inputPassword");
    let show = document.getElementById("showEye");
    let hide = document.getElementById("hideEye");
        input.type = "text";
        show.classList.add("hide");
        hide.classList.remove("hide");

    };


function hidePassword() {
    let input = document.getElementById("inputPassword");
    let show = document.getElementById("showEye");
    let hide = document.getElementById("hideEye");
        input.type = "password";
        show.classList.remove("hide");
        hide.classList.add("hide");

    };


 function validPassword() {
    let input = document.getElementById("inputPassword");
    let lowercase = document.getElementById("lowercase");
    let uppercase = document.getElementById("uppercase");
    let number = document.getElementById("number");
    let length = document.getElementById("length");
    let protect = 0;
    let check = document.getElementById("check");
    let modal = document.getElementById("modal");
    let submit = document.getElementById("submit");

      let lowerCaseLetters = /[a-z]/g;

      if(input.value.match(lowerCaseLetters)) {
          lowercase.classList.add("invalid");
          lowercase.classList.remove("valid");
          protect++;
      }else {
          lowercase.classList.add("valid");
          lowercase.classList.remove("invalid");
          protect--;
      }
      let upperCaseLetters = /[A-Z]/g;
      if(input.value.match(upperCaseLetters)) {
          uppercase.classList.add("invalid");
          uppercase.classList.remove("valid");
          protect++;
      }else {
          uppercase.classList.add("valid");
          uppercase.classList.remove("invalid");
          protect--;
      }
      let numbers = /[0-9]/g;;
      if(input.value.match(numbers)) {
          number.classList.add("invalid");
          number.classList.remove("valid");
          protect++;
      }else {
          number.classList.add("valid");
          number.classList.remove("invalid");
          protect--;
      }
      if(input.value.length >= 8) {
          length.classList.add("invalid");
          length.classList.remove("valid");
          protect++;
      }else {
          length.classList.add("valid");
          length.classList.remove("invalid");
          protect--;
      }
      if(protect == 4){
          modal.classList.add("show", "valid");
          check.classList.add("hide");
          submit.removeAttribute('disabled');
      } else {
          modal.classList.remove("show");
          check.classList.remove("hide");
          submit.setAttribute("disabled", "true");
      }
};


function validUsername(){
    let input = document.getElementById("inputUsername");
    let username = /^[a-zA-Z0-9,._']+$/;
    let userhelp = document.getElementById("userhelp");
    let invaliduser = document.getElementById("invaliduser");
    let modalerror = document.getElementById("modalError");
        //userhelp.classList.add("hide");
    if(input.value.match(username) && input.value.length !== 0 ) {
        userhelp.classList.remove("hide");
        invaliduser.classList.remove("show");
        input.classList.remove("invalid-border");
        modalerror.classList.remove("show", "invalid");

    }else {
        userhelp.classList.add("hide");
        invaliduser.classList.add("show");
        input.classList.add("invalid-border");
        modalerror.classList.add("show", "invalid");
    }
};

function validEmail(){
    let input = document.getElementById("inputEmail");
    let email = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    let invalidemail = document.getElementById("invalidemail");
    let modalerror = document.getElementById("modalError");

    if(input.value.match(email) && input.value.length !== 0 ) {
        invalidemail.classList.remove("show");
        input.classList.remove("invalid-border");
        modalerror.classList.remove("show", "invalid");

    }else {
        invalidemail.classList.add("show");
        input.classList.add("invalid-border");
        modalerror.classList.add("show", "invalid");
    }
};

function submitForm(){
    let submit = document.getElementById("submit");
    let submitchange = document.getElementById("submitChange");

    submit.classList.add("hide");
    submitchange.classList.remove("hide");

};
