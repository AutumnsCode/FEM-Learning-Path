const btn = document.getElementById('btn-share')
const shareContent = document.getElementById('share')



btn.addEventListener('click', () => {
  const isNotExpanded = btn.getAttribute('aria-expanded') === 'false'
  const isHidden = shareContent.getAttribute('aria-hidden') === 'true'

  if(isNotExpanded && isHidden) {
    btn.setAttribute('aria-expanded', 'true')
    shareContent.setAttribute('aria-hidden', 'false')
  } else {
    btn.setAttribute('aria-expanded', 'false')
    shareContent.setAttribute('aria-hidden', 'true')
  }
})