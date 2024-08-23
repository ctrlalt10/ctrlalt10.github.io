// app.js

document.addEventListener('DOMContentLoaded', () => {
  // Get query from URL
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('query');

  if (query) {
    document.getElementById('query').textContent = query;

    // Placeholder AI Functions (replace with real API calls)
    fetchSummary(query);
    fetchCourses(query);
    fetchJobs(query);
  }
});

// Fetch AI-generated summary for the topic
function fetchSummary(query) {
  // Replace this with an actual AI call to OpenAI or similar service
  const summaryText = `A summary for "${query}": This is a placeholder summary. Use an AI API to generate a meaningful overview of the topic.`;
  
  document.getElementById('summary-text').textContent = summaryText;
}

// Fetch courses related to the topic
function fetchCourses(query) {
  // Replace this with an actual API call to fetch courses
  const courses = [
    { name: "CS50: Introduction to Computer Science", link: "https://cs50.harvard.edu" },
    { name: "Coursera: Machine Learning", link: "https://www.coursera.org/learn/machine-learning" }
  ];

  const coursesList = document.getElementById('courses-list');
  courses.forEach(course => {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = course.link;
    anchor.textContent = course.name;
    anchor.target = "_blank";
    listItem.appendChild(anchor);
    coursesList.appendChild(listItem);
  });
}

// Fetch job opportunities related to the topic
function fetchJobs(query) {
  // Replace this with an actual API call to fetch job listings
  const jobs = [
    { title: "Software Engineer", company: "Google", link: "https://careers.google.com/jobs/results/123456-software-engineer" },
    { title: "Data Scientist", company: "Facebook", link: "https://www.facebook.com/careers/jobs/789012-data-scientist" }
  ];

  const jobsList = document.getElementById('jobs-list');
  jobs.forEach(job => {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = job.link;
    anchor.textContent = `${job.title} at ${job.company}`;
    anchor.target = "_blank";
    listItem.appendChild(anchor);
    jobsList.appendChild(listItem);
  });
}
