// JavaScript for Dropdown Menu
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownToggle = document.querySelector('.dropdown-toggle');

dropdownToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropdown-toggle')) {
        const dropdowns = document.querySelectorAll('.dropdown-menu');
        dropdowns.forEach((dropdown) => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
});
