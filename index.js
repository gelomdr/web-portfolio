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