document.addEventListener("DOMContentLoaded", function() {
    // 1. Hide the Dashboard and Admin Panel by default when the page loads
    const coordinatorDashboard = document.getElementById("coordinator-dashboard");
    const adminPanel = document.getElementById("admin-panel");
    
    if (coordinatorDashboard) coordinatorDashboard.style.display = "none";
    if (adminPanel) adminPanel.style.display = "none";

    // 2. Setup Login Logic
    const loginButton = document.querySelector(".login-submit-btn");
    
    if (loginButton) {
        loginButton.addEventListener("click", function() {
            const selectedRole = document.getElementById("user-role").value;
            
            // Reset views first
            coordinatorDashboard.style.display = "none";
            adminPanel.style.display = "none";

            if (selectedRole === "layperson") {
                alert("ಲಾಗಿನ್ ಯಶಸ್ವಿಯಾಗಿದೆ! ನೀವು ಸಾರ್ವಜನಿಕ ವಾಚನಗಳನ್ನು ನೋಡಬಹುದು. (Login successful as Layperson!)");
                // Smooth scroll up to the readings section
                document.getElementById("readings-section").scrollIntoView({ behavior: 'smooth' });
            } 
            else if (selectedRole === "coordinator") {
                alert("ಸ್ವಾಗತ ಸಂಯೋಜಕರೇ! ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ. (Welcome Coordinator! Dashboard activated.)");
                coordinatorDashboard.style.display = "block";
                coordinatorDashboard.scrollIntoView({ behavior: 'smooth' });
            } 
            else if (selectedRole === "admin") {
                alert("ಸ್ವಾಗತ ಮುಖ್ಯಸ್ಥರೇ! ನಿಯಂತ್ರಣ ಫಲಕ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ. (Welcome Admin! Control Panel activated.)");
                adminPanel.style.display = "block";
                adminPanel.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // 3. Simple Interactive Mock Audio Player
    const playBtn = document.querySelector(".play-btn");
    const progressBar = document.querySelector(".progress-bar");
    const timeDisplay = document.querySelector(".time-display");
    let isPlaying = false;

    if (playBtn) {
        playBtn.addEventListener("click", function() {
            if (!isPlaying) {
                playBtn.innerHTML = "⏸ ಪಾಸ್ (Pause)";
                progressBar.style.width = "65%"; // Simulate audio loading
                timeDisplay.innerHTML = "18:42 / 30:00";
                isPlaying = true;
            } else {
                playBtn.innerHTML = "▶ ಪ್ಲೇ (Play)";
                isPlaying = false;
            }
        });
    }
});