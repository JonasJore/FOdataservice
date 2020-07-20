// quick hack for being able to collect all javascript code in one file, so i dont have to make a new <script></script>
// for every single js-file that is implemented on the site
const callJsFile = (jsFile) => {
  let script = document.createElement("script")
  script.setAttribute('type', 'text/javascript')
  script.setAttribute('src', jsFile)
  document.getElementsByTagName('head')[0].appendChild(script)
}

callJsFile('assets/js/responsiveNavbar.js')
callJsFile('assets/js/formController.js')
callJsFile('assets/js/particles.js')
callJsFile('assets/js/particlesLoader.js')


