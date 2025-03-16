const projects = document.querySelectorAll('.project');

window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;

  projects.forEach(project => {
    const projectTop = project.getBoundingClientRect().top;

    if(projectTop < triggerBottom){
      project.classList.add('show');
    }
    else {
      project.classList.remove('show');
    }
    
  })
}

const button = document.querySelector('.button');

button.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const newTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : '';
  button.innerHTML = newTheme === 'dark-theme' ? '<i class="fa-regular fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  const githubLI = document.querySelector('#github');
  githubLI.innerHTML = newTheme === 'dark-theme' ? '<img src="logo/github-white.svg" alt="github"></img>' : '<img src="logo/github.svg" alt="github"></img>';
});

