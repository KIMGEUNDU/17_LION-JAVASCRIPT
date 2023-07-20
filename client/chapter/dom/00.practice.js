const container = document.querySelector('.container');

function handler(e) {
  console.log(e.clientY);
}

container.addEventListener('click', handler);
document.addEventListener('click', handler);
