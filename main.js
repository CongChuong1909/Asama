

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

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyV6koIIi4EBt0GiiHpNDpmkOzuzhiJRIojFy-M79fvrs1XAVSHNGPrcPXynKadKMjc/exec'

    const form = document.forms['contact-form']

    form.addEventListener('submit', e => {
        e.preventDefault()
        alert("Cảm ơn!, Chúng tôi sẽ liên hệ bạn sớm nhất.");
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! Form is submitted" ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
    })