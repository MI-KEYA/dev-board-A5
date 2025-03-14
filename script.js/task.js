const taskButton = document.querySelectorAll(".task-btn");

for (let i = 0; i < taskButton.length; i++) {
    taskButton[i].addEventListener('click',
        function (event) {
            event.preventDefault();
            this.style.background = "#ced6ff";
            this.style.color = "white";

            const taskNumber = document.getElementById('task-number').innerText;
            const convertedTask = parseInt(taskNumber);
            const newTask = convertedTask - 1;
            document.getElementById('task-number').innerText = newTask;
            alert("Task completed Successfully.");
            if (newTask === 0) {
                alert("Congrates!! You have completed all the current task");
            }


            const cardTitle = document.querySelectorAll(".task-card-title");
            card = cardTitle[i].innerText;
            const now = new Date();
            const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const container = document.getElementById('activity-log');
            const div = document.createElement("div");
            div.classList.add("activityStyle");
            div.innerHTML =
                `<h1 class = "text-gray-600">You have completed the task ${card} at</h1>
              
              <p class = "text-gray-600" >${timeString}</p>`;
            container.appendChild(div);




            document.getElementById('activity-log').style.display = 'block';

            const navTask = document.getElementById('nav-task-number').innerText;
            const convertedNavTask = parseInt(navTask);
            const newNavTask = convertedNavTask + 1;
            document.getElementById('nav-task-number').innerText = newNavTask;
            this.disabled = true;

        }
    )
}