import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";

import music_mp3 from "./assets/love-music.mp3";
import love_mocha from "./assets/love-mocha-bear-no-bg.gif";

const audio = new Audio(music_mp3);
audio.pause();
audio.currentTime = 0;

const img = new Image();
img.src = love_mocha;

setTimeout(
  () =>
    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    ),
  1500
);
