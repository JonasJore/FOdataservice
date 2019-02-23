const validering = {
  'INVALID_MAIL':'INVALID_MAIL', 
  'INVALID_SUBJECT':'INVALID_SUBJECT',
  'INVALID_TYPE_OF_SERVICE':'INVALID_TYPE_OF_SERVICE',
  'INVALID_TEXT':'INVALID_TEXT'
}

Object.freeze(validering)

let validation = (email, subject, type, text) => {
  const emailRegEx = /^[a-å|0-9._%+-]+@[a-z|0-9.-]+\.[a-z]{2,}$/
  const validEmail = emailRegEx.test(String(email.toLowerCase()))
  const validationRules = []
  if(email === '' || !validEmail) {
    validationRules.push(validering.INVALID_MAIL)
  } 
  if(subject.length == 0) {
    validationRules.push(validering.INVALID_SUBJECT)
  } 
  if(type === 'default') {
    validationRules.push(validering.INVALID_TYPE_OF_SERVICE)
  } 
  if(text.length === 0 || text.length > 150) {
    validationRules.push(validering.INVALID_TEXT)
  }
  console.log(noErrors(validationRules))
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
    "type-of-service": type,
    "text": text
  })
}
