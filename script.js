// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAIe-dP7kKDXqm0xLfPiQCtUq417cwNk7U",
  authDomain: "login2-974a0.firebaseapp.com",
  projectId: "login2-974a0",
  storageBucket: "login2-974a0.firebasestorage.app",
  messagingSenderId: "189059728614",
  appId: "1:189059728614:web:4c60c5892903aa891d6727",
  measurementId: "G-9V30Z3LVM2",
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM Elements
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const switchToSignup = document.getElementById("switch-to-signup");
const switchToLogin = document.getElementById("switch-to-login");
const panelContainer = document.getElementById("container");
const createAccountHeader = document.querySelector(".sign-up-container h1");

// Auto-slide to welcome screen first
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    panelContainer.classList.add("right-panel-active");
  }, 2000);
});

// Panel toggle
switchToSignup.addEventListener("click", (e) => {
  e.preventDefault();
  panelContainer.classList.add("right-panel-active");

  // Wait for animation to complete before scrolling and expanding height
  setTimeout(() => {
    // Ensure header is in view
    createAccountHeader.scrollIntoView({ behavior: "smooth", block: "start" });

    // Ensure container height fits new content
    panelContainer.style.height = `${panelContainer.scrollHeight}px`;
  }, 500); // match transition duration if any
});


switchToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  panelContainer.classList.remove("right-panel-active");
  panelContainer.style.height = ""; // reset height if needed
});

// Handle Sign Up
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById("signup-confirm-password").value;
  const username = document.getElementById("signup-username").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup successful!");
      localStorage.setItem("username", username);
      panelContainer.classList.remove("right-panel-active"); // slide back to login
      panelContainer.style.height = ""; // reset height
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Handle Login
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const loginInput = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const username = localStorage.getItem("username");

  signInWithEmailAndPassword(auth, loginInput, password)
    .then((userCredential) => {
      if (
        loginInput === username ||
        loginInput === userCredential.user.email
      ) {
        alert("Login Successful!");
        window.location.href = `login_welcome.html?user=${username}`;
      } else {
        alert("Incorrect username or email.");
      }
    })
    .catch((error) => {
      alert("Incorrect email or password.");
    });
});
