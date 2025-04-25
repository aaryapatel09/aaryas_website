import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <ScrollToTop
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={700}
        whileHover={{ y: -5, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaChevronUp />
      </ScrollToTop>
      
      <FooterContainer>
        <FooterContent>
          <FooterLogo>
            <LogoText><span>Aarya</span> Patel</LogoText>
            <LogoTag>Future Computer Scientist & AI Enthusiast</LogoTag>
          </FooterLogo>
          
          <FooterNav>
            <FooterNavTitle>Quick Links</FooterNavTitle>
            <FooterNavList>
              <FooterNavItem>
                <FooterNavLink
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  Home
                </FooterNavLink>
              </FooterNavItem>
              <FooterNavItem>
                <FooterNavLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  About
                </FooterNavLink>
              </FooterNavItem>
              <FooterNavItem>
                <FooterNavLink
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  Skills
                </FooterNavLink>
              </FooterNavItem>
              <FooterNavItem>
                <FooterNavLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  Projects
                </FooterNavLink>
              </FooterNavItem>
              <FooterNavItem>
                <FooterNavLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  Contact
                </FooterNavLink>
              </FooterNavItem>
            </FooterNavList>
          </FooterNav>
          
          <FooterSocial>
            <FooterSocialTitle>Connect With Me</FooterSocialTitle>
            <FooterSocialList>
              <FooterSocialItem>
                <FooterSocialLink 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaGithub />
                </FooterSocialLink>
              </FooterSocialItem>
              <FooterSocialItem>
                <FooterSocialLink 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaLinkedin />
                </FooterSocialLink>
              </FooterSocialItem>
              <FooterSocialItem>
                <FooterSocialLink 
                  href="mailto:aarya.patel@example.com" 
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaEnvelope />
                </FooterSocialLink>
              </FooterSocialItem>
            </FooterSocialList>
          </FooterSocial>
        </FooterContent>
        
        <FooterDivider />
        
        <FooterBottom>
          <FooterCopyright>
            &copy; {currentYear} Aarya Patel. All rights reserved.
          </FooterCopyright>
          <FooterCredit>
            Designed with <span>❤️</span> by Aarya Patel
          </FooterCredit>
        </FooterBottom>
      </FooterContainer>
    </FooterSection>
  );
};

const FooterSection = styled.footer`
  background: rgba(15, 14, 23, 0.8);
  padding: 4rem 0 2rem;
  position: relative;
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const ScrollToTop = styled(motion(Link))`
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-neon));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(114, 9, 183, 0.4);
  z-index: 10;
`;

const FooterContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterLogo = styled.div`
  margin-bottom: 1.5rem;
`;

const LogoText = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  
  span {
    color: var(--color-primary);
  }
`;

const LogoTag = styled.p`
  color: var(--color-text-secondary);
  font-size: 0.9rem;
`;

const FooterNav = styled.div`
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const FooterNavTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--color-primary);
    border-radius: 2px;
    
    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterNavList = styled.ul`
  list-style: none;
  padding: 0;
  
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

const FooterNavItem = styled.li`
  margin-bottom: 0.8rem;
  
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const FooterNavLink = styled(Link)`
  color: var(--color-text-secondary);
  transition: var(--transition-fast);
  cursor: pointer;
  
  &:hover {
    color: var(--color-accent);
  }
`;

const FooterSocial = styled.div`
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const FooterSocialTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--color-primary);
    border-radius: 2px;
    
    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterSocialList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FooterSocialItem = styled.li``;

const FooterSocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  font-size: 1.2rem;
  transition: var(--transition-fast);
  
  &:hover {
    background: var(--color-primary);
    color: white;
  }
`;

const FooterDivider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.05);
  margin: 2rem 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const FooterCopyright = styled.p`
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  margin: 0;
`;

const FooterCredit = styled.p`
  color: var(--color-text-secondary);
  font-size: 0.9rem;
  margin: 0;
  
  span {
    color: var(--color-neon);
  }
`;

export default Footer; 