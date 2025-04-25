import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <HeroSection id="home">
      <ParallaxBg>
        <ParallaxCircle1 
          animate={{ 
            y: [0, -30, 0], 
            opacity: [0.4, 0.2, 0.4]
          }} 
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut" 
          }}
        />
        <ParallaxCircle2 
          animate={{ 
            x: [0, 40, 0], 
            opacity: [0.3, 0.1, 0.3]
          }} 
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut" 
          }}
        />
        <ParallaxCircle3 
          animate={{ 
            x: [0, -20, 0], 
            y: [0, 20, 0],
            opacity: [0.2, 0.1, 0.2]
          }} 
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "easeInOut" 
          }}
        />
      </ParallaxBg>

      <HeroContainer>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Greeting>Hello, I'm</Greeting>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Name>Aarya Patel</Name>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TypedText>
              <span>Future Computer Scientist</span>
              <TypedCursor />
            </TypedText>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <HeroDescription>
              Homestead High School student (Class of 2027) with a passion for artificial intelligence and technology.
            </HeroDescription>
          </motion.div>
          
          <ButtonContainer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <PrimaryButton
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </PrimaryButton>
            
            <SecondaryButton
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </SecondaryButton>
          </ButtonContainer>
          
          <SocialLinks
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <SocialLink 
              href="https://github.com/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#7209b7' }}
              transition={{ duration: 0.2 }}
            >
              <FaGithub />
            </SocialLink>
            <SocialLink 
              href="https://linkedin.com/" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#4361ee' }}
              transition={{ duration: 0.2 }}
            >
              <FaLinkedin />
            </SocialLink>
          </SocialLinks>
        </HeroContent>
      </HeroContainer>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={700}
        >
          <ScrollIcon 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaArrowDown />
          </ScrollIcon>
          <ScrollText>Scroll Down</ScrollText>
        </ScrollLink>
      </ScrollIndicator>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
`;

const ParallaxBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const ParallaxCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
`;

const ParallaxCircle1 = styled(ParallaxCircle)`
  width: 500px;
  height: 500px;
  background: var(--color-primary);
  top: -10%;
  right: -10%;
  opacity: 0.4;
`;

const ParallaxCircle2 = styled(ParallaxCircle)`
  width: 300px;
  height: 300px;
  background: var(--color-secondary);
  bottom: -5%;
  left: -5%;
  opacity: 0.3;
`;

const ParallaxCircle3 = styled(ParallaxCircle)`
  width: 200px;
  height: 200px;
  background: var(--color-accent);
  top: 50%;
  left: 25%;
  opacity: 0.2;
`;

const HeroContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
`;

const Greeting = styled.h3`
  color: var(--color-accent);
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  margin-bottom: 1rem;
  background: linear-gradient(to right, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const TypedText = styled.div`
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: inline-flex;
  font-family: var(--font-secondary);
`;

const TypedCursor = styled.span`
  width: 3px;
  height: 1.5em;
  background-color: var(--color-neon);
  margin-left: 8px;
  display: inline-block;
  animation: blink 1s infinite;
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

const HeroDescription = styled.p`
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(motion(Link))`
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  text-align: center;
  transition: var(--transition-fast);

  @media (max-width: 480px) {
    width: 100%;
    max-width: 250px;
  }
`;

const PrimaryButton = styled(Button)`
  background: linear-gradient(90deg, var(--color-primary), var(--color-neon));
  color: white;
  box-shadow: 0 4px 15px rgba(114, 9, 183, 0.4);

  &:hover {
    box-shadow: 0 6px 20px rgba(114, 9, 183, 0.6);
    color: white;
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: var(--color-text);
  border: 2px solid var(--color-primary);
  
  &:hover {
    background: rgba(114, 9, 183, 0.1);
    color: var(--color-accent);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  font-size: 1.5rem;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

const ScrollLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ScrollIcon = styled(motion.div)`
  color: var(--color-accent);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ScrollText = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--color-text-secondary);
`;

export default Hero; 