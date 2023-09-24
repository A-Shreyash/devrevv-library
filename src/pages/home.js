import React from 'react';
import {
  HeadTitle,
  PageContainer,
  ContentContainer,
} from '../components/Styles';
import NavbarHead  from '../components/NavbarHead';
import FooterBottom  from '../components/FooterBottom';
import BookCards from '../components/bookcards';
import "../css/home.css"

const Home = () => {
  return (
    <div>
      <NavbarHead />
      <PageContainer>
        <ContentContainer>
          <HeadTitle className='headtitle' style={{marginTop: '130px', fontFamily: "Chomsky"}}>Library Management System</HeadTitle>
          <BookCards/>
        </ContentContainer>
      <FooterBottom />
      </PageContainer>
    </div>
  );
};

export default Home;
