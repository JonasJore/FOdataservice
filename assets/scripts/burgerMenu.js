// TODO: er dette funksjonsnavnet forklarlig nok?
let expandMenu = () => {
  const navId = document.getElementById("myTopNav")
  return navId.className === "navMenu" 
    ? navId.className += " responsiveMenu" 
    : navId.className = "navMenu"  
}
