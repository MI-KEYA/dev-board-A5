const taskButton = document.querySelectorAll(".task-btn");

for (let i = 0; i < taskButton.length; i++) {
    taskButton[i].addEventListener('click',
        function () {
            this.style.background = "#ced6ff"; 
            this.style.color = "white";
            
            const taskNumber = document.getElementById('task-number').innerText;
            const convertedTask = parseInt(taskNumber);
            const newTask = convertedTask + 1;
            document.getElementById('task-number').innerText =  newTask;

            const navTask = document.getElementById('nav-task-number').innerText;
            const convertedNavTask = parseInt(navTask);
            const newNavTask = convertedNavTask + 1;
            document.getElementById('nav-task-number').innerText = newNavTask;
            this.disabled = true;

        }
    )
}