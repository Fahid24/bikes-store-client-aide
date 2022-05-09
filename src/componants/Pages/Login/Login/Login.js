import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../../../firebse.init';
import Footer from '../../../../Shared/Footer/Footer';
import Loading from '../../../../Shared/Loading/Loading';
import SocicalLogin from '../../../../SocialLogin/SocicalLogin';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const onSubmit = data => {

        const email = data.email;
        const password = data.password;

        signInWithEmailAndPassword(email, password)

        data.reset()
    };

    if (user) {
        navigate(from, { replace: true })
    }
    if (loading) {
        <Loading></Loading>
    }

    return (
        <div className='row  my-5 mb-5'>
            <div className=" shadow p-5 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mx-auto  bg-secondary bg-opacity-10">
                <h1 className='text-center'>Please login </h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input className="w-100 p-2 border-0 shadow" {...register('email')} placeholder="your name" required /><br />
                    <input className="w-100 p-2 my-3 border-0 shadow"  {...register('password')} placeholder='enter password' required /><br />
                    <input className='w-100 btn btn-primary' type="submit" />
                </form>
                {(error) && <p className='text-danger text-center'>{error.message}</p>}
                <Link to="/register" className='text-primary text-decoration-none'>Create an account</Link>
                <SocicalLogin></SocicalLogin>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;