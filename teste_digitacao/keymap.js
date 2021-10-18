var teclas = document.querySelectorAll('.key');

function teclaPrecionada(event) {
    event.preventDefault();
    for (var key of teclas) {
        var keycode = key.getAttribute('keycode');
        if (keycode ==  event.keyCode) {
            key.classList.add('presset');
        }
    }
}

function keycode(event) {
    for (var key of teclas) {
        var keycode = key.getAttribute('keycode');
        if (keycode == event.keyCode) {
            key.classList.remove('presset');
        }
    }
}

addEventListener("keydown", teclaPrecionada);
addEventListener("keyup", keycode);
