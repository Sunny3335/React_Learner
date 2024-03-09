import React, { useState } from 'react'
import './AddVideo.css';
const AddVideo = ({AddVideos}) => {
    const [video, setVideo] = useState({
        channel: "SUNNY KUMAR",
        title: "MongoDB Tutorial",
        views: "500k",
        time: "1 month ago",
    })
    function handleSubmit(e) {
        e.preventDefault();
        AddVideos();
        console.log(video);
    }
    function handleChange(e) { // e is event handler
        console.log(e.target.name, e.target.value);
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
        console.log(video);
    }

    return (
        <div>
            <form>
                <input type="text" name="title" onChange={handleChange} placeholder="title" />
                <input type="text" name="views" onChange={handleChange} placeholder="views" />

                <button onClick={handleSubmit}>Add video</button>
            </form>
        </div>
    )
}

export default AddVideo