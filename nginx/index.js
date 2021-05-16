const footer = document.getElementById('footer');
const url = new URL(location.href);

footer.innerHTML = `<h5><a target="_blank" href="https://github.com/joshua-noakes1" style="color: #343a40;">Joshua Noakes</a> | ${url.host}</h5>`;