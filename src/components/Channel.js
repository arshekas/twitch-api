import React from 'react'
import { Link } from 'react-router-dom'
import './Channel.css'

function Channel({channel}) {
    return (
        <div className="channel">
            <img className="thumb_image" src={channel.thumbnail_url} />
            <Link to={`/channels/${channel.id}`}>{channel.display_name}</Link>
        </div>
    )
}

export default Channel
