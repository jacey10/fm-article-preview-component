const shareButton = document.getElementById('shareButton');
const shareBox = document.getElementById('shareBox');
const authorBlock = document.getElementById('authorBlock');

shareButton.addEventListener('click', () => {
    const isOpen = shareBox.classList.contains('active');
    shareBox.classList.toggle('active');
    authorBlock.classList.toggle('hidden', !isOpen);
});
