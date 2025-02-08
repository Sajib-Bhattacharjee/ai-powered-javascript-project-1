const themeSelect = document.getElementById("theme-select");
const customColorInput = document.getElementById("custom-color");
const body = document.body;

// Load saved theme from local storage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  themeSelect.value = savedTheme;
}

// Apply selected theme
themeSelect.addEventListener("change", () => {
  const selectedTheme = themeSelect.value;
  body.className = ""; // Reset all classes
  body.classList.add(selectedTheme + "-mode");
  localStorage.setItem("theme", selectedTheme + "-mode");

  // Show/hide custom color input
  if (selectedTheme === "custom") {
    customColorInput.hidden = false;
  } else {
    customColorInput.hidden = true;
  }
});

// Handle custom color input
customColorInput.addEventListener("input", () => {
  const color = customColorInput.value;
  body.style.setProperty("--custom-bg", color);
  body.style.setProperty("--custom-text", getContrastColor(color));
  body.style.setProperty("--custom-container", lightenColor(color, 20));
  body.style.setProperty("--custom-border", lightenColor(color, 40));
});

// Helper functions
function getContrastColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#000" : "#fff";
}

function lightenColor(hex, percent) {
  const num = parseInt(hex.slice(1), 16);
  const amt = Math.round(2.55 * percent);
  const r = (num >> 16) + amt;
  const g = ((num >> 8) & 0x00ff) + amt;
  const b = (num & 0x0000ff) + amt;
  return `#${(
    0x1000000 +
    (r < 255 ? (r < 1 ? 0 : r) : 255) * 0x10000 +
    (g < 255 ? (g < 1 ? 0 : g) : 255) * 0x100 +
    (b < 255 ? (b < 1 ? 0 : b) : 255)
  )
    .toString(16)
    .slice(1)}`;
}
