// TODO: validation.js er ikke lenger ett forklarende nok filnavn :I
const validering = {
  INVALID_MAIL: "INVALID_MAIL",
  INVALID_SUBJECT: "INVALID_SUBJECT",
  INVALID_TYPE_OF_SERVICE: "INVALID_TYPE_OF_SERVICE",
  INVALID_TEXT: "INVALID_TEXT"
};
Object.freeze(validering);

let validation = (email, subject, type, text) => {
  const emailRegEx = /^[a-å|0-9._%+-]+@[a-z|0-9.-]+\.[a-z]{2,}$/;
  const validEmail = emailRegEx.test(String(email.toLowerCase()));
  const validationRules = [];

  if (email === "" || !validEmail) {
    validationRules.push(validering.INVALID_MAIL);
    changeInputFrameUponValidation("emailInputField", "fail");
  } else {
    changeInputFrameUponValidation("emailInputField", "success");
  }

  if (subject.length == 0) {
    validationRules.push(validering.INVALID_SUBJECT);
    changeInputFrameUponValidation("subjectField", "fail");
  } else {
    changeInputFrameUponValidation("subjectField", "success");
  }

  if (type === "default") {
    validationRules.push(validering.INVALID_TYPE_OF_SERVICE);
    changeInputFrameUponValidation("typeOfServiceField", "fail");
  } else {
    changeInputFrameUponValidation("typeOfServiceField", "success");
  }

  if (text.length === 0 || text.length >= 150) {
    validationRules.push(validering.INVALID_TEXT);
    changeInputFrameUponValidation("textField", "fail");
  } else {
    changeInputFrameUponValidation("textField", "success");
  }

  if (noErrors(validationRules)) {
    const preparedJson = prepareJsonObj(email, subject, type, text);
    sendMailRequest(preparedJson);
  } else {
    //console.log(validationRules)

    printValidationErrorMessages(validationRules);
  }
};

// TODO: se om dette kan forenkles :I
const validMail = validationArr =>
  validationArr.includes(validering.INVALID_MAIL);
const validSubject = validationArr =>
  validationArr.includes(validering.INVALID_SUBJECT);
const validTypeOfService = validationArr =>
  validationArr.includes(validering.INVALID_TYPE_OF_SERVICE);
const validText = validationArr =>
  validationArr.includes(validering.INVALID_TEXT);

let noErrors = validationArr =>
  !validMail(validationArr) &&
  !validSubject(validationArr) &&
  !validTypeOfService(validationArr) &&
  !validText(validationArr);

// TODO: vurder et bedre navn for denne funksjonen
let changeInputFrameUponValidation = (idValue, rule) => {
  return rule === "success"
    ? (document.getElementById(idValue).className = "form-group has-success")
    : (document.getElementById(idValue).className = "form-group has-error");
};

let printValidationErrorMessages = validationRules => {
  // TODO: dette må forbedres
  document.getElementById("validationResponse").className =
    "alert alert-danger";
  let ul = "<ul>";
  validationRules.forEach(validationRule => {
    ul += "<li>" + validationRule + "</li>";
  });
  ul += "</ul>";
  console.log(ul);
  document.getElementById("validationResponse").innerHTML = ul;
};

let prepareJsonObj = (mail, subject, typeOfService, text) => {
  return JSON.stringify({
    mail: mail,
    subject: subject,
    typeOfService: typeOfService,
    text: text
  });
};

let sendMailRequest = obj => {
  const endpoint = "assets/mail/mailerClient.php";
  const requestRoute = `http://localhost:80/${endpoint}`; // TODO: endres ved prodsetting
  fetch(requestRoute, {
    method: "post",
    header: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: obj
  }).then(response => {
    console.log(`${obj} er sendt avgårde nu...`);
  });
};
