import { useEffect, useState } from "react";
import './users.css';

export default function User(){
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    return (
        <div className="box">
            <h3>Users: {user.length}</h3>

            {user.map(user => <UserInfoOnUI user={user}></UserInfoOnUI>)}
        </div>
    )
}

function UserInfoOnUI({user}){
    return(
        <div className="box">
            <h4>Name: <i>{user.name}</i></h4>
            <h4>Email: <i>{user.email}</i></h4>
        </div>
    )
}