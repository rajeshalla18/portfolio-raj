document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  // Handle form submission
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Form submitted with data:", { name, email, message });

    // Reset form after submission
    contactForm.reset();

    // Optionally, display a success message
    alert("Your message has been sent!");
  });

  // Smooth Scroll for Navigation Links
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 50, // 50px offset for the navbar
        behavior: "smooth",
      });
    });
  });

  // Active Link Highlight on Scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  });

  // Skills Section Animation (e.g., progress bars)
  const skillBars = document.querySelectorAll(".skill-bar");
  const skillSection = document.getElementById("skills");

  const animateSkills = () => {
    if (window.scrollY + window.innerHeight > skillSection.offsetTop) {
      skillBars.forEach((bar) => {
        const value = bar.getAttribute("data-value");
        bar.style.width = `${value}%`;
      });
    }
  };

  window.addEventListener("scroll", animateSkills);
  animateSkills(); // Check if the section is already in view on load

  // Work Section Carousel (optional)
  let currentIndex = 0;
  const workItems = document.querySelectorAll(".work-item");
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");

  const showWorkItem = (index) => {
    workItems.forEach((item, i) => {
      item.style.display = i === index ? "block" : "none";
    });
  };

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % workItems.length;
    showWorkItem(currentIndex);
  });

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + workItems.length) % workItems.length;
    showWorkItem(currentIndex);
  });

  showWorkItem(currentIndex); // Show the first work item initially
});
/* Education */
document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scroll for Navigation Links
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - 50, // 50px offset for the navbar
        behavior: "smooth",
      });
    });
  });

  // Active Link Highlight on Scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 60) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSection)) {
        link.classList.add("active");
      }
    });
  });
});
