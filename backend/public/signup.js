const signupBtn = document.getElementById("signupBtn");
const signupMessage = document.getElementById("signupMessage");

signupBtn.addEventListener("click", async () => {
  const name = document.getElementById("signupUsername").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();

  if (!name || !email || !password) {
    signupMessage.textContent = "Please fill all fields";
    signupMessage.style.color = "red";
    return;
  }

  try {
    const res = await fetch("https://bookstore-backend.onrender.com/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      signupMessage.style.color = "green";
      signupMessage.textContent = data.message || "Signup successful!";
    } else {
      signupMessage.style.color = "red";
      signupMessage.textContent = data.message || "Signup failed";
    }
  } catch (err) {
    signupMessage.style.color = "red";
    signupMessage.textContent = "An error occurred";
    console.error(err);
  }
});
