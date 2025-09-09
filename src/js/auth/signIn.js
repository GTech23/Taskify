document.getElementById('form-auth-login').addEventListener('submit', async (e) => {
     e.preventDefault();
  const emailInput = document.getElementById('email').value;
  const passwordInput = document.getElementById('password').value;
  const errorEl = document.querySelector('.error');
  try {
      const response = await fetch( "https://taskify-backend-w1ye.onrender.com/user/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
      }),
    })

    const result = await response.json();
    console.log(result)

    errorEl.style.visibility = 'visible'
    if(!response.ok){
    const errorMessage = result?.errors?.[0]?.message || null;
      errorEl.innerHTML = errorMessage ?? result.message
    }else{
      const token = result.token;
      localStorage.setItem('token', token);
      errorEl.style.color = 'green'
      errorEl.innerHTML = result.message;
       window.location = 'http://127.0.0.1:5500/src/pages/dashboard/index.html'
    }
  } catch (error) {
    console.log(error);
  }
})
