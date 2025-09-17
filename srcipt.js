
  document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("nav");
    const navLinks = nav.querySelectorAll("a");

    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      nav.classList.toggle("active");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        burger.classList.remove("active");
        nav.classList.remove("active");
      });
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".review-card");
    const prevBtn = document.querySelector(".reviews-controls-adap .prev");
    const nextBtn = document.querySelector(".reviews-controls-adap .next");
    let current = 0;

    function showCard(index) {
      cards.forEach((card, i) => {
        card.classList.remove("active");
        if (i === index) card.classList.add("active");
      });
    }

    nextBtn.addEventListener("click", () => {
      current = (current + 1) % cards.length;
      showCard(current);
    });

    prevBtn.addEventListener("click", () => {
      current = (current - 1 + cards.length) % cards.length;
      showCard(current);
    });
  });
