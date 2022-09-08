document.addEventListener('DOMContentLoaded', () => {

    const divE = document.getElementsByClassName('header_link');

    for (let i = 0; i < divE.length; i++) {
        divE[i].addEventListener('mouseenter', (event) => {
            event.target.style.color = 'red';
            console.log(456);
        });
    }

});
