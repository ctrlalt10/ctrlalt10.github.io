// app.js

// Calculate and display the average mood
function displayAverageMood() {
  const moods = JSON.parse(localStorage.getItem('moods')) || [];
  const average = moods.length ? moods.reduce((a, b) => a + b, 0) / moods.length : 0;
  
  // Determine emoji and text description based on average mood
  const moodData = average <= 1.5 ? { emoji: "😢", text: "Very Sad" }
                : average <= 2.5 ? { emoji: "😞", text: "Sad" }
                : average <= 3.5 ? { emoji: "😐", text: "Meh" }
                : average <= 4.5 ? { emoji: "🙂", text: "Happy" }
                : { emoji: "😄", text: "Very Happy" };
  
  // Display the emoji and corresponding mood description
  document.getElementById('average-mood').textContent = moodData.emoji;
  document.getElementById('mood-description').textContent = moodData.text;
}

// Save mood and redirect back to homepage
function submitMood(mood) {
  const moods = JSON.parse(localStorage.getItem('moods')) || [];
  moods.push(mood);
  localStorage.setItem('moods', JSON.stringify(moods));
  window.location.href = 'index.html';
}

// Display the average mood when on the homepage
if (document.getElementById('average-mood')) {
  displayAverageMood();
}
