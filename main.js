

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

  document.getElementById("dataForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {
      name: document.getElementById("name").value,
      email: document.getElementById("phonenumber").value,
      message: document.getElementById("address").value,
    };
    const url = "https://script.google.com/macros/s/AKfycbzGWsKCVaK3BVmcSiZy261srCWS8URjGJ5RypgksdlJ145QQmDJ3-9uqQG28DsJaSQn/exec";
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    alert("Data sent to Google Sheets!");
  });