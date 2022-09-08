document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('canvasE');
    let canvasContext = canvas.getContext('2d');
    console.log(canvasContext);
    let mouseX = 0;
    let mouseY = 0;
    let isDrawing = false;
    canvasContext.strokeStyle = 'black';

    canvas.addEventListener('mousedown', function (event) {
        console.log(event);

        isDrawing = true;
        canvasContext.beginPath();
        canvasContext.moveTo(event.offsetX, event.offsetY);
    });
    canvas.addEventListener('mousemove', function (event) {

        if (isDrawing) {
            canvasContext.lineTo(event.offsetX, event.offsetY);
            canvasContext.stroke();

        }


    });
    canvas.addEventListener('mouseup', (event) => {

        isDrawing = false;
    });

})