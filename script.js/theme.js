let colors = ['#6faace', '#f6ceff', '#ceffea'];
let currentColor = 0;

document.querySelector('#theme-img').addEventListener('click', function() {
  document.body.style.backgroundColor = colors[currentColor];
  currentColor++;
  if (currentColor >= colors.length) currentColor = 0;
});
