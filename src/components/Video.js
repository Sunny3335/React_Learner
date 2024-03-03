import React, { Fragment } from 'react'
import './Video.css';

const Video = ({ title, id, channel = "SUNNY RAJ", views, time, verified,children }) => {

    return (
        <Fragment>
            <div className='container'>
                <div>
                    <img src={`https://picsum.photos/id/${id}/200/200`} alt="Image_placeholder" />
                </div>

                <div className="title" >{title}</div>

                <div className="channel" >{channel} {verified && "✅"}</div>

                <div className="views" >{views} Views<span>.</span>{time}</div>

                <div>{children}</div>
            </div>

        </Fragment>
    )
}

export default Video;