const questions = document.querySelectorAll(".faq__q--q");

// Loop through all elements and add an event listener to them

questions.forEach((question) =>
  question.addEventListener("click", () => {
    if (question.parentNode.classList.contains("active")) {
      question.parentNode.classList.toggle("active");
    } else {
      questions.forEach((question) => question.parentNode.classList.remove("active"));
      question.parentNode.classList.add("active");
    }
  })
);
