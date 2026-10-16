/**
 * Creative English Spoken Center — Ambikapur
 * Vanilla JavaScript Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  // ===========================================================================
  // 1. Mobile Hamburger Drawer
  // ===========================================================================
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileDrawerOverlay = document.getElementById("mobileDrawerOverlay");
  const mobileDrawerClose = document.getElementById("mobileDrawerClose");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  function openMobileMenu() {
    mobileDrawer.classList.add("open");
    mobileDrawerOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove("open");
    mobileDrawerOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (hamburgerBtn) hamburgerBtn.addEventListener("click", openMobileMenu);
  if (mobileDrawerClose) mobileDrawerClose.addEventListener("click", closeMobileMenu);
  if (mobileDrawerOverlay) mobileDrawerOverlay.addEventListener("click", closeMobileMenu);

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  // ===========================================================================
  // 2. Sticky Header & Active Nav ScrollSpy
  // ===========================================================================
  const header = document.querySelector(".header");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // ScrollSpy
    const scrollPos = window.scrollY + 220;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, { passive: true });

  // ===========================================================================
  // 3. Demo Modal Trigger & Pre-selection
  // ===========================================================================
  const demoModal = document.getElementById("demoModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalCourseSelect = document.getElementById("modalCourseInterested");
  const openDemoButtons = document.querySelectorAll(".open-demo-modal");

  window.openDemoModal = function(courseName) {
    if (courseName && modalCourseSelect) {
      for (let i = 0; i < modalCourseSelect.options.length; i++) {
        if (modalCourseSelect.options[i].text.includes(courseName)) {
          modalCourseSelect.selectedIndex = i;
          break;
        }
      }
    }
    demoModal.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  window.closeDemoModal = function() {
    demoModal.classList.remove("open");
    document.body.style.overflow = "";
  };

  openDemoButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const course = btn.getAttribute("data-course") || "";
      window.openDemoModal(course);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", window.closeDemoModal);

  if (demoModal) {
    demoModal.addEventListener("click", (e) => {
      if (e.target === demoModal) {
        window.closeDemoModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && demoModal && demoModal.classList.contains("open")) {
      window.closeDemoModal();
    }
  });

  // ===========================================================================
  // 4. Form Validation & WhatsApp Confirmation
  // ===========================================================================
  function setupDemoForm(formId, successBoxId) {
    const form = document.getElementById(formId);
    const successBox = document.getElementById(successBoxId);

    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const fullName = form.querySelector('[name="fullName"]').value.trim();
      const phone = form.querySelector('[name="phone"]').value.trim();
      const course = form.querySelector('[name="courseInterested"]').value;
      const level = form.querySelector('[name="currentLevel"]').value;
      const time = form.querySelector('[name="preferredTime"]').value;
      const message = form.querySelector('[name="message"]') ? form.querySelector('[name="message"]').value.trim() : "";
      const honeypot = form.querySelector('[name="honeypot"]') ? form.querySelector('[name="honeypot"]').value : "";
      const submitBtn = form.querySelector('button[type="submit"]');

      // Honeypot spam check
      if (honeypot && honeypot.length > 0) {
        return;
      }

      // Name Validation
      if (fullName.length < 2) {
        alert("Please enter your full name (minimum 2 characters).");
        return;
      }

      // 10-digit Indian mobile validation
      const indianPhoneRegex = /^[6-9]\d{9}$/;
      if (!indianPhoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit Indian mobile number (e.g. 7354523597).");
        return;
      }

      // Loading state
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = "<span>Reserving Your Slot...</span>";

      // Payload
      const leadPayload = {
        fullName,
        phone,
        courseInterested: course,
        currentLevel: level,
        preferredTime: time,
        message,
        source: formId === "modalDemoForm" ? "Popup Modal" : "Page Section",
        submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      };

      console.log("📥 Lead Submitted:", leadPayload);

      // Simulate API submission
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.style.display = "none";

        if (successBox) {
          successBox.style.display = "block";
          const studentNameEl = successBox.querySelector(".student-name-display");
          const whatsappConfirmBtn = successBox.querySelector(".whatsapp-confirm-link");

          if (studentNameEl) studentNameEl.textContent = fullName;

          if (whatsappConfirmBtn) {
            const courseEmojis = {
              "Basic Spoken English": "🗣️ (Hindi to English Transition)",
              "Advanced Spoken English & Fluency": "🔥 (Fluency & Accent Mastery)",
              "Public Speaking & Stage Confidence": "🎙️ (Stage Presence & Mic Practice)",
              "Personality Development & Grooming": "👔 (Executive Grooming & Etiquette)",
              "Interview Prep & Group Discussion": "💼 (HR Questions & Mock GDs)",
              "Kids & School Students English": "🎒 (School Recitation & Confidence)",
              "Competitive Exam English": "📚 (Grammar Rules & Comprehension)",
              "Professional & Business English": "🏢 (Corporate Emails & Meetings)"
            };

            const courseBadge = courseEmojis[course] || "📖";

            const richEmojiMessage = 
              `👋 *नमस्ते Sir / Team Creative English!*\n\n` +
              `🎯 *New Free Demo Class Registration*\n` +
              `━━━━━━━━━━━━━━━━━━━━━━\n` +
              `👤 *Student Name:* ${fullName}\n` +
              `📱 *Mobile Number:* +91 ${phone}\n` +
              `📚 *Course Interested:* ${course}\n` +
              `   ↳ ${courseBadge}\n` +
              `📊 *Current English Level:* ${level} 📈\n` +
              `⏰ *Preferred Batch Time:* ${time} ⏳\n` +
              (message ? `💬 *Student Goal / Note:* "${message}" 🚀\n` : `💬 *Goal:* To speak English with 100% confidence! 🚀\n`) +
              `📍 *Preferred Center:* Banaras Road, near Renuka Girls Hostel, Ambikapur (Gandhi Nagar)\n` +
              `━━━━━━━━━━━━━━━━━━━━━━\n` +
              `🙏 *Please confirm my free demo seat & timing!* ✨🌟`;

            const encodedMsg = encodeURIComponent(richEmojiMessage);
            whatsappConfirmBtn.setAttribute("href", `https://wa.me/917354523597?text=${encodedMsg}`);
          }
        }

        // Trigger Canvas Confetti
        fireConfetti();
      }, 700);
    });
  }

  setupDemoForm("inlineDemoForm", "inlineSuccessBox");
  setupDemoForm("modalDemoForm", "modalSuccessBox");

  // ===========================================================================
  // 5. FAQ Accordion
  // ===========================================================================
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");
    if (!questionBtn) return;

    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all other FAQs for clean single-accordion UX
      faqItems.forEach((other) => other.classList.remove("active"));

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // ===========================================================================
  // 6. Animated Stats Counter
  // ===========================================================================
  const statNumbers = document.querySelectorAll(".stat-number[data-target]");
  let statsCounted = false;

  function countUp(el) {
    const target = parseInt(el.getAttribute("data-target"), 10);
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1600;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.innerHTML = `${target}<span>${suffix}</span>`;
        clearInterval(timer);
      } else {
        el.innerHTML = `${Math.floor(current)}<span>${suffix}</span>`;
      }
    }, stepTime);
  }

  const statsSection = document.getElementById("statsStrip");
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !statsCounted) {
        statsCounted = true;
        statNumbers.forEach(countUp);
      }
    }, { threshold: 0.25 });
    observer.observe(statsSection);
  }

  // ===========================================================================
  // 7. Confetti Effect (Pure Vanilla Canvas)
  // ===========================================================================
  function fireConfetti() {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "999";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ["#F59E0B", "#1E3A8A", "#10B981", "#3B82F6", "#EF4444"];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height * 0.6,
        r: Math.random() * 6 + 4,
        dx: (Math.random() - 0.5) * 12,
        dy: (Math.random() - 0.7) * 14,
        color: colors[Math.floor(Math.random() * colors.length)],
        tilt: Math.random() * 10,
        tiltAngle: Math.random() * Math.PI,
      });
    }

    let animationFrame;
    let opacity = 1;

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = opacity;

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        p.dy += 0.25; // gravity
        p.tiltAngle += 0.1;

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      opacity -= 0.015;
      if (opacity > 0) {
        animationFrame = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationFrame);
        canvas.remove();
      }
    }

    render();
  }

  // ===========================================================================
  // 8. Timed / Exit Intent Offer Popup
  // ===========================================================================
  const exitOffer = document.getElementById("exitOfferBanner");
  const closeExitOffer = document.getElementById("closeExitOffer");

  if (exitOffer) {
    const alreadyShown = sessionStorage.getItem("demo_offer_shown");
    if (!alreadyShown) {
      setTimeout(() => {
        if (!sessionStorage.getItem("demo_offer_shown")) {
          exitOffer.style.display = "block";
          sessionStorage.setItem("demo_offer_shown", "true");
        }
      }, 20000);

      document.addEventListener("mouseleave", (e) => {
        if (e.clientY <= 10 && !sessionStorage.getItem("demo_offer_shown")) {
          exitOffer.style.display = "block";
          sessionStorage.setItem("demo_offer_shown", "true");
        }
      });
    }

    if (closeExitOffer) {
      closeExitOffer.addEventListener("click", () => {
        exitOffer.style.display = "none";
      });
    }
  }
});
