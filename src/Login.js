import React from 'react';

function Login(props){
    return (
        <form action="#" onSubmit={props.authorize}>
            <input type="password" placeholder="Password" />
            <input type="submit" />
        </form>
    )
}

export default Login