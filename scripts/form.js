  document.querySelector("form").addEventListener("submit", function(event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    
    if (password !== confirmPassword) {
      event.preventDefault();
      alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
      document.getElementById("password").value = "";
      document.getElementById("confirm-password").value = "";
      document.getElementById("password").focus();
    }
  });

