const welcome = document.querySelector('#welcome')
const ww = document.querySelector('.ww')
const hide = document.querySelector('.hide')

hide.addEventListener("click", () => {
    console.log("Event listener triggered");
    welcome.style.display = "none";

    console.log(welcome.style.display);
})
