const routes = {
  "#home": `
    <h1>Welcome to Home Page</h1>
    <p>This is the home page of our simple SPA demo.</p>
  `,
  "#about": `
    <h1>About Us</h1>
    <p>This is the about page where you can learn more about us.</p>
  `,
  "#contact": `
    <h1>Contact Us</h1>
    <p>This is the contact page. Feel free to reach out!</p>
  `,
};

// Load content based on hash
function loadContent() {
  const hash = window.location.hash || "#home";
  const content = routes[hash] || "<h1>404 - Page Not Found</h1>";
  document.getElementById("app").innerHTML = content;
}

// Handle hash changes
window.addEventListener("hashchange", loadContent);

// Load initial content
window.addEventListener("load", loadContent);
