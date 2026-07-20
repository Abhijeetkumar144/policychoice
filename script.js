document.addEventListener("DOMContentLoaded", function () {

  // ---- Footer year ----
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Close mobile nav after clicking a link ----
  var navLinks = document.querySelectorAll(".navbar-nav .nav-link, .navbar-nav .btn");
  var navCollapseEl = document.getElementById("navMain");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navCollapseEl && navCollapseEl.classList.contains("show") && window.bootstrap) {
        var collapse = window.bootstrap.Collapse.getOrCreateInstance(navCollapseEl);
        collapse.hide();
      }
    });
  });

  var form = document.getElementById("contact-form");
var status = document.getElementById("cf-status");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("cf-name").value.trim();
    var phone = document.getElementById("cf-phone").value.trim();
    var email = document.getElementById("cf-email").value.trim();
    var interest = document.getElementById("cf-interest").value;
    var message = document.getElementById("cf-message").value.trim();

    // Reset status
    status.textContent = "";
    status.style.color = "red";

    // Name validation
    if (name.length < 3) {
      status.textContent = "Please enter a valid name.";
      document.getElementById("cf-name").focus();
      return;
    }

    // Phone validation
    var phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(phone)) {
      status.textContent = "Please enter a valid 10-digit phone number.";
      document.getElementById("cf-phone").focus();
      return;
    }

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      status.textContent = "Please enter a valid email address.";
      document.getElementById("cf-email").focus();
      return;
    }

    // Insurance type validation
    if (
      !interest ||
      interest === "Select Insurance Type"
    ) {
      status.textContent = "Please select an insurance type.";
      document.getElementById("cf-interest").focus();
      return;
    }

    // Create email
    var subject = "Insurance Enquiry: " + interest;

    var body =
      "Name: " + name + "\n" +
      "Phone: " + phone + "\n" +
      "Email: " + email + "\n" +
      "Interested In: " + interest + "\n\n" +
      "Message:\n" + (message || "(none)");

    var mailtoLink =
      "mailto:info@policychoice.in" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    status.style.color = "green";
    status.textContent = "Opening your email app...";

    window.location.href = mailtoLink;
  });
}


});
