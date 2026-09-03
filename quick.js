document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuOverlay = document.getElementById("menuOverlay");

  if (!hamburger || !mobileMenu) {
    return;
  }

  const mobileLinks = mobileMenu.querySelectorAll("a");

  function openMenu() {
    mobileMenu.classList.add("active");

    if (menuOverlay) {
      menuOverlay.classList.add("active");
    }

    hamburger.classList.add("active");

    document.body.classList.add("menu-open");

    hamburger.setAttribute("aria-expanded", "true");
    hamburger.setAttribute("aria-label", "Close navigation menu");

    mobileMenu.setAttribute("aria-hidden", "false");
  }

  function closeMenu() {
    mobileMenu.classList.remove("active");

    if (menuOverlay) {
      menuOverlay.classList.remove("active");
    }

    hamburger.classList.remove("active");

    document.body.classList.remove("menu-open");

    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "Open navigation menu");

    mobileMenu.setAttribute("aria-hidden", "true");
  }

  function toggleMenu() {
    const isOpen = mobileMenu.classList.contains("active");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  /* Hamburger click */
  hamburger.addEventListener("click", toggleMenu);

  /* Overlay click */
  if (menuOverlay) {
    menuOverlay.addEventListener("click", closeMenu);
  }

  /* Mobile navigation links */
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  /* Escape key */
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  /*
    If the user opens the mobile menu and then rotates
    the phone / expands the browser back to desktop,
    automatically close the mobile menu.
  */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
});
