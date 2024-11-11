// Function to display the welcome message
function showWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.style.display = 'block'; // Show the welcome message bar
}

// Function to close the welcome message
function closeWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.style.display = 'none'; // Hide the welcome message
}
// JavaScript for password-protected download
function checkPassword(event) {
    event.preventDefault();
    const inputPassword = document.getElementById('password').value;
    const correctPassword = "Saharsh-Harshu-2001-2024-2030";

    if (inputPassword === correctPassword) {
        document.getElementById('resume-link').style.display = 'block'; // Show the download link
    } else {
        alert("Incorrect password, please try again.");
    }
}

// Function to open the lightbox with the selected image
function openLightbox(imageSrc) {
   const lightbox = document.getElementById('lightbox');
   const lightboxImg = document.getElementById('lightbox-img');
   lightboxImg.src = imageSrc; // Set the source of the image to display
   lightbox.style.display = 'flex'; // Show the lightbox
}

// Function to close the lightbox
function closeLightbox() {
   const lightbox = document.getElementById('lightbox');
   lightbox.style.display = 'none'; // Hide the lightbox
}

// Function to add animation when "About Me" section is in view
function animateAboutHeader() {
   const aboutHeader = document.querySelector('.about-header');
   const rect = aboutHeader.getBoundingClientRect();
   const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
   
   if (isVisible) {
       aboutHeader.classList.add('visible'); // Add class to trigger CSS animation
       window.removeEventListener('scroll', animateAboutHeader); // Remove event listener after animation
   }
}

// Listen for scroll to trigger the animation
window.addEventListener('scroll', animateAboutHeader);

