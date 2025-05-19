const loginBtn = document.getElementById("loginBtn");
const loginMessage = document.getElementById("loginMessage");

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    loginMessage.textContent = "Please enter both email and password";
    loginMessage.style.color = "red";
    return;
  }

  try {
    const res = await fetch("https://bookstore-backend.onrender.com/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      loginMessage.style.color = "green";
      loginMessage.textContent = "Login successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "books.html"; // local file (you may need to host this)
      }, 1000);
    } else {
      loginMessage.style.color = "red";
      loginMessage.textContent = data.message || "Login failed";
    }
  } catch (err) {
    loginMessage.style.color = "red";
    loginMessage.textContent = "An error occurred";
    console.error(err);
  }
});
