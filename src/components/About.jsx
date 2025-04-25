import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLaptopCode, FaBrain, FaRobot, FaChalkboardTeacher } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <AboutSection id="about" ref={ref}>
      <SectionTitle
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        About <span>Me</span>
      </SectionTitle>
      
      <ContentContainer>
        <AboutImageContainer
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <AboutImage>
            <ProfileImagePlaceholder>
              <span>AP</span>
            </ProfileImagePlaceholder>
          </AboutImage>
          <AboutImageOverlay />
          <AboutImageBg />
        </AboutImageContainer>
        
        <AboutContent>
          <AboutText
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I'm Aarya Patel, a student at Homestead High School (Class of 2027) with a passion for Computer Science and Artificial Intelligence. My journey into the world of technology began with curiosity about how digital tools and systems shape our world.
          </AboutText>
          
          <AboutText
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            As a tech enthusiast, I'm dedicated to learning cutting-edge technologies and applying them to create solutions for real-world problems. I believe in the power of AI to transform various industries and improve people's lives.
          </AboutText>
          
          <InterestsContainer
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <InterestTitle>My Interests</InterestTitle>
            <InterestsGrid>
              <InterestCard
                whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(114, 9, 183, 0.3)' }}
                transition={{ duration: 0.3 }}
              >
                <InterestIcon>
                  <FaLaptopCode />
                </InterestIcon>
                <InterestName>Coding</InterestName>
              </InterestCard>
              
              <InterestCard
                whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(67, 97, 238, 0.3)' }}
                transition={{ duration: 0.3 }}
              >
                <InterestIcon className="brain">
                  <FaBrain />
                </InterestIcon>
                <InterestName>Machine Learning</InterestName>
              </InterestCard>
              
              <InterestCard
                whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(76, 201, 240, 0.3)' }}
                transition={{ duration: 0.3 }}
              >
                <InterestIcon className="robot">
                  <FaRobot />
                </InterestIcon>
                <InterestName>Artificial Intelligence</InterestName>
              </InterestCard>
              
              <InterestCard
                whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(181, 23, 158, 0.3)' }}
                transition={{ duration: 0.3 }}
              >
                <InterestIcon className="teach">
                  <FaChalkboardTeacher />
                </InterestIcon>
                <InterestName>STEM Education</InterestName>
              </InterestCard>
            </InterestsGrid>
          </InterestsContainer>
        </AboutContent>
      </ContentContainer>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 6rem 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  
  span {
    color: var(--color-primary);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, var(--color-primary), var(--color-accent));
    border-radius: 2px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const AboutImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 400px;
  
  @media (max-width: 992px) {
    max-width: 350px;
    height: 350px;
  }
  
  @media (max-width: 480px) {
    max-width: 280px;
    height: 280px;
  }
`;

const AboutImage = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const ProfileImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    font-size: 5rem;
    font-weight: 700;
    color: white;
    font-family: var(--font-secondary);
  }
`;

const AboutImageOverlay = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  width: 100%;
  height: 100%;
  border: 3px solid var(--color-accent);
  border-radius: 10px;
  z-index: 1;
`;

const AboutImageBg = styled.div`
  position: absolute;
  right: -20px;
  bottom: -20px;
  width: 100%;
  height: 100%;
  background: rgba(114, 9, 183, 0.2);
  border-radius: 10px;
  z-index: 0;
`;

const AboutContent = styled.div`
  flex: 1;
`;

const AboutText = styled(motion.p)`
  line-height: 1.8;
`;

const InterestsContainer = styled(motion.div)`
  margin-top: 2rem;
`;

const InterestTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--color-accent);
`;

const InterestsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const InterestCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 1.5rem 1rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  transition: var(--transition-medium);
`;

const InterestIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
  
  &.brain {
    color: var(--color-secondary);
  }
  
  &.robot {
    color: var(--color-accent);
  }
  
  &.teach {
    color: var(--color-neon);
  }
`;

const InterestName = styled.h4`
  font-size: 0.9rem;
  font-weight: 500;
`;

export default About; 