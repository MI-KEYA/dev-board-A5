let colors = ['#6faace', '#f6ceff', '#ceffea', '#d9f2ae'];
let currentColor = 0;

document.querySelector('#theme-img').addEventListener('click', function() {
  document.body.style.backgroundColor = colors[currentColor];
  currentColor++;
  if (currentColor >= colors.length) currentColor = 0;
});


document.getElementById("clear-btn").addEventListener('click',
  function() {
    document.getElementById('activity-log').style.display = 'none';
  }
)