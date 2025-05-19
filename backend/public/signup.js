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
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      signupMessage.style.color = "green";
      signupMessage.textContent = data.message || signupMessage.style.color == "green";
      signupMessage.textContent = data.message || "Signup successful! You can now log in.";
      // Optionally, clear the form fields
      document.getElementById("signupUsername").value = "";
      document.getElementById("signupEmail").value = "";
      document.getElementById("signupPassword").value = "";
    } else {
      signupMessage.style.color = "red";
      signupMessage.textContent = data.message || "Signup failed. Please try again.";
    }
  } catch (error) {
    signupMessage.style.color = "red";
    signupMessage.textContent = "An error occurred. Please try again later.";
    console.error("Signup error:", error);
  }
});

