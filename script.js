document.getElementById('showLetter').addEventListener('click', function() {
    document.getElementById('letter').style.display = 'block';
    this.style.display = 'none';

    // Explosão de emojis
    for (let i = 0; i < 30; i++) {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji-explosion');
        emoji.textContent = '💞';
        emoji.style.left = `${Math.random() * 100}%`;
        emoji.style.top = `${Math.random() * 100}%`;
        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 1000);
    }
});

document.body.insertAdjacentHTML('afterbegin', '<div class="background-pattern"></div>');
