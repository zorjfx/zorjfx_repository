document.addEventListener('DOMContentLoaded', () => {
    let block = document.getElementById('followingDiv');

    document.addEventListener('mousemove', (event) => {
        block.style.left = event.pageX + 'px';
        block.style.top = event.pageY + 'px';
    });

});
