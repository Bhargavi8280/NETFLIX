// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Add event listener to the email input and button
const emailInput = document.querySelector(".email__input");
const startButton = document.querySelector(".primary__button");

startButton.addEventListener("click", function () {
  const emailValue = emailInput.value.trim();
  if (!validateEmail(emailValue)) {
    alert("Please enter a valid email address.");
  } else {
    alert("Thank you! We will send you updates to " + emailValue);
    emailInput.value = ""; // Clear the input
  }
});

// Language switching functionality
const languageSelect = document.getElementById("languagesSelect");

const translations = {
  english: {
    heroTitle: "Unlimited Movies TV,<br />Shows and More.",
    heroSubtitle: "Watch anywhere and cancel anytime.",
  },
  hindi: {
    heroTitle: "अनलिमिटेड मूवीज़ टीवी,<br />शो और अधिक।",
    heroSubtitle: "कहीं भी देखें और कभी भी रद्द करें।",
  },
};

languageSelect.addEventListener("change", function () {
  const selectedLanguage = this.value;

  document.getElementById("heroTitle").innerHTML =
    translations[selectedLanguage].heroTitle;
  document.getElementById("heroSubtitle").innerHTML =
    translations[selectedLanguage].heroSubtitle;

  alert(`Language changed to: ${selectedLanguage}`);
});

// Sign In functionality
const signInButton = document.querySelector(".sign-in-button");
const signInOptions = document.querySelector(".sign-in-options");
const loginButton = document.querySelector(".login-button");
const loginInput = document.querySelector(".login__input");
let isSignedIn = false; // Change this based on your authentication logic

signInButton.addEventListener("click", function () {
  if (isSignedIn) {
    alert("You are already signed in. Proceed to login.");
    // Logic to redirect to login or show login form can go here
  } else {
    signInOptions.style.display = "block"; // Show sign-in options
  }
});

// Login button event
loginButton.addEventListener("click", function () {
  const loginValue = loginInput.value.trim();
  if (!validateEmail(loginValue)) {
    alert("Please enter a valid email address.");
  } else {
    alert("Logging in with: " + loginValue);
    // Here you would typically handle the login logic
    isSignedIn = true; // Update sign-in status
    signInOptions.style.display = "none"; // Hide sign-in options after login
    loginInput.value = ""; // Clear the input
  }
});

// Hide sign-in options when clicking outside
document.addEventListener("click", function (event) {
  if (
    !signInOptions.contains(event.target) &&
    !signInButton.contains(event.target)
  ) {
    signInOptions.style.display = "none"; // Hide if clicked outside
  }
});
