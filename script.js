const panels = document.querySelectorAll('.panel') // pseudo array of all panels

panels.forEach(panel => { // add active class
  panel.addEventListener('click', () => {
    removeActiveClasses() 
    panel.classList.add('active')
  })
})

function removeActiveClasses() { // remove active class from all others
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}