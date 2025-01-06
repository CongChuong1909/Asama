

document.addEventListener("DOMContentLoaded", function () {
    const videoThumbnails = document.querySelectorAll(".video-item-img");
    const closePopup = document.getElementById("close-popup");
    const popupModal = document.getElementById("popup-modal");
    const youtubeVideo = document.getElementById("youtube-video");
  
    videoThumbnails.forEach(thumbnail => {
      thumbnail.addEventListener("click", function () {
        const videoId = this.getAttribute("data-video-id");
        youtubeVideo.src = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`;
        popupModal.style.display = "flex"; 
      });
    });
    closePopup.addEventListener("click", function () {
      popupModal.style.display = "none";
      youtubeVideo.src = "";
    });
  
    popupModal.addEventListener("click", function (e) {
      if (e.target === popupModal) {
        popupModal.style.display = "none";
        youtubeVideo.src = "";
      }
    });
  });