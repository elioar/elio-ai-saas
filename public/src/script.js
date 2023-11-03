// script.js

function playVideo() {
    var thumbnailContainer = document.querySelector(".thumbnail-container");
    var video = document.querySelector("#video-player");
  
    // Hide the play button overlay
    thumbnailContainer.style.display = "none";
  
    // Display and play the video
    video.style.display = "block";
    video.play();
  }
  
  var video = document.querySelector("#video-player");
  video.addEventListener("pause", function() {
    var thumbnailContainer = document.querySelector(".thumbnail-container");
  
    // Show the play button overlay when the video is paused
    thumbnailContainer.style.display = "block";
  
    // Hide the video element
    video.style.display = "none";
  });
 
// Add the "no-scroll" class to the body element
document.body.classList.add("no-scroll");

document.addEventListener("DOMContentLoaded", function() {
// Your existing animation code
gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 0.5,
    delay: 2.5,
    onComplete: function() {
      // Remove the "no-scroll" class when the animation is complete
      document.body.classList.remove("no-scroll");
    }
  }
);

});
