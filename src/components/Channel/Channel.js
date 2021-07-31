import React from 'react'
import { Link } from 'react-router-dom'
import './Channel.css'

function Channel({channel}) {
    return (
            <Link to={`/channels/${channel.id}`}>
                <div className="channel">
                    <img className="thumb_image" src={channel.thumbnail_url} alt={channel.display_name} />
                    {channel.is_live ? <span>Live</span> : ""}
                    <p>{channel.display_name}</p>
                </div>
            </Link>
    )
}

export default Channel
