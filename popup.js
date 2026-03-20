const radios = document.querySelectorAll('input[name="mode"]');
const optionsDiv = document.getElementById('options');
const checkboxes = document.querySelectorAll('.options input[type="checkbox"]');
const warn = document.getElementById('warn');
const btn = document.getElementById('search-btn');

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        const isDetail = document.querySelector('input[name="mode"]:checked').value === 'detail';
        optionsDiv.classList.toggle('visible', isDetail);
        warn.style.display = 'none';
    });
});

checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
        warn.style.display = 'none';
    });
});

btn.addEventListener('click', () => {
    const mode = document.querySelector('input[name="mode"]:checked').value;

    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        const title = tabs[0].title;
        const url = tabs[0].url;
        const base_url = url.split("?")[0];

        let parts = [];

        if (mode === 'quick') {
            parts = [
                '"' + base_url + '"',
                '"' + url + '"',
                '"' + title + '"'
            ];
        } else {
            if (document.getElementById('opt-base').checked) {
                parts.push('"' + base_url + '"');
            }
            if (document.getElementById('opt-full').checked) {
                parts.push('"' + url + '"');
            }
            if (document.getElementById('opt-title').checked) {
                parts.push('"' + title + '"');
            }
        }

        if (parts.length === 0) {
            warn.style.display = 'block';
            return;
        }

        const query = parts.join(' OR ');
        chrome.tabs.create({url: 'https://twitter.com/search?q=' + encodeURIComponent(query)});
        window.close();
    });
});
