axios.get('https://bodyasavedev.pythonanywhere.com/get-payment/100').then(res => {
  document.querySelector('.pay-btn-100').innerHTML = res.data
})

axios.get('https://bodyasavedev.pythonanywhere.com/get-payment/120').then(res => {
  document.querySelector('.pay-btn-120').innerHTML = res.data
})

axios.get('https://bodyasavedev.pythonanywhere.com/get-payment/150').then(res => {
  document.querySelector('.pay-btn-150').innerHTML = res.data
})