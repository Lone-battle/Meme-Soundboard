fetch('./memes.json')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(el => {
            const container = document.querySelector('.container');

            const btn = document.createElement('button');
            const audio = document.createElement('audio');

            audio.setAttribute('src', el.audio);
            audio.setAttribute('id', el.id);

            btn.textContent = el.text;
            btn.setAttribute('class', `btn btn-${el.profane == true ? 'danger' : 'primary'}`);
            btn.addEventListener('click', () => {
                audio.play();
            });

            document.head.appendChild(audio);
            container.appendChild(btn);
        });
    });