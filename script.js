// Get all share buttons (both main and close button)
const shareButtons = document.querySelectorAll('.share--button');
const shareBox = document.getElementById('shareBox');
const authorBlock = document.getElementById('authorBlock');

// Toggle function
const toggleShare = () => {
    const isOpen = shareBox.classList.contains('active');
    shareBox.classList.toggle('active');
    authorBlock.classList.toggle('hidden', !isOpen);
}; 

// Add click listener to all share buttons
shareButtons.forEach(button => {
    button.addEventListener('click', toggleShare);
});
