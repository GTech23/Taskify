
async function handleRegister(){
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
  errorEl.style.visibility = 'visible';
  console.log(result)
  if(!response.ok){
    errorEl.innerHTML = `${result.error}`
  }else{
    errorEl.style.color ='green';
    errorEl.innerHTML =result.message
    window.location = 'http://127.0.0.1:5500/src/pages/login.html'
  }
  } catch (error) {
    error.innerHTML = error
  }
}

handleRegister();