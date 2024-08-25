// app.js

// Predefined descriptions and courses
const fieldData = {
  "computer science": {
    summary: "Computer Science is the study of algorithms, data structures, and the principles of computing. It involves programming, software development, and understanding how computers work at a fundamental level.",
    courses: [
      { name: "CS50: Introduction to Computer Science", link: "https://cs50.harvard.edu" },
      { name: "Coursera: Introduction to Algorithms", link: "https://www.coursera.org/learn/algorithms" }
    ],
    demandData: [50, 60, 65, 70, 72, 80, 85, 88, 90, 95, 100, 105, 110, 115, 120]
  },
  "biology": {
    summary: "Biology is the study of living organisms, including their structure, function, growth, evolution, and interactions with their environment.",
    courses: [
      { name: "Coursera: Fundamentals of Biology", link: "https://www.coursera.org/learn/biology" },
      { name: "edX: Introduction to Genetics", link: "https://www.edx.org/course/introduction-to-genetics" }
    ],
    demandData: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
  },
  "law": {
    summary: "Law is the system of rules that a society or government develops to regulate behavior and maintain order, typically enforced by legal institutions.",
    courses: [
      { name: "edX: Introduction to Law", link: "https://www.edx.org/course/introduction-to-law" },
      { name: "Coursera: Legal Studies", link: "https://www.coursera.org/learn/legal-studies" }
    ],
    demandData: [40, 42, 45, 50, 55, 60, 65, 70, 75, 78, 80, 82, 85, 88, 90]
  }
  // Add more fields as needed
};

// Category selection logic
function selectCategory(category) {
  document.getElementById('level-1').classList.add('hidden');
  document.getElementById('level-2').classList.remove('hidden');

  if (category === 'Sciences') {
    document.getElementById('sciences-options').classList.remove('hidden');
  } else if (category === 'Humanities') {
    document.getElementById('humanities-options').classList.remove('hidden');
  }
}

// Field selection logic
function selectField(field) {
  document.getElementById('selected-field').value = field;
  document.getElementById('submit-selection').classList.remove('hidden');
}

// Results page logic
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const selectedField = urlParams.get('selected-field');

  if (selectedField) {
    document.getElementById('selected-field').textContent = selectedField;

    // Display summary
    const fieldInfo = fieldData[selectedField.toLowerCase()];
    if (fieldInfo) {
      document.getElementById('summary-text').textContent = fieldInfo.summary;

      // Display courses
      const coursesList = document.getElementById('courses-list');
      fieldInfo.courses.forEach(course => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = course.link;
        anchor.textContent = course.name;
        anchor.target = "_blank";
        listItem.appendChild(anchor);
        coursesList.appendChild(listItem);
      });

      // Display job demand graph
      renderJobDemandChart(fieldInfo.demandData);
    }
  }
});

// Job demand graph rendering using Chart.js
function renderJobDemandChart(demandData) {
  const ctx = document.getElementById('job-demand-chart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
      datasets: [{
        label: 'Job Demand (2010-2024)',
        data: demandData,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        fill: true,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
