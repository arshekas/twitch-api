import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Channel_Details.css'
import moment from 'moment'
import Loading from './Loading';
import { hideLoader, showLoader } from '../redux/action';

function Channel_Detail(props) {
    const search = props.match.params.channel_id;
    const [token, settoken] = useState('');
    const [user, setUser] = useState('')
    const channels = useSelector(state => state.channels)
    const filteredChannel = channels.filter(channel => search === channel.id)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchToken = async () => {
            const result = await axios.post('https://id.twitch.tv/oauth2/token?client_id=0ng1gnnelqkvguyujea9c1vzjb3a0s&client_secret=bhkpy4lu3lu7fryhyqzo44bzihrd01&grant_type=client_credentials')
            settoken(result.data.access_token)
        };
        fetchToken();

    }, [])

    useEffect(() => {
        const fetchData = async () => {
            dispatch(showLoader())
            const result = await axios.get(`https://api.twitch.tv/helix/users?login=${filteredChannel[0]?.display_name}&scope=user:read:email`, {
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
        // return () => {
        //     cleanup
        // }
    }, [token])

    const display_name = user[0]?.display_name
    const title = filteredChannel[0]?.title
    const profile_image_url = user[0]?.profile_image_url
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
                    <div>
                    { (display_name) ? <h1>Name: {display_name}</h1> : ""}
                    { (title) ? <h3>Title: {title}</h3> : ""}
                    <img src={user[0]?.profile_image_url} />
                    { (description) ? <p>Description: {description}</p> : ""}
                    { (broadcaster_type) ? <p>Broadcaster Type: {broadcaster_type}</p> : ""}
                    { (game_name) ? <p>Game: {game_name}</p> : ""}
                    { (created_at) ? <p>Created at: {created_at}</p> : ""}
                    { (view_count) ? <p>Views: {view_count}</p> : ""}
                    { (type) ? <p>Type: {type}</p> : ""}
                    { (email) ? <p>Email: {email}</p> : ""}                
                    </div> 
                
    )
}

export default Channel_Detail
