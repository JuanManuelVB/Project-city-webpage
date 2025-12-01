// load-header.js
// External loader to inject header.html into the page.
// Usage in HTML (from html/index.html):
// <div id="site-header"></div>
// <script src="../js/load-header.js" defer data-path="header.html" data-target="site-header"></script>

(function () {
  const script = document.currentScript;
  const path = (script && script.dataset && script.dataset.path) || 'header.html';
  const targetId = (script && script.dataset && script.dataset.target) || 'site-header';

  // Wait until DOM is ready (defer ensures DOM is parsed, but keep a safe guard)
  function mount() {
    const container = document.getElementById(targetId);
    if (!container) {
      console.warn('Header loader: container not found ->', targetId);
      return;
    }

    fetch(path)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch ' + path + ' (status ' + res.status + ')');
        return res.text();
      })
      .then(html => {
        container.innerHTML = html;
      })
      .catch(err => {
        console.error('Header loader error:', err);
      });
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    mount();
  } else {
    document.addEventListener('DOMContentLoaded', mount);
  }
})();
