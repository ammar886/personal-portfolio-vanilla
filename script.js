document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation
  const hamburger = document.querySelector(".hamburger")
  const navLinks = document.querySelector(".nav-links")

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      this.classList.toggle("active")
      navLinks.classList.toggle("active")
    })

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navLinks.classList.remove("active")
      })
    })
  }

  // Sticky Header
  const header = document.querySelector("header")
  const scrollToTop = document.querySelector(".scroll-to-top")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.classList.add("sticky")
      scrollToTop.classList.add("active")
    } else {
      header.classList.remove("sticky")
      scrollToTop.classList.remove("active")
    }
  })

  // Scroll to Top
  if (scrollToTop) {
    scrollToTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }

  // Project Filtering
  const filterBtns = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      filterBtns.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      this.classList.add("active")

      const filter = this.getAttribute("data-filter")

      projectCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  })

  // Skills Animation
  const skillLevels = document.querySelectorAll(".skill-level")

  const animateSkills = () => {
    skillLevels.forEach((level) => {
      const width = level.style.width
      level.style.width = "0"
      setTimeout(() => {
        level.style.width = width
      }, 300)
    })
  }

  // Animate skills when they come into view
  const skillsSection = document.querySelector(".skills")

  if (skillsSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSkills()
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(skillsSection)
  }

  // Form Submission
  const contactForm = document.getElementById("contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Here you would typically send the form data to a server
      // For this example, we'll just log it and show an alert
      console.log("Form submitted:", { name, email, subject, message })

      // Show success message
      alert("Thank you for your message! I will get back to you soon.")

      // Reset form
      contactForm.reset()
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        const headerHeight = document.querySelector("header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Typing effect for hero section
  const typingElement = document.querySelector(".hero-content h2")

  if (typingElement) {
    const text = typingElement.textContent
    typingElement.textContent = ""

    let i = 0
    const typeWriter = () => {
      if (i < text.length) {
        typingElement.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      }
    }

    setTimeout(typeWriter, 1000)
  }
})
