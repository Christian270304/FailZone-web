// Particles
const container = document.getElementById('particles')
function createParticle() {
  const el = document.createElement('div')
  el.className = 'particle'
  el.style.left = Math.random() * 100 + '%'
  el.style.setProperty('--dx', (Math.random() - 0.5) * 120 + 'px')
  const size = 1 + Math.random() * 2
  el.style.width = el.style.height = size + 'px'
  const dur = 6 + Math.random() * 10
  el.style.animationDuration = dur + 's'
  el.style.animationDelay = Math.random() * 6 + 's'
  container.appendChild(el)
  setTimeout(() => el.remove(), (dur + 6) * 1000)
}
setInterval(createParticle, 600)
for (let i = 0; i < 12; i++) createParticle()

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 120)
    }
  })
}, { threshold: 0.1 })

document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

// Scroll arrow -> step 1
const scrollHint = document.querySelector('.scroll-hint')
const step1 = document.getElementById('step-1')
if (scrollHint && step1) {
  scrollHint.style.cursor = 'pointer'
  scrollHint.addEventListener('click', () => {
    step1.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}