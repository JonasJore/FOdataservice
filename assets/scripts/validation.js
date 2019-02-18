let validation = (email, subject, text) => {
  const emailRegEx = /^[a-z|0-9._%+-]+@[a-z|0-9.-]+\.[a-z]{2,}$/
  const validEmail = emailRegEx.test(String(email.toLowerCase()))
  console.log(!!validEmail)
  
}
