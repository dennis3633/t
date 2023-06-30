// JavaScript (details.js)
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the login details from the query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const loginName = urlParams.get("loginName");
    const admissionNumber = urlParams.get("admissionNumber");
  
    // Update the login details in the page
    document.getElementById("loginName").textContent = loginName;
    document.getElementById("loginNameDetail").textContent = loginName;
    document.getElementById("admissionNumber").textContent = admissionNumber;
    document.getElementById("welcomeText").textContent = "Welcome to Seku, " + loginName + "!";
  });
  