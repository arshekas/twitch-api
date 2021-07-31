import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Channels from '../components/Channels/Channels';
import './Homepage.css'
function Homepage() {

    const [search, setsearch] = useState('');

    return (
        <div className="homepage">
            <div className="search">
                <input
                    placeholder="Search"
                    value={search}
                    onChange={(e) => {setsearch(e.target.value)}}
                    type="search"
                />    
                <SearchIcon />
            </div>    
            <Channels search={search}/>
        </div>
    )
}

export default Homepage
