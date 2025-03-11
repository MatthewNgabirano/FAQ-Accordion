document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".toggle-icon");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", function () {
      const isActive = item.classList.contains("active");

      // Close all other open FAQs
      faqItems.forEach((faq) => {
        faq.classList.remove("active");
        faq.querySelector(".faq-answer").style.maxHeight = "0px";
        faq.querySelector(".faq-answer").style.opacity = "0";
        faq.querySelector(".toggle-icon").src = "./assets/images/icon-plus.svg";
      });

      // Toggle the clicked FAQ
      if (!isActive) {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px"; // Expand answer
        answer.style.opacity = "1";
        icon.src = "./assets/images/icon-minus.svg"; // Change icon to minus
      } else {
        item.classList.remove("active");
        answer.style.maxHeight = "0px";
        answer.style.opacity = "0";
        icon.src = "./assets/images/icon-plus.svg"; // Change back to plus
      }
    });
  });
});
