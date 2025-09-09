window.addEventListener('DOMContentLoaded', ()=> {
    const token = localStorage.getItem('token');
    console.log(token)
    if(!token){
        window.location = 'http://127.0.0.1:5500/src/pages/login.html';
        return;
    }
    const decodedToken  = jwt_decode(token);
    console.log(decodedToken);

    const userEmailEl = document.querySelector('.auth-user-email');
    const userLetter = document.querySelector('.auth-username-single').innerHTML = decodedToken.email[0].toUpperCase()
    const username = document.querySelector('.auth-username').innerHTML = decodedToken.username

    userEmailEl.innerHTML = decodedToken.email
});

