import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const navigate = useNavigate()

    const handleRegister = async () => {
        try {
            if (password !== repeatPassword) {
                console.error('Your Password might be wrong');
                return;
            }
            
            // Save registered user data to local storage
            const registeredUser = { name, email, password };
            localStorage.setItem('registeredUser', JSON.stringify(registeredUser));
    
            // Mock authentication, assuming successful registration
            const mockToken = 'mock_access_token';
            localStorage.setItem('accessToken', mockToken);
            // Redirect user to home page or any other protected route
            navigate('/');
        } catch (error) {
            console.error('Failed to register', error);
        }
    };

    return (
        <MDBContainer fluid>
            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>
                    <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                            <h2 className="fw-bold mb-2 text-center">Sign up</h2>
                            <p className="text-white-50 mb-3">Please enter your registration information!</p>

                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <MDBIcon fas icon="user me-3" size='lg' />
                                <MDBInput label='Your Name' id='name' type='text' className='w-100' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size='lg' />
                                <MDBInput label='Your Email' id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="lock me-3" size='lg' />
                                <MDBInput label='Password' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="key me-3" size='lg' />
                                <MDBInput label='Repeat your password' id='repeatPassword' type='password' value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                            </div>

                            <MDBBtn className='mb-4' size='lg' onClick={handleRegister}>Register</MDBBtn>

                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Register;
