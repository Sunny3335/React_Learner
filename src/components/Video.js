import React, { Fragment } from 'react'
import './Video.css';

// you can use it as destructuring value in place of props but in the curley braces.

const Video = ({ title, channel = "SUNNY", views, time }) => {
    // let topic = "ReactJs Tutorial - ";
    // console.log(props);
    // props is read only that can not be changed on run time.
    //let bg = 'dark'; // this will be ignored beaucse you have already uses the css inline the code.
    // bgColor = 'blue'; // we can change the coming value of bgColor and that will reflect on the screen.

    return (
        <Fragment>
            <div className='container'>
                <div>
                    <img src="https://placebeard.it/160x90" alt="Image_placeholder" />
                </div>
                <div className="title" >{title}</div>
                <div className="channel" >{channel}</div>
                <div className="views" >{views} Views<span>.</span>{time}</div>
            </div>

        </Fragment>
    )
}

// export multiple component.
// if you make more than one component in the one file export them as object shorthand and import them as also in the object destructured way.
// but this us not the good way you should make the different component in the different file and export and import them differently.
export default Video;
