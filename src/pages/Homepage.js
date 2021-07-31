import React, { useState } from 'react'
import Channels from '../components/Channels'
import Search from '../components/Search'

function Homepage() {

    const [search, setsearch] = useState('');

    return (
        <div className="homepage">
            <input
                className="search"
                placeholder="Search for channels"
                value={search}
                onChange={(e) => {setsearch(e.target.value)}}
                type="search"
            />        
            <Channels search={search}/>
        </div>
    )
}

export default Homepage
