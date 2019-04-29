const validering = {
	INVALID_MAIL: 'INVALID_MAIL',
	INVALID_SUBJECT: 'INVALID_SUBJECT',
	INVALID_TYPE_OF_SERVICE: 'INVALID_TYPE_OF_SERVICE',
	INVALID_TEXT: 'INVALID_TEXT'
}
Object.freeze(validering)

let validation = (email, subject, type, text) => {
	let validationRules = []
	let validationErrorMessages = []
	const emailRegEx = /^[a-å|0-9._%+-]+@[a-z|0-9.-]+\.[a-z]{2,}$/
	const validEmail = emailRegEx.test(String(email.toLowerCase()))

	if (email === '' || !validEmail) {
		validationRules = [...validationRules, validering.INVALID_MAIL]
		validationErrorMessages = [
			...validationErrorMessages,
			'epostadressen er ugyldig eller inneholder stavefeil, venligst fyll inn dette riktig'
		]
		changeInputFrameUponValidation('emailInputField', 'fail')
	} else {
		changeInputFrameUponValidation('emailInputField', 'success')
	}

	if (subject.length == 0 || checkWhitespace(subject)) {
		validationRules = [...validationRules, validering.INVALID_SUBJECT]
		validationErrorMessages = [...validationErrorMessages, 'emnet er ugyldig']
		changeInputFrameUponValidation('subjectField', 'fail')
	} else {
		changeInputFrameUponValidation('subjectField', 'success')
	}

	if (type === 'default') {
		validationRules = [...validationRules, validering.INVALID_TYPE_OF_SERVICE]
		validationErrorMessages = [...validationErrorMessages, 'type henvendelse mangler']
		changeInputFrameUponValidation('typeOfServiceField', 'fail')
	} else {
		changeInputFrameUponValidation('typeOfServiceField', 'success')
	}

	if (text.length === 0 || text.length >= 200 || checkWhitespace(text)) {
		validationRules = [...validationRules, validering.INVALID_TEXT]
		validationErrorMessages = [
			...validationErrorMessages,
			'teksten du har fylt inn er ugyldig. husk at en melding ikke kan være lenger enn 200 tegn'
		]
		changeInputFrameUponValidation('textField', 'fail')
	} else {
		changeInputFrameUponValidation('textField', 'success')
	}

	if (noErrors(validationRules)) {
		const preparedJson = prepareJsonObj(email, subject, type, text)
		sendMailRequest(preparedJson)
		printValidationSucceededMessage()
	} else {
		printValidationErrorMessages(validationErrorMessages)
	}
}

const validMail = validationArr => !validationArr.includes(validering.INVALID_MAIL)
const validSubject = validationArr => !validationArr.includes(validering.INVALID_SUBJECT)
const validTypeOfService = validationArr => !validationArr.includes(validering.INVALID_TYPE_OF_SERVICE)
const validText = validationArr => !validationArr.includes(validering.INVALID_TEXT)

const checkWhitespace = string => {
	return !string.replace(/\s/g, '')
}

let noErrors = validationArr =>
	validMail(validationArr) &&
	validSubject(validationArr) &&
	validTypeOfService(validationArr) &&
	validText(validationArr)

let changeInputFrameUponValidation = (idValue, rule) => {
	return rule === 'success'
		? (document.getElementById(idValue).className = 'form-group has-success')
		: (document.getElementById(idValue).className = 'form-group has-error')
}

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

let printValidationSucceededMessage = () => {
	const responseDiv = document.getElementById('validationResponse')
	responseDiv.className = 'alert alert-success'
	responseDiv.innerHTML = '<ul><li>Forespørsel sendt, du vil bli kontaktet snart</li></ul>'
}

let prepareJsonObj = (mail, subject, typeOfService, text) => {
	return JSON.stringify({
		mail: mail,
		subject: subject,
		typeOfService: typeOfService,
		text: text
	})
}

let sendMailRequest = obj => {
	const endpoint = 'assets/mail/mailerClient.php'
	const requestRoute = `https:/fodataservice.com/${endpoint}`

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