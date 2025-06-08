

const btn = document.querySelector("#toggle_modes")

const currentTheme = localStorage.getItem("theme")

if(currentTheme == "dark"){
    document.querySelector("html").classList.add("dark");
    document.querySelector("#toggle_icon").textContent = "light_mode"
} else {
    document.querySelector("#toggle_icon").textContent = "dark_mode"
}
btn.addEventListener("click", function() {
  // Toggle the .dark-theme class on each click
  document.querySelector("html").classList.toggle("dark");
  
  // Let's say the theme is equal to light
  let theme = "light";
  // If the body contains the .dark-theme class...
  if (document.querySelector("html").classList.contains("dark")) {
    // ...then let's make the theme dark
    theme = "dark";
    document.querySelector("#toggle_icon").textContent = "light_mode"
  } else {
    
    document.querySelector("#toggle_icon").textContent = "dark_mode"
  }
  // Then save the choice in localStorage
  localStorage.setItem("theme", theme);
});