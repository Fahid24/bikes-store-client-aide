import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocicalLogin from '../../SocialLogin/SocicalLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Titel from '../../Shared/Titel/Titel';

const Login = () => {
    const emailRef = useRef('')
    const location = useLocation();
    const navigate = useNavigate()
    const [checked, setChecked] = useState(false);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email ')
        }
        else {
            toast('Please give your email')
        }
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || sending) {
        return <h1 className='text-center my-5 py-5'>Lodgin...</h1>
    }
    return (
        <div className='row mb-5 h-100 '>
            <Titel title='Login'></Titel>
            <div className='col col-lg-6 col-md-6 col-sm-12 col-12 shadow mx-auto border bg-secondary  bg-opacity-10 rounded rounded-2 px-5 py-3'>
                <h2 className='text-center'>Please Login</h2>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" name='email' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password' required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setChecked(!checked)} type="checkbox" className={`${checked ? 'text-success' : 'text-danger'}`} label="Accept terms and condition" />
                    </Form.Group>
                    <Button disabled={!checked} variant="primary" type="submit" className='w-100 rounded-pill'>
                        Login
                    </Button>
                </Form>
                <div className='d-flex justify-content-between  my-2'>
                    <Link to='/register' className='text-decoration-none fw-bold text-success'>Create an Account</Link>
                    <span className='text-decoration-none text-danger fw-bold btn btn-link' onClick={resetPassword}>Reset Password</span>
                </div>

                {(error || error1) && <p className='text-danger text-center'>{error.message}</p>}
                <SocicalLogin></SocicalLogin>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;