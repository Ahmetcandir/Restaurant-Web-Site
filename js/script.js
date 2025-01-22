const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");
//! buttons
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");


searchBtn.addEventListener("click", function () {
    searchForm.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(searchBtn) &&
            !e.composedPath().includes(searchForm)
        ) {
          searchForm.classList.remove("active");
        }
      });
    });

    cartBtn.addEventListener("click", function () {
        cartItem.classList.toggle("active");
        document.addEventListener("click", function (e) {
            if (
                !e.composedPath().includes(cartBtn) &&
                !e.composedPath().includes(cartItem)
            ) {
              cartItem.classList.remove("active");
            }
          });
        });
        menuBtn.addEventListener("click", function () {
            navbar.classList.toggle("active");
            document.addEventListener("click", function (e) {
                if (
                    !e.composedPath().includes(menuBtn) &&
                    !e.composedPath().includes(navbar)
                ) {
                  navbar.classList.remove("active");
                }
              });
            });
    

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                  e.preventDefault();
              
                  const targetId = this.getAttribute('href');
                  const targetElement = document.querySelector(targetId);
              
                  if (targetElement) {
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                    const startPosition = window.scrollY;
                    const distance = targetPosition - startPosition;
                    const duration = 1500; // Kaydırma süresi (ms)
                    let startTime = null;
              
                    function animation(currentTime) {
                      if (!startTime) startTime = currentTime;
                      const timeElapsed = currentTime - startTime;
                      const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
                      window.scrollTo(0, run);
                      if (timeElapsed < duration) requestAnimationFrame(animation);
                    }
              
                    function easeInOutCubic(t, b, c, d) {
                      t /= d / 2;
                      if (t < 1) return (c / 2) * t * t * t + b;
                      t -= 2;
                      return (c / 2) * (t * t * t + 2) + b;
                    }
              
                    requestAnimationFrame(animation);
                  }
                });
              });
              