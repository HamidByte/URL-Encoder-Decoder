function encodeText() {
  var textToEncode = document.getElementById('urlInputEncode').value;
  var encodedText = encodeURIComponent(textToEncode);

  document.getElementById('displayText').getElementsByTagName('strong')[0].innerText = 'Encoded Text:';
  document.getElementById('result').value = encodedText;
}

function decodeURL() {
    var urlToDecode = document.getElementById('urlInputDecode').value;
    var decodedText = decodeURIComponent(urlToDecode);

    document.getElementById('displayText').getElementsByTagName('strong')[0].innerText = 'Decoded Text:';
    document.getElementById('result').value = decodedText;
}

new ClipboardJS(".copy-button");
document.getElementById("svg-copied").style.display = "none";

function copyToClipboard() {
  $("#svg-copy").hide();
  $("#svg-copied").show();

  setTimeout(function () {
    $("#svg-copy").show();
    $("#svg-copied").hide();
  }, 1000);
}
