document.addEventListener("DOMContentLoaded", function() {
    // Grab all the sections of our website
    const loginSection = document.getElementById("login-section");
    const mainHeader = document.querySelector("header");
    const readingsSection = document.getElementById("readings-section");
    const homilySection = document.getElementById("homily-section");
    const coordinatorDashboard = document.getElementById("coordinator-dashboard");
    const adminPanel = document.getElementById("admin-panel");
    
    const loginButton = document.querySelector(".login-submit-btn");

    if (loginButton) {
        loginButton.addEventListener("click", function() {
            const selectedRole = document.getElementById("user-role").value;
            
            // 1. Hide the login page instantly
            loginSection.style.display = "none";
            
            // 2. Show the top navigation header bar
            mainHeader.style.display = "flex";

            // 3. Direct the user to their specific options based on their role
            if (selectedRole === "layperson") {
                // Laypersons only see Today's Readings & Sunday Homilies
                readingsSection.style.display = "block";
                homilySection.style.display = "block";
                alert("ಲಾಗಿನ್ ಯಶಸ್ವಿಯಾಗಿದೆ! ಸಾರ್ವಜನಿಕ ವಾಚನಗಳ ಪುಟಕ್ಕೆ ಸ್ವಾಗತ.");
            } 
            else if (selectedRole === "coordinator") {
                // Coordinators only see their input form dashboard
                coordinatorDashboard.style.display = "block";
                alert("ಸ್ವಾಗತ ಸಂಯೋಜಕರೇ! ನಿಮ್ಮ ಅಪ್ಲೋಡ್ ಪುಟ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ.");
            } 
            else if (selectedRole === "admin") {
                // Admins see the full management dashboard
                adminPanel.style.display = "block";
                alert("ಸ್ವಾಗತ ಮುಖ್ಯಸ್ಥರೇ! ನಿಯಂತ್ರಣ ಫಲಕ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ.");
            }
        });
    }

    // Interactive Audio Player Logic
    const playBtn = document.querySelector(".play-btn");
    const progressBar = document.querySelector(".progress-bar");
    const timeDisplay = document.querySelector(".time-display");
    let isPlaying = false;

    if (playBtn) {
        playBtn.addEventListener("click", function() {
            if (!isPlaying) {
                playBtn.innerHTML = "制造 パಸ್ (Pause)";
                progressBar.style.width = "65%"; 
                timeDisplay.innerHTML = "18:42 / 30:00";
                isPlaying = true;
            } else {
                playBtn.innerHTML = "▶ ಪ್ಲೇ (Play)";
                isPlaying = false;
            }
        });
    }
});