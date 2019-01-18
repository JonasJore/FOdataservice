// TODO: er dette funksjonsnavnet forklarlig nok?
let expandMenu = () => {
  let x = document.getElementById("myTopNav")
  return x.className === "navMenu" ? x.className += " responsiveMenu" : x.className = "navMenu"
}
