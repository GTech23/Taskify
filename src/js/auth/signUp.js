const registerForm = document.getElementById('js-auth-form');
const errorEl = document.querySelector('.error');
registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
    const USERNAME_EL = document.getElementById("username");
  const EMAIL_EL = document.getElementById("email");
  const PASSWORD_EL = document.getElementById("password");

  try {
    const response = await fetch(
    "https://taskify-backend-w1ye.onrender.com/user/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: USERNAME_EL.value,
        email: EMAIL_EL.value,
        password: PASSWORD_EL.value,
      }),
    }
  );

  const result = await response.json();
  console.log(result)
  errorEl.style.visibility = 'visible';
  console.log(result)
  if(!response.ok){
    errorEl.innerHTML = `${result.message}`
  }else{
    errorEl.style.color ='green';
    errorEl.innerHTML =result.message
  }
  } catch (error) {
    errorEl.innerHTML = error
  }

})

