document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.getElementById('canvasE');
    let canvasContext = canvas.getContext('2d');
    let mouseX = 0;
    let mouseY = 0;
    let isDrawing = false
    canvasContext.strokeStyle = 'black';
    canvasContext.lineWidth = 1;
    let boundings = canvas.getBoundingClientRect();
    canvas.addEventListener('mousedown', function (event) {
        setMouseCoordinates(event);
        isDrawing = true;


        canvasContext.beginPath();
        canvasContext.moveTo(mouseX, mouseY);
    });
    canvas.addEventListener('mousemove', function (event) {
        setMouseCoordinates(event);

        if (isDrawing) {
            canvasContext.lineTo(mouseX, mouseY);
            canvasContext.stroke();
        }
    });
    canvas.addEventListener('mouseup', (event) => {
        setMouseCoordinates(event);
        isDrawing = false
    });
    function setMouseCoordinates(event) {
        mouseX = event.pageX - boundings.left;
        mouseY = event.pageY - boundings.top;
    }
})