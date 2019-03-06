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
  const validationRules = []
  if(email === '' || !validEmail) {
    validationRules.push(validering.INVALID_MAIL)
    console.log(validering.INVALID_MAIL)
  } if(subject.length == 0) {
    validationRules.push(validering.INVALID_SUBJECT)
    console.log(validering.INVALID_SUBJECT)
  } if(type === 'default') {
    validationRules.push(validering.INVALID_TYPE_OF_SERVICE)
    console.log(validering.INVALID_TYPE_OF_SERVICE)
  } if(text.length === 0 || text.length >= 150) {
    validationRules.push(validering.INVALID_TEXT)
    console.log(validering.INVALID_TEXT)
  } 
  
  if(noErrors(validationRules)) {
    const preparedJson = prepareJsonObj(email, subject, type, text)
    sendMailRequest(preparedJson)
  }
}

const validMail = validationArr => validationArr.includes(validering.INVALID_MAIL) ? false : true
const validSubject = validationArr => validationArr.includes(validering.INVALID_SUBJECT) ? false : true
const validTypeOfService = validationArr => validationArr.includes(validering.INVALID_TYPE_OF_SERVICE) ? false : true
const validText = validationArr => validationArr.includes(validering.INVALID_TEXT) ? false : true

let noErrors = validationArr => validMail(validationArr) && validSubject(validationArr) && validTypeOfService(validationArr) && validText(validationArr)

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
