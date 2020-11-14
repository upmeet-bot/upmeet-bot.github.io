// axios.get('https://bodyasavedev.pythonanywhere.com/get-payment/100').then(res => {
//   document.querySelector('.pay-btn-100').innerHTML = res.data
// })

// axios.get('https://bodyasavedev.pythonanywhere.com/get-payment/120').then(res => {
//   document.querySelector('.pay-btn-120').innerHTML = res.data
// })

// axios.get('https://bodyasavedev.pythonanywhere.com/get-payment/150').then(res => {
//   document.querySelector('.pay-btn-150').innerHTML = res.data
// })

document.querySelector('.cancel').addEventListener('click', () => {
  document.querySelector('.hide-credentials').style.display = 'none'
})

document.querySelector('.pay-btn-100').addEventListener('click', () => {
  document.querySelector('.hide-credentials').action = 'https://bodyasavedev.pythonanywhere.com/get-payment/100'
  document.querySelector('.hide-credentials').style.display = 'block'
})

document.querySelector('.pay-btn-120').addEventListener('click', () => {
  document.querySelector('.hide-credentials').action = 'https://bodyasavedev.pythonanywhere.com/get-payment/120'
  document.querySelector('.hide-credentials').style.display = 'block'
})

document.querySelector('.pay-btn-150').addEventListener('click', () => {
  document.querySelector('.hide-credentials').action = 'https://bodyasavedev.pythonanywhere.com/get-payment/150'
  document.querySelector('.hide-credentials').style.display = 'block'
})

document.querySelector('button').addEventListener('click', (e) => {
  email = document.querySelector('#ch-email').value
  tel = document.querySelector('#ch-tel').value
  fullname = document.querySelector('#ch-fullname').value

  if (!email || !tel || !fullname) {
    e.preventDefault()
  }
})