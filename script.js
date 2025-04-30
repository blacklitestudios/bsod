document.addEventListener("DOMContentLoaded", () => {
    const progressElement = document.getElementById("progress");
    const everything = document.getElementById("everything");
    const body = document.getElementById("omniverse");
    let progress = 0;

    // Set the initial progress to 0%
    progressElement.textContent = `${progress}% complete`;

    function updateProgress() {
        
        if (progress < 100) {
            // Increase progress by a random amount between 1 and 10
            progress += Math.floor(Math.random() * 10) + 1;

            // Ensure progress does not exceed 100
            if (progress > 100) {
                progress = 100;
            }

            // Update the progress text
            progressElement.textContent = `${progress}% complete`;

            // Schedule the next update with a random delay between 100ms and 500ms
            const delay = Math.random() * (500 - 100) + 100;

            setTimeout(updateProgress, delay);

            if (progress === 100) {setTimeout((function() {everything.style.display = "none"; body.style["background-color"] = "#000000";}), Math.random() * (500 - 100) + 100);}
    
        }
    }
    setTimeout(updateProgress, Math.random() * (500 - 100) + 100);
    
});