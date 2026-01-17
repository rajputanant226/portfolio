const toggleBtn = document.querySelector('.theme-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const moonIcon = toggleBtn.querySelector('.moon');
  if(document.body.classList.contains('dark-mode')) {
    moonIcon.textContent = '☀️'; // Sun icon
  } else {
    moonIcon.textContent = '🌙'; // Moon icon
  }
});



  document.getElementById("resumeBtn").addEventListener("click", function(e) {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "resume.pdf";
    link.download = "Anant_Rajput_Resume.pdf"; 
    link.click();
  });