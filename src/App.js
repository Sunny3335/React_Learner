import React from "react";
import "./App.css";

import Video from "./components/Video";
import Videos from "./data/data";
import PlayButton from "./components/PlayButton";
const App = () => {
  return (
    <div className="App" onClick={() => console.log("App")}>
      <div>Videos</div>
      {Videos.map((video) => (
        <Video
          key={video.id}
          verified={video.verified}
          title={video.title}
          views={video.views}
          time={video.time}
          id={video.id}
        >
          <PlayButton
            onPlay={() => console.log("Playing", video.title)}
            onPause={() => console.log("Pause game", video.title)}
          >
            {" "}
            {video.title}
          </PlayButton>
        </Video>
      ))}

      <div style={{ clear: "both" }}>
        {/* <PlayButton message="Start" onPlay={() => console.log("Play game")} onPause={() => console.log("Pause game")}>Pause</PlayButton>
         */}

        {/*<PlayButton message="End" onSmash={() => alert("Stop game")} >Pause</PlayButton>*/}
      </div>
    </div>
  );
};

export default App;
// onclick works on regular html element. it does not recognize the onlcink when we use on component.
// then we pass it fromm the main file to childeren function can be passed as a props.

// that is called custom events.
