const rootElement = document.getElementById('root');
const element = document.createElement('div');
element.textContent = 'Hello World, man. Will this still work?';
element.className = 'container';
rootElement.appendChild(element);

// npx browser-sync start --server --files "./*.html" --no-open --no-notify --directory
