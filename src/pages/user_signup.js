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
        <form className="form" style={{  margin: '130px auto', // Center the form horizontally
          maxWidth: '400px',
          border: '3px solid black',
          boxShadow: '1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px',
          padding: '20px',
          paddingTop: '80px',
          paddingBottom: '80px'
          }}onSubmit={handleSubmit}>
        <HeadTitle className='headtitle' style={{fontFamily: 'Chomsky',
    fontSize: '50px',
    textAlign: 'center',
    marginTop: '10px',
    marginBottom: '50px'}}>Signup</HeadTitle>
    <center >
            <FormGroup style={{ marginBottom: '20px',textAlign:'center',display:'inline'}}>
            <Label>Username</Label>
            <Input style={{width: '60%'}}
              type="text"
              placeholder="Enter your username"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormGroup>
          </center>
          <center >
          <FormGroup style={{paddingTop:'10px',paddingLeft:'60px',textAlign:'center'}}>
            <Label>Email</Label>
            <Input style={{width: '60%'}}
                type="text"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
          </FormGroup>
          </center>
          <center>
          <FormGroup style={{paddingTop:'10px',paddingLeft:'40px',paddingBottom:'40px',textAlign:'center'}}>
            <Label>Password</Label>
            <Input style={{width: '60%'}}
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormGroup>
          </center>
          <Button style={{ marginLeft: 'auto',
    marginRight: 'auto', // Center the button horizontally
    marginTop: '20px',
    display: 'block' }} type="submit">Signup</Button>
          <HeadDescription style={{ textAlign: 'center'}}>Already an User? <a href ="/login" >Login!</a> </HeadDescription>

        </form>

            </ContentContainer>
            <FooterBottom />
        </PageContainer>
        </div>
    );
};

export default Signup;