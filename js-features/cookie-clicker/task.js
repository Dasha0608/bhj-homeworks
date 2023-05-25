const click = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

cookie.onclick = function() {
    if (cookie.width == 200) {
        cookie.width = 150;
        click.textContent ++;
    }

    else if (cookie.width == 150) {
        cookie.width = 200;
        click.textContent ++;
    }
}