const logoutBtn = document.getElementById('js-logout-btn')

logoutBtn.addEventListener('click', (e) => {
    localStorage.removeItem('token')
})