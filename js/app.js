let url = new URLSearchParams(window.location.search)
document.getElementById('name').innerHTML = url.get('name')
document.getElementById('address').innerHTML = url.get('address')
document.getElementById('email').innerHTML = url.get('email')
document.getElementById('message').innerHTML = url.get('message')

