/**
 * TravelAssistant - Theme Manager
 * Handles Dark/Light mode toggling and persistence.
 */

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateToggleUI(isDark);
}

function updateToggleUI(isDark) {
    const btn = document.getElementById('theme-toggle');
    const checkbox = document.getElementById('theme-checkbox');

    if (btn) {
        btn.innerHTML = isDark ? '☀️' : '🌙';
        btn.title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }

    if (checkbox) {
        checkbox.checked = isDark;
    }
}

// Initialize theme on load
(function () {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    if (isDark) {
        document.body.classList.add('dark-mode');
    }

    // Update UI when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => updateToggleUI(isDark));
    } else {
        updateToggleUI(isDark);
    }
})();
