export let changeInputFrameUponValidation = (idValue, rule) =>
  rule === 'success'
    ? (document.getElementById(idValue).className = 'form-group has-success')
    : (document.getElementById(idValue).className = 'form-group has-error')

let printValidationErrorMessages = validationErrorMessages => {
  const responseDiv = document.getElementById('validationResponse')
  responseDiv.className = 'alert alert-danger'
  let ul = '<ul>'
  validationErrorMessages.forEach(validationErrorMessage => {
    ul += '<li>' + validationErrorMessage + '</li>'
  })
  ul += '</ul>'
  responseDiv.innerHTML = ul
}

let prepareJsonObj = (mail, subject, typeOfService, text) => {
  return JSON.stringify({
    mail,
    subject,
    typeOfService,
    text
  })
}

let sendMailRequest = obj => {
  const endpoint = 'assets/php/mail/mailerClient.php'
  const requestRoute = `./${endpoint}`

  fetch(requestRoute, {
    method: 'post',
    header: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: obj
  }).then(response => {
    console.log(response)
  })
}

module.exports = {
  prepareJsonObj,
  sendMailRequest,
  changeInputFrameUponValidation,
  printValidationErrorMessages
}