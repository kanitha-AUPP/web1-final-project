// localStorage remembers the choice so every page looks the same.
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

// Runs when the button is clicked (onclick="toggleTheme()")
function toggleTheme() {
  document.body.classList.toggle("light");

  // remember the choice for the other pages
  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }

  updateButton();
}

// shows the right label on the button
function updateButton() {
  var button = document.getElementById("theme-btn");
  if (document.body.classList.contains("light")) {
    button.textContent = "dark mode";
  } else {
    button.textContent = "light mode";
  }
}

// set the correct label when the page first loads
updateButton();
