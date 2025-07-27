document.addEventListener('DOMContentLoaded', function() {
    const enterBtn = document.getElementById('enter-btn');
    const splash = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    if (enterBtn) {
        enterBtn.addEventListener('click', () => {
            splash.style.display = 'none';
            mainContent.style.display = 'block';
        });
    }
});

function openSidebar() {
    alert("Sidebar will open here (you can replace this with real sidebar code).");
}