const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
  ];
  
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  const securedContent = document.getElementById("securedContent");
  const loginMessage = document.getElementById("loginMessage");
  const registerMessage = document.getElementById("registerMessage");
  
  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      loginMessage.innerText = "Login successful!";
      loginMessage.style.color = "green";
      loginForm.reset();
      showSecuredContent();
    } else {
      loginMessage.innerText = "Invalid username or password";
      loginMessage.style.color = "red";
    }
  });
  
  registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = event.target.elements.regUsername.value;
    const password = event.target.elements.regPassword.value;
    if (users.some(u => u.username === username)) {
      registerMessage.innerText = "Username already exists";
      registerMessage.style.color = "red";
    } else {
      users.push({ username, password });
      registerMessage.innerText = "Registration successful!";
      registerMessage.style.color = "green";
      registerForm.reset();
    }
  });
  
  function showSecuredContent() {
    securedContent.style.display = "block";
  }
  