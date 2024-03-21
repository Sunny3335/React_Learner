import React from "react";
import "./PlayButton.css";

// event generally like mouse event or keyboard event.
const PlayButton = ({ message, children, onPlay, onPause }) => {
    let playing = false; // dont you this approach.
    // event bubling to stop the calling of main function any onClick.

    function handleClick(e) {
        // console.log(e)
        e.stopPropagation(); // to control continuous rendring.
        // e.preventDefault(); // used to prevent any default behaviour like submit the form button
        if (playing) onPlay();
        else onPause();

        playing = !playing;
    }

    return (
        <button onClick={handleClick}>
            {children} : {playing ? ">" : "||"}
        </button>
    );
};

export default PlayButton;
