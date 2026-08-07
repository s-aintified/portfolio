const filterButtons = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project-card");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projects.forEach((project) => {
      const categories = project.dataset.category.split(" ");
      const show = filter === "all" || categories.includes(filter);
      project.classList.toggle("hide", !show);
    });
  });
});

menuToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});
