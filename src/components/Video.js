import React, { Fragment } from 'react'
import './Video.css';
// we can not used if else in the return because that is not the valied object and that does not return any value.
const Video = ({ title, id, channel = "SUNNY RAJ", views, time, verified }) => {
    /* let channelJSX;
    if (verified) {
        channelJSX = <div className="channel" >{channel} ✅</div>
    } else {
        channelJSX = <div className="channel" >{channel} </div>
    } */
    // we can not apply if else in the return box because if else is statement that can not return any value.
    // null is valied JSX so we can  use this in place of second operation of ternary
    // ternary can be used because it return some value.
    // applied ternary on tic sign {verified ? "✅" : null}
    // we can also use it as short circuit (if verified true hoga then it proceed forward else it will not go) {verified && "✅"}
    // many times if verified is number then it return that number and so we need to check the verified value and their data type.
    // conditional rendering
    // make js code inside the string using the string literals.

    return (
        <Fragment>
            <div className='container'>
                <div>
                    <img src={`https://picsum.photos/id/${id}/200/200`} alt="Image_placeholder" />
                </div>

                <div className="title" >{title}</div>

                <div className="channel" >{channel} {verified && "✅"}</div>

                <div className="views" >{views} Views<span>.</span>{time}</div>
            </div>

        </Fragment>
    )
}

export default Video;