const USERNAME_EL = document.getElementById("username");
const EMAIL_EL = document.getElementById("email");
const PASSWORD_EL = document.getElementById("password");
const AUTH_FORM = document.getElementById("js-auth-form");

AUTH_FORM.addEventListener("submit", async (e) => {
  e.preventDefault();

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
  console.log(response);
});
