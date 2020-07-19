const myFunction = () => {
  const navbarElement = document.getElementById("top-navbar");
  if (navbarElement.className === "top-navbar") {
    navbarElement.className += " responsive";
  } else {
    navbarElement.className = "top-navbar";
  }
}
