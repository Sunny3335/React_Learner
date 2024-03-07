import React from 'react'
import './PlayButton.css';
import { useState } from 'react';

const PlayButton = ({ message, children, onPlay, onPause, }) => {
    const [playing, setPlaying] = useState(false);

    // here playing is state and setPlaying is setter, we always use the setPlaying to  update it.

    function handleClick(e) {
        e.stopPropagation(); // to control
        if (playing) onPlay();
        else onPause();

        setPlaying(!playing);
    }

    return (
        <button onClick={handleClick}>{children} : {playing ? '▶️' : '⏸️'}</button>
    )
}

export default PlayButton;