import Spinner from "../components/Spinner";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory for redirection
import axios from 'axios'; // Import Axios for making API requests
import { HeadDescription } from '../components/Styles';
import NavbarLog  from '../components/NavbarHead';
import NabbarL from "../components/NabbarL";
import FooterBottom  from '../components/FooterBottom';
import "../css/home.css"
import {
    HeadTitle,
    PageContainer,
    ContentContainer,
    FormGroup,
    Input,
    Label,
    Button,
    
  } from '../components/Styles';

const Login = () => {
  const [formData, setFormData] = useState({
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
      const response = await axios.post('https://realma-x4y6.onrender.com/api/users/login', formData);

      // Handle successful login
      const { token } = response.data;
      localStorage.setItem('token', token);

      // Redirect to a protected route or any other page
      navigate('/Home'); // Change '/dashboard' to your desired destination
    } catch (error) {
      // Handle login failure, display an error message, etc.
      console.error('Login error:', error);
    }
  };

    return (
        <div>
        <NabbarL/>
        <PageContainer >
            <ContentContainer  >
            {/* <HeadTitle style={{ marginTop: '130px' }}>User Login</HeadTitle> */}
            {/* <form onSubmit={handleLogin}> */}
            
        <form className="form" style={{ margin: '130px 600px',border:"3px solid black",boxShadow: "1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,5px 5px 0px 0px",padding:"40px", maxWidth:"23%"}}onSubmit={handleSubmit}>
        <HeadTitle className='headtitle' style={{marginTop: '40px',marginBottom: '80px', fontFamily: "Chomsky",fontSize:"50px"}}>User Login</HeadTitle>
            <FormGroup>
            <Label>Email</Label>
            <Input
              type="text"
              placeholder="Enter here"
              name="email" // Update the name attribute to "email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter here"
              name="password" // Update the name attribute to "password"
              value={formData.password}
              onChange={handleChange}
            />
          </FormGroup>

          <Button style={{ marginLeft: '110px',marginTop: '50px' }} type="submit">Login</Button>
          <HeadDescription style={{ marginLeft: '30px'}}>New User? <a href ="/signup" >Signup!</a> </HeadDescription>


        </form>
            </ContentContainer>
            <FooterBottom />
        </PageContainer>
        </div>
    );
};

export default Login;

