// app.js

document.addEventListener('DOMContentLoaded', () => {
  // Get query from URL
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('query');

  if (query) {
    document.getElementById('query').textContent = query;

    // Fetch the AI-generated summary, courses, and jobs
    fetchSummary(query);
    fetchCourses(query);
    fetchJobs(query);
  }
});

// Fetch AI-generated summary for the topic
async function fetchSummary(query) {
  const apiKey = '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'; // Replace with your OpenAI API key
  const prompt = `Summarize the key concepts about ${query} in a few sentences.`;

  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'text-davinci-003', // Use GPT-4 if available
        prompt: prompt,
        max_tokens: 150, // Adjust token limit as needed
        temperature: 0.7 // Adjust creativity level
      })
    });

    const data = await response.json();
    document.getElementById('summary-text').textContent = data.choices[0].text.trim();
  } catch (error) {
    console.error('Error fetching AI summary:', error);
    document.getElementById('summary-text').textContent = 'Sorry, something went wrong while fetching the summary.';
  }
}

// Fetch placeholder courses related to the topic
function fetchCourses(query) {
  // Placeholder course data, replace with actual API logic
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

// Fetch placeholder job opportunities related to the topic
function fetchJobs(query) {
  // Placeholder job data, replace with actual API logic
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
