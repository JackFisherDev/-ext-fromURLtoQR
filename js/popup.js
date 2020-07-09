var btn = document.getElementById("btn");
var qrPlaceholder = document.getElementById("qr-placeholder");

function disableBtn() {
  btn.textContent = "Generated";
  btn.setAttribute("disabled", true);
}

function generateQR() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "give me your location.href" },
      function (response) {
        disableBtn();
        qrPlaceholder.style.display = "none";

        var qrcode = new QRCode(document.getElementById("qr"), {
          text: response.href,
          width: 128,
          height: 128,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H,
        });
      }
    );
  });
}

btn.addEventListener("click", generateQR);
