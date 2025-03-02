function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; 
    let formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

    let elements = document.querySelectorAll('.clock');
    for (let i = 0; i < elements.length; i++) {
        elements[i].textContent = formattedTime;
    }
}

setInterval(updateTime, 1000); 
updateTime()