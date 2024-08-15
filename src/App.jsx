import { useLayoutEffect } from "react";
import { Cursor } from "react-custom-cursors";
import { Home } from "./features";
import music_mp3 from "./assets/love-music.mp3";
import "react-custom-cursors/dist/index.css";

function App() {
  useLayoutEffect(() => {
    const audio = new Audio(music_mp3);
    audio.pause();
    audio.currentTime = 0;
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);
  return (
    <>
      <Cursor
        animation="beat"
        color="#de6e4cdb"
        dotColor="#632f1fdb"
        hasCursor
        hasDot
        isHollow
        mixBlendMode={false}
        size="sm"
      />
      <Home />
    </>
  );
}

export default App;
