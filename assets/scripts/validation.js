// TODO: validation.js er ikke lenger ett forklarende nok filnavn :I
const validering = {
  INVALID_MAIL: 'INVALID_MAIL', 
  INVALID_SUBJECT: 'INVALID_SUBJECT',
  INVALID_TYPE_OF_SERVICE: 'INVALID_TYPE_OF_SERVICE',
  INVALID_TEXT: 'INVALID_TEXT'
}
Object.freeze(validering)

let validation = (email, subject, type, text) => {
  const emailRegEx = /^[a-å|0-9._%+-]+@[a-z|0-9.-]+\.[a-z]{2,}$/
  const validEmail = emailRegEx.test(String(email.toLowerCase()))
  const hasErrorClass = 'form-group has-error'
  const sucessClass = 'form-group has-success'
  const validationRules = []
  if(email === '' || !validEmail) {
    validationRules.push(validering.INVALID_MAIL)
    document.getElementById('emailInputField').className = hasErrorClass
    console.log(validering.INVALID_MAIL)
  } else {
    document.getElementById('emailInputField').className = sucessClass
  }
  
  if(subject.length == 0) {
    validationRules.push(validering.INVALID_SUBJECT)
    document.getElementById('subjectField').className = hasErrorClass
    console.log(validering.INVALID_SUBJECT)
  } else {
    document.getElementById('subjectField').className = sucessClass
  } 
  
  if(type === 'default') {
    validationRules.push(validering.INVALID_TYPE_OF_SERVICE)
    document.getElementById('typeOfServiceField').className = hasErrorClass
    console.log(validering.INVALID_TYPE_OF_SERVICE)
  } else {
    document.getElementById('typeOfServiceField').className = sucessClass
  }
  
  if(text.length === 0 || text.length >= 150) {
    validationRules.push(validering.INVALID_TEXT)
    const textField = document.getElementById('textField')
    textField.className += hasErrorClass
    console.log(validering.INVALID_TEXT)
  } else {
    document.getElementById('textField').className = sucessClass
  }
  
  if(noErrors(validationRules)) {
    const preparedJson = prepareJsonObj(email, subject, type, text)
    sendMailRequest(preparedJson)
  }
}

// TODO: se om dette kan forenkles :I
const validMail = validationArr => validationArr.includes(validering.INVALID_MAIL)
const validSubject = validationArr => validationArr.includes(validering.INVALID_SUBJECT)
const validTypeOfService = validationArr => validationArr.includes(validering.INVALID_TYPE_OF_SERVICE)
const validText = validationArr => validationArr.includes(validering.INVALID_TEXT)

let noErrors = validationArr => !validMail(validationArr) && !validSubject(validationArr) && !validTypeOfService(validationArr) && !validText(validationArr)

let prepareJsonObj = (mail, subject, type, text) => {
  return JSON.stringify({
    "mail": mail,
    "subject": subject,
    "typeOfService": type,
    "text": text
  })
}

let sendMailRequest = (obj) => {
  const endpoint = 'assets/mail/mailerClient.php'
  const requestRoute = `http://localhost:80/${endpoint}` // TODO: endres ved prodsetting
  fetch(requestRoute, {
    method: 'post',
    header: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: obj
  }).then((response) => {
    console.log(`${obj} er sendt avgårde nu...`)
  })
}
