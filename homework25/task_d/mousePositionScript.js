

function pos(event) {
    let x = document.getElementById('x');
    let y = document.getElementById('y');
    x.innerText = event.pageX.toString();
    y.innerText = event.pageY.toString();
}

addEventListener('mousemove', pos);