const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const navigationLinks = [...document.querySelectorAll(".nav-link[data-section]")];

function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  navigation.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
}

menuButton.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) setMenu(false);
});

const visibleSections = [...document.querySelectorAll("main section[id]")];
const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visibleEntry = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleEntry) return;

    const activeSection = visibleEntry.target.id === "education" ? "home" : visibleEntry.target.id;

    navigationLinks.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.section === activeSection);
    });
  },
  {
    rootMargin: "-22% 0px -62% 0px",
    threshold: [0.05, 0.2, 0.45],
  },
);

visibleSections.forEach((section) => sectionObserver.observe(section));

document.getElementById("copyright-year").textContent = new Date().getFullYear();
