let expandMenu = () => {
  const navId = document.getElementById("myTopNav");
  return navId.className === "navMenu"
    ? (navId.className += " responsiveMenu")
    : (navId.className = "navMenu");
};
