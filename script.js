document.addEventListener("DOMContentLoaded", function () {

    // =============================================
    // LOGIN FORM (index.html)
    // =============================================
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            const storedEmail = localStorage.getItem("userEmail");
            const storedPassword = localStorage.getItem("userPassword");

            if (email === storedEmail && password === storedPassword) {
                alert("Login successful!");
                window.location.href = "home.html";
            } else {
                alert("Invalid email or password.");
            }
        });

        // Forgot password modal
        const forgotLink = document.getElementById("forgotPasswordLink");
        const modal = document.getElementById("forgotPasswordModal");
        const closeModal = document.getElementById("closeModal");
        const resetBtn = document.getElementById("resetPasswordBtn");

        if (forgotLink) {
            forgotLink.addEventListener("click", function (e) {
                e.preventDefault();
                modal.style.display = "block";
            });
        }

        if (closeModal) {
            closeModal.addEventListener("click", function () {
                modal.style.display = "none";
            });
        }

        if (resetBtn) {
            resetBtn.addEventListener("click", function () {
                const resetEmail = document.getElementById("resetEmail").value;
                if (resetEmail.trim() === "") {
                    alert("Please enter your email.");
                } else {
                    alert("Password reset link sent to " + resetEmail);
                    modal.style.display = "none";
                }
            });
        }
    }

    // =============================================
    // REGISTER FORM (register.html)
    // =============================================
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("registerEmail").value;
            const password = document.getElementById("registerPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
                alert("Please fill all fields.");
            } else if (password !== confirmPassword) {
                alert("Passwords do not match!");
            } else {
                localStorage.setItem("userEmail", email);
                localStorage.setItem("userPassword", password);
                alert("Registration successful!");
                window.location.href = "home.html";
            }
        });
    }

    // =============================================
    // HOME PAGE (home.html)
    // =============================================

    // Profile pic hover effect
    const profilePic = document.querySelector(".profile-pic img");
    if (profilePic) {
        profilePic.addEventListener("mouseover", () => {
            profilePic.style.transform = "scale(1.1)";
        });
        profilePic.addEventListener("mouseleave", () => {
            profilePic.style.transform = "scale(1)";
        });
    }

// Resume button — open PDF in new tab
const resumeBtn = document.getElementById("resume");

if (resumeBtn) {
    resumeBtn.addEventListener("click", function () {

        // Open PDF in new tab
        window.open("pranay.pdf", "_blank");

        // Auto download
        const link = document.createElement("a");
        link.href = "pranay.pdf";
        link.download = "Pranay_Resume.pdf";
        link.click();
    });
}

    // Contact form (home.html)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("contactName").value.trim();
            const email = document.getElementById("contactEmail").value.trim();
            const message = document.getElementById("contactMessage").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                return;
            }

            alert("Thank you " + name + "! I will get back to you shortly.");
            contactForm.reset();
        });
    }

    // =============================================
    // SMOOTH SCROLL for nav links
    // =============================================
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href.startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // =============================================
    // ACTIVE NAV HIGHLIGHT on scroll
    // =============================================
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", function () {
        let current = "";
        sections.forEach(function (section) {
            if (window.scrollY >= section.offsetTop - 120) {
                current = section.getAttribute("id");
            }
        });
        navLinks.forEach(function (link) {
            link.style.color = "";
            if (link.getAttribute("href") === "#" + current) {
                link.style.color = "cyan";
            }
        });
    });

});
