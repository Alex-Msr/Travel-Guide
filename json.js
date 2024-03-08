const req = new XMLHttpRequest();

req.open('GET', 'data.json');

req.responseType = 'json';

req.addEventListener('readystatechange', () => {
    if (req.readyState === XMLHttpRequest.DONE) {
        switch (req.status) {
            case 200:
                const content = document.getElementById('data-json');
                for (let history of req.response) {
                    const p = document.createElement('p');
                    p.innerText = `${history.text}`;
                    content.appendChild(p);
                }
                break;

            case 404:
                console.error('Not Found');
                break;
        }
    }
});

req.send();

