function submitForm() {
    var fullName = document.getElementById("fullname").value;
    localStorage.setItem("fullName", fullName);
    return true;
  }
  