import React, { useState } from 'react'
import './App.css';

import Video from './components/Video';
import VideoDB from './data/data';
import PlayButton from './components/PlayButton';
import AddVideo from './components/AddVideo';

const App = () => {
  console.log('render App');
  const [Videos, setVideos] = useState(VideoDB);


  return (
    <div className='App' onClick={() => console.log('App')}>
      <AddVideo AddVideos={setVideos}></AddVideo>
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

      </div>

    </div>
  )
}

export default App;