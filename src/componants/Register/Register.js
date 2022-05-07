
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Titel from '../../Shared/Titel/Titel';
import SocicalLogin from '../../SocialLogin/SocicalLogin'
const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate()
    const emailRef = useRef();
    const passwordRef = useRef()
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const handleRegistration = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password)
    }
    if (loading) {
        return <p>Loading...</p>
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div className='container mx-auto rounded row mx-autod  d-flex justify-content-center '>
            <Titel title='Register'></Titel>

            <div className=' col-sm-12 col-lg-6 border shadow pb-5 px-5'>
                <h1 className='text-primary text-center text-opacity-75'>Register an account</h1>
                <Form onSubmit={handleRegistration} className='mb-2'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="your name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} type="checkbox" label="Accept terms and condition" />
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={!agree} className='w-100'>
                        Register
                    </Button>
                </Form>
                {error && <p className='text-danger text-center'>{error.message}</p>}
                <div>
                    <Link to='/login' className='text-primary text-decoration-none pt-2 '> Go to login</Link>
                </div>
                <SocicalLogin></SocicalLogin>
            </div>
        </div>
    );
};

export default Register;
