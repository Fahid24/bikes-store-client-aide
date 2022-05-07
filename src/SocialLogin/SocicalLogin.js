import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const SocicalLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }
    return (
        <div>
            {error && <p className='text-danger text-center'>{error.message}</p>}
            <div className='mt-3'>
                <button onClick={handleGoogleSignIn} className='btn btn-white shadow w-100 rounded-pill border-success'> Google Login</button>
            </div>
        </div>
    );
};

export default SocicalLogin;