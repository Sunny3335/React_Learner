import React, { Fragment } from 'react'
import './Video.css';

// you can use it as destructuring value in place of props but in the curley braces.

const Video = ({ title, channel="SUNNY", views, time }) => {
    // let topic = "ReactJs Tutorial - ";
    // console.log(props);

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




// const Thumb = () => {
//   return (
//     <div>ThumbNail</div>
//   )
// }

// export multiple component.
export default Video;