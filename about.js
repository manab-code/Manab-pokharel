let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    if (n >= totalSlides) currentSlide = 0;
    if (n < 0) currentSlide = totalSlides - 1;
    slides[currentSlide].style.display = 'block';
}

document.getElementById('prev').onclick = () => {
    currentSlide--;
    showSlide(currentSlide);
};

document.getElementById('next').onclick = () => {
    currentSlide++;
    showSlide(currentSlide);
};

window.onload = () => showSlide(0);

let btn = document.getElementById("topBtn");

       
(function(){
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  const showAfter = 300; 

  window.addEventListener('scroll', () => {
    if (window.scrollY > showAfter) btn.classList.add('show');
    else btn.classList.remove('show');
  });

  btn.addEventListener('click', () => {
   
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo(0,0);
    }
  });
})();
