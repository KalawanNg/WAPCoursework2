import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBRadio
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const MemberChoosingForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Check if the user is logged in
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      // Redirect to login page if user is not logged in
      navigate('/login');
      return;
    }

    // Perform form submission actions
    // For demonstration purposes, we'll simply set submitted to true
    setSubmitted(true);
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='justify-content-center align-items-center m-5'>
        <MDBCard>
          <MDBCardBody className='px-4'>
            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Member Choosing Form</h3>
            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Birthday' size='lg' id='form3' type='text'/>
              </MDBCol>

              <MDBCol md='6' className='mb-4'>
                <h6 className="fw-bold">Gender: </h6>
                <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
              </MDBCol>

            </MDBRow>

            <MDBRow>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email'/>
              </MDBCol>

              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel'/>
              </MDBCol>

            </MDBRow>

            <select className="form-select mb-4" aria-label="Choose option" size="lg">
                <option value="" disabled selected>Choose option</option>
                <option value="1">Regular Member</option>
                <option value="2">Premium Member</option>
                <option value="3">Standar Member</option>
            </select>

            {submitted ? (
              <p className="text-success">Successful Submission</p>
            ) : (
              <>
                {/* Form fields */}
                <MDBBtn className='mb-4' size='lg' onClick={handleSubmit}>Submit</MDBBtn>
              </>
            )}
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
};

export default MemberChoosingForm;
