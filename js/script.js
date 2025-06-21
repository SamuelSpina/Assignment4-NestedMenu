document.addEventListener("DOMContentLoaded", function() {
    // Homepage subject click functionality
    const subjects = document.querySelectorAll('.subject h3');
    
    subjects.forEach(subject => {
        subject.addEventListener('click', function() {
            // Toggle visibility of topics under this subject
            const topicsList = this.nextElementSibling;
            topicsList.classList.toggle('active');
        });
    });
    
    // Back button functionality for topic pages
    const backButton = document.querySelector("footer button");
    
    if (backButton) {
        backButton.addEventListener("click", function() {
            // Navigate back to the previous page in history
            window.history.back();
        });
    }
});
