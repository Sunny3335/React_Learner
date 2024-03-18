import React from 'react'
import './App.css';
// import multiple components.
// import {Video,Thumb} from './components/Video';
import Video from './components/Video';

const App = () => {
    // creating a object that would be used as a for component as destructured of object.
    const channel = "SUNNY KUMAR";
    let obj = {
        title: "ReactJs Tutorial",
        views: "100k",
        time: "1 year ago",
        channel: "channel",
    };

    return (
        <div className='App'>
            <div>Videos</div>

            {/* spread operator */}
            <Video {...obj} ></Video>
            <Video title="NodeJs Tutorial" views="10k" time="1 month ago" channel={channel} ></Video>

            <Video title="MongoDB Tutorial" views="132k" time="4 month ago" ></Video>
        </div>
    )
}

export default App;