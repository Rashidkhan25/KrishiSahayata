document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const viewDetailsBtn = card.querySelector('.view-details');
        const details = card.querySelector('.details');

        viewDetailsBtn.addEventListener('click', () => {
            card.classList.toggle('active');
            viewDetailsBtn.textContent = card.classList.contains('active') ? 'Hide Details' : 'View Details';
        });
    });
});
