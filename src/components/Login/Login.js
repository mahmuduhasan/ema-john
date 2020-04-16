import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    const handleSignIn = () => {
        auth.signInWithGoogle()
        .then(response => {
            window.location.pathname ='/review';
        })
    }
    const handleSignOut = () => {
        auth.signOutWithGoogle()
        .then(response => {
            window.location.pathname = '/shop';
        })
    }
    return (
        <div>
            <h1 className="text-primary">Join us Now!!</h1>
            {
                auth.user ? <button onClick={handleSignOut}>Sign out from Google!</button> :
                <button onClick={handleSignIn}>Sign in with Google!</button>
            }
        </div>
    );
};

export default Login;