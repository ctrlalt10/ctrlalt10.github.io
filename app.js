// app.js

// Calculate and display the average mood
function displayAverageMood() {
  const moods = JSON.parse(localStorage.getItem('moods')) || [];
  const average = moods.length ? moods.reduce((a, b) => a + b, 0) / moods.length : 0;
  
  const moodText = average <= 1.5 ? "😢 Very Sad"
                : average <= 2.5 ? "😞 Sad"
                : average <= 3.5 ? "😐 Meh"
                : average <= 4.5 ? "🙂 Happy"
                : "😄 Very Happy";
  
  document.getElementById('average-mood').textContent = moodText;
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
