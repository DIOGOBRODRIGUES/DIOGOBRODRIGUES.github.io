const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

Reveal.initialize({
  width: 1280,
  height: 720,
  margin: 0,
  minScale: 0.2,
  maxScale: 2,
  controls: true,
  controlsTutorial: true,
  progress: true,
  slideNumber: 'c/t',
  showSlideNumber: 'all',
  hash: true,
  history: true,
  center: false,
  overview: true,
  keyboard: true,
  touch: true,
  transition: reducedMotion ? 'none' : 'slide',
  transitionSpeed: reducedMotion ? 'fast' : 'default',
  backgroundTransition: reducedMotion ? 'none' : 'fade',
  autoAnimate: !reducedMotion,
  autoAnimateDuration: reducedMotion ? 0 : 0.55,
  pdfSeparateFragments: false,
  plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealSearch, RevealZoom],
})

const menuButton = document.getElementById('menu-toggle')
const helpButton = document.getElementById('help-toggle')
const menu = document.getElementById('section-menu')
const help = document.getElementById('help-panel')

function setPanel(panel, button, visible) {
  panel.hidden = !visible
  button.setAttribute('aria-expanded', String(visible))
}

function closePanels() {
  setPanel(menu, menuButton, false)
  setPanel(help, helpButton, false)
}

menuButton.addEventListener('click', () => {
  const shouldOpen = menu.hidden
  closePanels()
  setPanel(menu, menuButton, shouldOpen)
})

helpButton.addEventListener('click', () => {
  const shouldOpen = help.hidden
  closePanels()
  setPanel(help, helpButton, shouldOpen)
})

menu.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-target-section]')
  if (!button) return

  const name = button.dataset.targetSection
  const target = document.querySelector(`.slides > section[data-section-start="${name}"]`)
  const slides = [...document.querySelectorAll('.slides > section')]
  const index = slides.indexOf(target)

  if (index >= 0) Reveal.slide(index)
  closePanels()
})

document.addEventListener('click', (event) => {
  if (!event.target.closest('.deck-tools')) closePanels()
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closePanels()
})

Reveal.on('slidechanged', closePanels)
