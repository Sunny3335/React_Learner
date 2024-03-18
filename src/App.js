import React from 'react'
import './App.css';
import Video from './components/Video';
import Videos from './data/data';
const App = () => {

    /* here we put {} to write the js code */

    return (
        <div className='App'>
            <div>Videos</div>
            {Videos.map(video =>
                <Video
                    key={video.id}
                    verified={video.verified}
                    title={video.title}
                    views={video.views}
                    time={video.time}
                    id={video.id}>
            </Video>)}
        </div>
    )
}

export default App;