

function updateClock () {
    const clock = document.getElementById('clock');
    let date = new Date();

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    

    clock.innerHTML = hours +":" + minutes + ":" + seconds;
}

setInterval(updateClock, 1000);