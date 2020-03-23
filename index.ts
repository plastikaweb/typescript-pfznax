// Import stylesheets
import "./style.css";

function onload() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "/image.jpg");
  xhr.responseType = "arraybuffer";

  xhr.onload = function(e) {
    const blob = new Blob([xhr.response]);
    const url = URL.createObjectURL(blob);
    console.log(url);


    const img: HTMLImageElement = document.getElementById("image");
    img.src = url;
  };

  xhr.send();
}
