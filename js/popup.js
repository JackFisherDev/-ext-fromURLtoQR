var btn = document.getElementById("btn");
var qrPlaceholder = document.getElementById("qr-placeholder");

function disableBtn() {
  btn.textContent = "Generated";
  btn.setAttribute("disabled", true);
}

function generateQR() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    disableBtn();
    qrPlaceholder.style.display = "none";

    var qrcode = new QRCode(document.getElementById("qr"), {
      text: tabs[0].url,
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  });
}

btn.addEventListener("click", generateQR);
