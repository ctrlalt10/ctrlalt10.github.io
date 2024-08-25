// script.js

document.addEventListener("DOMContentLoaded", () => {
  const sciencesBtn = document.getElementById("sciences-btn");
  const humanitiesBtn = document.getElementById("humanities-btn");
  const level2 = document.getElementById("level-2");
  const seeResultsBtn = document.getElementById("see-results-btn");
  const resultsDiv = document.getElementById("results");

  const fieldButtons = {
    sciences: ["computer-science-btn", "biology-btn", "chemistry-btn"],
    humanities: ["law-btn", "history-btn", "philosophy-btn"],
  };

  let selectedField = null;

  sciencesBtn.addEventListener("click", () => {
    showLevel2("sciences");
  });

  humanitiesBtn.addEventListener("click", () => {
    showLevel2("humanities");
  });

  function showLevel2(category) {
    level2.classList.remove("hidden");
    resetFieldButtons();

    fieldButtons[category].forEach((fieldId) => {
      document.getElementById(fieldId).classList.remove("hidden");
    });
  }

  function resetFieldButtons() {
    Object.values(fieldButtons).flat().forEach((fieldId) => {
      document.getElementById(fieldId).classList.add("hidden");
    });
    selectedField = null;
  }

  document.querySelectorAll(".field-btn").forEach((button) => {
    button.addEventListener("click", () => {
      selectedField = button.id.replace("-btn", "");
    });
  });

  seeResultsBtn.addEventListener("click", () => {
    if (selectedField) {
      displayResults(selectedField);
    } else {
      alert("Please select a field.");
    }
  });

  function displayResults(field) {
    const summaries = {
      "computer-science": "Computer Science focuses on the study of algorithms, data structures, software engineering, and more.",
      "biology": "Biology is the scientific study of life, including the structure, function, growth, and evolution of living organisms.",
      "chemistry": "Chemistry explores the properties, composition, and behavior of substances and the changes they undergo.",
      "law": "Law involves the system of rules created and enforced through social or governmental institutions to regulate behavior.",
      "history": "History is the study of past events, particularly in human affairs, and its effects on the present.",
      "philosophy": "Philosophy deals with the fundamental nature of knowledge, reality, and existence, especially as an academic discipline.",
    };

    const courses = {
      "computer-science": ["CS50 by Harvard", "Introduction to Algorithms", "Data Structures and Programming"],
      "biology": ["Introduction to Biology", "Molecular Biology", "Ecology and Evolution"],
      "chemistry": ["Organic Chemistry", "Analytical Chemistry", "Inorganic Chemistry"],
      "law": ["Constitutional Law", "Criminal Law", "International Law"],
      "history": ["World History", "Modern European History", "Ancient Civilizations"],
      "philosophy": ["Ethics and Moral Philosophy", "Metaphysics", "Political Philosophy"],
    };

    resultsDiv.innerHTML = `
      <h2>${field.replace("-", " ")}</h2>
      <p>${summaries[field]}</p>
      <h3>Available Courses:</h3>
      <ul>
        ${courses[field].map((course) => `<li>${course}</li>`).join("")}
      </ul>
    `;
    resultsDiv.classList.remove("hidden");
  }
});
