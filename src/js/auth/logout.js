const logoutBtn = document.getElementById('js-logout-btn')

logoutBtn.addEventListener('click', (e) => {
    localStorage.removeItem('token');
    
    window.location.href = 'http://127.0.0.1:5500/src/pages/login.html'
})