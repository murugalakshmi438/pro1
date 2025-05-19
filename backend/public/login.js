const loginBtn = document.getElementById("loginBtn");
const loginMessage = document.getElementById("loginMessage");

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    loginMessage.textContent = "Please enter email and password";
    loginMessage.style.color = "red";
    return;
  }

  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      // Save token or user info in localStorage/sessionStorage if using JWT
      localStorage.setItem("token", data.token);
      // Redirect to books page after login success
      window.location.href = "/books.html";
    } else {
      loginMessage.textContent = data.message || "Login failed";
      loginMessage.style.color = "red";
    }
  } catch (err) {
    loginMessage.textContent = "Server error. Try again later.";
    loginMessage.style.color = "red";
  }
});
