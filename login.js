document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Send login data to server for validation
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Redirect to respective dashboard
      window.location.href = data.role === "student" ? "/student-dashboard" : "/teacher-dashboard";
    } else {
      alert("Invalid login");
    }
  });
});
