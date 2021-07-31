import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addChannels, hideLoader, showLoader } from '../../redux/action';
import Channel from '../Channel/Channel';
import './Channels.css'
import Loading from '../../Loading/Loading';

function Channels({search}) {
    const [token, settoken] = useState('');
    const dispatch = useDispatch()
    const channels = useSelector(state => state.channels)
    const loading = useSelector(state => state.loading)

    //fetching access token
    useEffect(() => {
        const fetchToken = async () => {
            const result = await axios.post('https://id.twitch.tv/oauth2/token?client_id=0ng1gnnelqkvguyujea9c1vzjb3a0s&client_secret=bhkpy4lu3lu7fryhyqzo44bzihrd01&grant_type=client_credentials')
            settoken(result.data.access_token)
        };
        fetchToken();
    }, [])

    // using acess token and fetch channels according to user search
    useEffect(() => {
        const fetchData = async () => {
            dispatch(showLoader())
            const result = await axios.get(`https://api.twitch.tv/helix/search/channels?query=${search}&first=27`, {
                headers: {
                    "Client-ID": "0ng1gnnelqkvguyujea9c1vzjb3a0s",
                    "Authorization": "Bearer " + token
                }
            })
            dispatch(addChannels(result.data.data))
            dispatch(hideLoader())
        }
        if(search!=="")
        {
            fetchData();

        }
    }, [search])
      
    return (
        <div className="channels">
            {   loading 
                ? 
                <Loading /> 
                : 
                channels.map(channel => (
                    <Channel key={channel.id} channel={channel} />
                ))
            }           
        </div>
    )
}

export default Channels
