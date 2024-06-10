import { useEffect, useState } from 'react'
import './fridens.css'
import Friend from './Friend'
export default function Friends () {

    const [friends, setFriends] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (res =>res.json())
        .then (data => setFriends(data))
    },[])

    return (
        <div className="box">
            <h3>Fridens :{friends.length}</h3>
            {
                friends.map(friend => <Friend friend ={friend}></Friend>)
            }
        </div>
    )
}


// 1.state  de