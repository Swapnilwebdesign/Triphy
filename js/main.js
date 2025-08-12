$(document).ready(function(){
  $('.tour-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });
});



 let index = 0;
    const testimonials = document.querySelectorAll(".testimonial");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    function showTestimonial(i) {
        testimonials.forEach(t => t.classList.remove("active"));
        testimonials[i].classList.add("active");
    }

    function nextSlide() {
        index = (index + 1) % testimonials.length;
        showTestimonial(index);
    }

    function prevSlide() {
        index = (index - 1 + testimonials.length) % testimonials.length;
        showTestimonial(index);
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    // Auto Slide
    setInterval(nextSlide, 5000);