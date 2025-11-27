
  const skills = document.querySelectorAll('.skill');

  function animateBars() {
    skills.forEach(skill => {
      let percent = skill.getAttribute('data-percent');
      let fill = skill.querySelector('.fill');
      fill.style.width = percent + '%';
    });
  }


  window.onload = animateBars;

