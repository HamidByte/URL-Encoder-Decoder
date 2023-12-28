function encodeText() {
  var textToEncode = document.getElementById('urlInputEncode').value;
  var encodedText = encodeURIComponent(textToEncode);

  document.getElementById('result').innerHTML = '<strong>Encoded Text:</strong> ' + encodedText;
}

function decodeURL() {
    var urlToDecode = document.getElementById('urlInputDecode').value;
    var decodedText = decodeURIComponent(urlToDecode);

    document.getElementById('result').innerHTML = '<strong>Decoded Text:</strong> ' + decodedText;
}
