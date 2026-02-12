// Theme toggle functionality
(function() {
  'use strict';

  // Get the current theme based on priority:
  // 1. User's saved preference (localStorage)
  // 2. OS preference (prefers-color-scheme)
  // 3. Default to light
  function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check OS preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  }

  // Apply theme by loading the appropriate CSS file
  function applyTheme(theme) {
    const existingLink = document.getElementById('theme-css');
    if (existingLink) {
      existingLink.remove();
    }

    const cssFile = theme === 'dark' 
      ? '/assets/css/skin-dark.css' 
      : '/assets/css/skin-light.css';
    
    const link = document.createElement('link');
    link.id = 'theme-css';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = cssFile;
    document.head.appendChild(link);
    
    // Update toggle button icon if it exists
    updateToggleIcon(theme);
  }

  // Update the toggle button icon
  function updateToggleIcon(theme) {
    const icon = document.getElementById('theme-toggle-icon');
    if (icon) {
      // Remove both possible icons
      icon.classList.remove('fa-moon', 'fa-sun');
      
      if (theme === 'dark') {
        icon.classList.add('fa-sun');
        icon.title = 'Switch to light mode';
      } else {
        icon.classList.add('fa-moon');
        icon.title = 'Switch to dark mode';
      }
    }
  }

  // Toggle between light and dark themes
  function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || getInitialTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  }

  // Initialize theme immediately (before DOM loads) to avoid flash
  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);

  // Update toggle button icon after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      updateToggleIcon(initialTheme);
    });
  } else {
    // DOM is already loaded
    updateToggleIcon(initialTheme);
  }

  // Listen for OS theme changes if user hasn't set a preference
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        applyTheme(newTheme);
      }
    });
  }

  // Make toggleTheme available globally
  window.toggleTheme = toggleTheme;
})();
