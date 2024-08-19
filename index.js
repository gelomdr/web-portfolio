document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-expand').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const textId = this.id.replace('toggle_button', 'card_text');
            const textElement = document.getElementById(textId);
            
            if (textElement.classList.contains('expanded')) {
                textElement.classList.remove('expanded');
                this.textContent = 'Learn More';
            } else {
                textElement.classList.add('expanded');
                this.textContent = 'Show Less';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('theme-toggle');
    const themeCaption = document.getElementById('theme-caption');
    const body = document.body;

    // Check if a theme is saved in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener('change', function() {
        if (toggleSwitch.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark'); // Save theme preference to local storage
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light'); // Save theme preference to local storage
        }
    });
});