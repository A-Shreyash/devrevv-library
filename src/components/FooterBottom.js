import {
  FooterHeadContainer,
  FooterHeadText,

} from './Styles';

const FooterBottom = () => {
    return (
      
        <FooterHeadContainer>
            <FooterHeadText>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                Made by Shreyash
            </FooterHeadText>
        </FooterHeadContainer>
    );
  };
  
export default FooterBottom;
