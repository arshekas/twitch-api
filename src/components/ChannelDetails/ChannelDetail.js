import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './ChannelDetails.css'
import moment from 'moment'
import Loading from '../../Loading/Loading';
import { hideLoader, showLoader } from '../../redux/action';

function ChannelDetail(props) {
    const search = props.match.params.channel_id;
    const [token, settoken] = useState('');
    const [user, setUser] = useState('')
    const channels = useSelector(state => state.channels)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    // filterchannel using id from params
    const filteredChannel = channels.filter(channel => search === channel.id)

    // fetching access token for API call
    useEffect(() => {
        const fetchToken = async () => {
            const result = await axios.post('https://id.twitch.tv/oauth2/token?client_id=0ng1gnnelqkvguyujea9c1vzjb3a0s&client_secret=bhkpy4lu3lu7fryhyqzo44bzihrd01&grant_type=client_credentials')
            settoken(result.data.access_token)
        };
        fetchToken();

    }, [])

    // use access token and fetch user using login_name
    useEffect(() => {
        const fetchData = async () => {
            dispatch(showLoader())
            const result = await axios.get(`https://api.twitch.tv/helix/users?login=${filteredChannel[0].display_name}&scope=user:read:email`, {
                headers: {
                    "Client-ID": "0ng1gnnelqkvguyujea9c1vzjb3a0s",
                    "Authorization": "Bearer " + token
                }
            })
            setUser(result.data.data)
            dispatch(hideLoader())
        }
        if(token!=="")
        {
            fetchData();
        }
    }, [token])

    const display_name = user[0]?.display_name
    const title = filteredChannel[0]?.title
    const is_live = filteredChannel[0]?.is_live
    const description = user[0]?.description
    const broadcaster_type = user[0]?.broadcaster_type
    const game_name = filteredChannel[0]?.game_name
    const view_count = user[0]?.view_count 
    const created_at = moment(user[0]?.created_at).format("MMMM Do YYYY, h:mm:ss a")
    const type = user[0]?.type
    const email = user[0]?.email

    return (
            loading 
                ? 
            <Loading /> 
                : 
            <div className="channel_detail">
                <div className="detail">
                    <div className="left">
                        <img src={user[0]?.profile_image_url} alt={display_name} />
                        { (display_name) ? <h1>{display_name}</h1> : ""}
                        { (is_live) ? <p>Live</p> : ""}
                    </div>
                    <div className="right">
                        { (view_count) ? <p><strong>Views: </strong>{view_count}</p> : ""}
                        { (created_at) ? <p><i><strong>Created at: </strong> {created_at} </i></p> : ""}
                        { (type) ? <p>Type: {type}</p> : ""}
                        { (email) ? <p>Email: {email}</p> : ""}                
                    </div>
                </div>
                <div className="description">
                    { (title) ? <p><strong>Title: </strong>{title}</p> : ""}
                    { (description) ? <p><strong>Desctiption: </strong>{description}</p> : ""}
                    { (broadcaster_type) ? <p><strong>Broadcaster type: </strong>{broadcaster_type}</p> : ""}
                    { (game_name) ? <p><strong>Game: </strong>{game_name}</p> : ""}
                </div>
            </div> 
                
    )
}

export default ChannelDetail
