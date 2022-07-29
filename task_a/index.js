
document.addEventListener("DOMContentLoaded", () => {

    const clickButtonHandler = (event) => {
        console.log(event.target);
    };

    const button = document.getElementById("button1");

    button.onclick = clickButtonHandler;
    button2.onclick = clickButtonHandler;

    button.onmouseenter = () => {
        button.style.background = "green";
    };

    // button.addEventListener("click", () => {
    //     console.log("Click");
    // });

});
