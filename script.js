const yesCheckbox = document.getElementById('yes');
const noLabel = document.getElementById('no-label');
const noCheckbox = document.getElementById('no');
const catGif = document.getElementById('cat-gif');

function enviarEmail (resposta) {
    fetch('send_email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `resposta=${encodeURIComponent(resposta)}`   
    });
}

yesCheckbox.addEventListener('change', () => {
    if (yesCheckbox.checked) {
        enviarEmail('sim');

        catGif.style.display = 'block';
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '100vh';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 2000);
        }
}
});

// Detecta se ela conseguiu clicar no "Não"
noCheckbox.addEventListener('change', () => {
    if (noCheckbox.checked) {
        enviarEmail('Não');
    }
});

// movimento do botão "não"
noLabel.addEventListener('mouseenter', moveNoLabel);
noLabel.addEventListener('touchstart', moveNoLabel);

function moveNoLabel () {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noLabel.style.position = 'aboslute';
    noLabel.style.left = `${x}px`;
    noLabel.style.top = `${y}px`;
}