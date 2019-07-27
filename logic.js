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


// When the user starts to type something inside the password field
 function validFunction() {
    let input = document.getElementById("inputPassword");
    let lowercase = document.getElementById("lowercase");
    let uppercase = document.getElementById("uppercase");
    let number = document.getElementById("number");
    let length = document.getElementById("length");
    let protect = 0;
    let check = document.getElementById("check");
    let modal = document.getElementById("modal");
  // Validate lowercase letters
      let lowerCaseLetters = /[a-z]/g;

      if(input.value.match(lowerCaseLetters)) {
          lowercase.classList.add("valid");
          lowercase.classList.remove("invalid");
          protect++;
      }else {
          lowercase.classList.add("invalid");
          lowercase.classList.remove("valid");
          protect--;
      }
      let upperCaseLetters = /[A-Z]/g;;
      if(input.value.match(upperCaseLetters)) {
          uppercase.classList.add("valid");
          uppercase.classList.remove("invalid");
          protect++;
      }else {
          uppercase.classList.add("invalid");
          uppercase.classList.remove("valid");
          protect--;
      }
      let numbers = /[0-9]/g;;
      if(input.value.match(numbers)) {
          number.classList.add("valid");
          number.classList.remove("invalid");
          protect++;
      }else {
          number.classList.add("invalid");
          number.classList.remove("valid");
          protect--;
      }
      if(input.value.length >= 8) {
          length.classList.add("valid");
          length.classList.remove("invalid");
          protect++;
      }else {
          length.classList.add("invalid");
          length.classList.remove("valid");
          protect--;
      }
      if(protect == 4){
          modal.classList.add("show");
          check.classList.add("hide");
      } else {
          modal.classList.remove("show");
          check.classList.remove("hide");
      }
};

function userHelp(){
    let userhelp = document.getElementById("userhelp");
    userhelp.classList.add("show");
};
