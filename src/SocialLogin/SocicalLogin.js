import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebse.init';
import img from '../componants/img/download-removebg-preview.png'
import Loading from '../Shared/Loading/Loading';
import { useLocation, useNavigate } from 'react-router';



const SocicalLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div>
            {error && <p className='text-danger text-center'>{error.message}</p>}
            <div className='mt-3'>
                <button onClick={handleGoogleSignIn} className='btn btn-white shadow w-100 rounded-pill border-success'> <img style={{ width: '30px' }} src={img} alt="" /> Google Login</button>
            </div>
        </div>
    );
};

export default SocicalLogin;