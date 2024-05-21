function revealMessage() {
    const hiddenMessage = document.getElementById('hiddenMessage');
    if (hiddenMessage.style.display === 'none' || hiddenMessage.style.display === '') {
        hiddenMessage.style.display = 'block';
    } else {
        hiddenMessage.style.display = 'none';
    }
}
