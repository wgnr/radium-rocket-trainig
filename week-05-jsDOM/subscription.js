/*
  Here we gatter everything related to each input in form.
  id: id in HTML DOM
  checkValidationFails: condition in which the inputs shows an error message
  inputDOM: input reference to DOM based on its id
  errorMesageDOM: error message reference to DOM based on its id
*/

const formDataStructure = [
  {
    // FULL NAME
    id: "i-full-name", // Input id in HTML
    checkValidationFails: function (input) {
      // input is always string as it comes from an input.value
      return input.length < 6 || input.split(" ").length === 0;
    },
  },
  {
    // EMAIL
    id: "i-email",
    checkValidationFails: function (input) {
      return input.match(/[-.\w]+@([\w-]+\.)+[\w-]+/g) === null;
    },
  },
  {
    // PASSWORD
    id: "i-password",
    checkValidationFails: function (input) {
      return input.length < 6 || input.search(/[^A-Za-z0-9]/g) !== -1;
    },
  },
  {
    // REPEAT PASSWORD
    id: "i-repeat-password",
    checkValidationFails: function (input) {
      return input.length < 6 || input.search(/[^A-Za-z0-9]/g) !== -1;
    },
  },
  {
    // AGE
    id: "i-age",
    checkValidationFails: function (input) {
      return input % 1 !== 0 || input < 18;
    },
  },
  {
    // PHONE
    id: "i-phone",
    checkValidationFails: function (input) {
      return input.length < 7 || input.search(/[ \-()]/g) !== -1;
    },
  },
  {
    // ADDRESS
    id: "i-address",
    checkValidationFails: function (input) {
      return (
        input.length < 5 ||
        input.search(/[A-Za-z]/g) === -1 ||
        input.search(/[0-9]/g) === -1 ||
        !input.trim().includes(" ")
      );
    },
  },
  {
    //NUEVO
    id: "i-city",
    checkValidationFails: function (input) {
      return input.length < 3;
    },
  },
  {
    // ZIP
    id: "i-zip",
    checkValidationFails: function (input) {
      return input.length < 3;
    },
  },
  {
    // ID
    id: "i-id",
    checkValidationFails: function (input) {
      const value = input.toString().length;
      return !(value == 7 || value == 8);
    },
  },
].map((input) => ({
  ...input,
  inputDOM: document.getElementById(input.id),
  errorMesageDOM: document.getElementById(input.id).nextElementSibling,
}));

function handleOnSubmit(event) {
  event.preventDefault();

  // Evaluate every restriction...
  let abort = false;
  for (let i = 0; i < formDataStructure.length; i++) {
    const input = formDataStructure[i];

    const isValidationFailed = input.checkValidationFails(input.inputDOM.value);

    // Show/remove error message
    input.errorMesageDOM.classList.toggle("show", isValidationFailed);

    if (isValidationFailed) abort = true;
  }

  // Check if password and repeat password are the same
  const password = formDataStructure.find((e) => e.id === "i-password");
  const repeatPassowrd = formDataStructure.find(
    (e) => e.id === "i-repeat-password"
  );
  if (password.inputDOM.value !== repeatPassowrd.inputDOM.value) {
    abort = true;
    // Show error
    password.errorMesageDOM.classList.add("show");
    repeatPassowrd.errorMesageDOM.classList.add("show");
  }

  // Fails
  if (abort) return;

  // Success ! Form sent!
  const successMessage = ["Your subscription has been success!", "Your info:"];
  for (let i = 0; i < formDataStructure.length; i++) {
    const input = formDataStructure[i];
    successMessage.push(
      input.inputDOM.previousElementSibling.textContent +
        " " +
        input.inputDOM.value
    );
  }
  alert(successMessage.join("\n"));
}

function handleValidateInput(event) {
  const id = event.target.id;
  const input = formDataStructure.find((e) => e.id === id);
  if (!input) return;

  //Validate
  const value = input.inputDOM.value;
  const isValidationFailed = input.checkValidationFails(input.inputDOM.value);
  // Show/remove error message
  input.errorMesageDOM.classList.toggle("show", isValidationFailed);
}

function handleHideError(event) {
  const id = event.target.id;
  const input = formDataStructure.find((e) => e.id === id);
  if (!input) return;

  input.errorMesageDOM.classList.remove("show");
}