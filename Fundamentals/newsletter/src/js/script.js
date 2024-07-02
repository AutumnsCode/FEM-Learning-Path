import '../css/main.css'


const submitBtn = document.getElementById('btn-submit')
const dismissBtn = document.getElementById('btn-dismiss')
let emailInput = document.getElementById('email')
const wrapper = document.querySelector(".wrapper")
const sections = wrapper.querySelectorAll('section')
const form = document.getElementById('form')

// check if the pattern correct when the input fiele lose his focus
emailInput.addEventListener('focusout', (e) => {checkEmailValidation(e)})

submitBtn.addEventListener('click', handleSubmit)
submitBtn.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    handleSubmit()
  }
})

dismissBtn.addEventListener('click', handleDismiss)

dismissBtn.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    handleDismiss()
  }
})

function handleSubmit() {
  const isValid = checkEmail() == true
  if(isValid){
    const userEmail = document.getElementById('user-email')
    userEmail.textContent = emailInput.value
    emailInput.value = ''
    wrapper.setAttribute('data-active', `${sections[1].id}`)
  } else {
    form.setAttribute('data-correct', 'false')
    emailInput.setAttribute('aria-invalid', 'true')
  }
}

function handleDismiss() {
  wrapper.setAttribute('data-active', `${sections[0].id}`)
  userEmail.textContent = ''
}


function checkEmailValidation(event) {
  event.preventDefault()
  const isNotValid =  checkEmail() == false

  if(isNotValid || emailInput.value === '') {
    form.setAttribute('data-correct', 'false')
    emailInput.setAttribute('aria-invalid', 'true')
  } else {
    form.setAttribute('data-correct', 'true')
    emailInput.setAttribute('aria-invalid', 'false')
  }
}

function checkEmail() {
  let isCorrect = false;
  const emailSyntax =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const correctSyntax = emailSyntax.test(emailInput.value)

  if(correctSyntax) {
    isCorrect = true
    return isCorrect
  } else {
    return isCorrect
  }
}
