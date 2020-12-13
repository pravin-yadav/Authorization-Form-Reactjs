import React from 'react';

function Login(){
    return (
        <form action="#" onSubmit={this.authorize}>
            <input type="password" placeholder="Password" />
            <input type="submit" />
        </form>
    )
}

export default Login