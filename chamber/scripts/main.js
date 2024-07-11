document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("open");
    menuToggle.classList.toggle("open");
  });
});

document.querySelector("#copyrightyear").textContent =  new Date().getFullYear();


document.getElementById("modify").innerHTML = document.lastModified


document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fallback for browsers that do not support IntersectionObserver
    let lazyLoad = function() {
      lazyImages.forEach(function(lazyImage) {
        if (lazyImage.getBoundingClientRect().top < window.innerHeight && lazyImage.getBoundingClientRect().bottom > 0) {
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
        }
      });
    };

    window.addEventListener("scroll", lazyLoad);
    window.addEventListener("resize", lazyLoad);
    lazyLoad();
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const visitMessage = document.getElementById("visit-message");
  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();
  
  if (lastVisit) {
    const daysSinceLastVisit = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysSinceLastVisit < 1) {
      visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysSinceLastVisit === 1) {
      visitMessage.textContent = `You last visited 1 day ago.`;
    } else {
      visitMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
    }
  } else {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
  }

  localStorage.setItem("lastVisit", now);
});
