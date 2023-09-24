import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory for redirection
import axios from 'axios'; // Import Axios for making API requests
import {HeadDescription} from '../components/Styles';
import NabbarL from "../components/NabbarL";

import FooterBottom  from '../components/FooterBottom';
import {
    HeadTitle,
    PageContainer,
    ContentContainer,
    FormGroup,
    Input,
    Label,
    Button,
    
  } from '../components/Styles';

const Signup = () => {

  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
    });
    const navigate = useNavigate(); // Initialize history for redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://realma-x4y6.onrender.com/api/users/register', formData);

      // Handle successful registration
      console.log('Registration successful:', response.data);

      // Redirect to a login page or any other page
      navigate('/login'); // Change '/login' to your desired destination
    } catch (error) {
      // Handle registration failure, display an error message, etc.
      console.error('Registration error:', error);
    }
  };
    return (
      <div>
        <NabbarL />
        <PageContainer>
          <ContentContainer>
            {/* <HeadTitle style={{ marginTop: '130px' }}>User Signup</HeadTitle> */}
            {/* <form onSubmit={handleSignup}> */}
            
        {/* <form style={{ marginTop: '50px',marginLeft: '550px' }}onSubmit={handleSubmit}> */}
        <form className="form" style={{ marginTop: '105px',marginLeft: '550px',border:"3px solid black",boxShadow: "1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,5px 5px 0px 0px",padding:"40px", maxWidth:"23%", margin:"auto"}}onSubmit={handleSubmit}>
        <HeadTitle className='headtitle' style={{marginTop: '40px',marginBottom: '80px', fontFamily: "Chomsky",fontSize:"50px"}}>Signup</HeadTitle>
            <FormGroup>
            <Label>Username</Label>
            <Input
              type="text"
              placeholder="Enter your username"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
                type="text"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormGroup>

          <Button style={{ marginLeft: '110px',marginTop: '50px' }} type="submit">Signup</Button>
          <HeadDescription style={{ marginLeft: '20px'}}>Already an User? <a href ="/login" >Login!</a> </HeadDescription>

        </form>

            </ContentContainer>
            <FooterBottom />
        </PageContainer>
        </div>
    );
};

export default Signup;