import React, { useState } from 'react'
import './App.css';

import Video from './components/Video';
import VideoDB from './data/data';
import PlayButton from './components/PlayButton';
import Counter from './components/Counter';
const App = () => {
  console.log('render App');
  const [Videos, setVideos] = useState(VideoDB);


  return (
    <div className='App' onClick={() => console.log('App')}>
      <div>
        <button onClick={() => {
          setVideos([...Videos, {
            id: 3,
            channel: "SUNNY KUMAR",
            title: "MongoDB Tutorial",
            views: "500k",
            time: "1 month ago",
            verified: true,
          }]);
        }}>Add video</button>
      </div>
      {
        Videos.map(video => <Video
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
            {video.title}

          </PlayButton>

        </Video>)}

      <div style={{ clear: 'both' }}>

        {/* <PlayButton message="Start" onPlay={() => console.log("Play game")} onPause={() => console.log("Pause game")}>Pause</PlayButton>
 */}

        {/*<PlayButton message="End" onSmash={() => alert("Stop game")} >Pause</PlayButton>*/}

      </div>

      <Counter></Counter>


    </div>
  )
}

export default App;