import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const techSkills = [
    { name: 'Python', level: 85, color: '#7209b7' },
    { name: 'HTML/CSS', level: 80, color: '#4361ee' },
    { name: 'JavaScript', level: 70, color: '#4cc9f0' },
    { name: 'Java', level: 65, color: '#b5179e' },
    { name: 'React', level: 60, color: '#3a0ca3' }
  ];

  const softSkills = [
    { name: 'Problem-Solving', icon: '🧩', description: 'Analytical thinking and creative solutions' },
    { name: 'Leadership', icon: '🚀', description: 'Guiding and motivating team members' },
    { name: 'Communication', icon: '💬', description: 'Clear and effective information exchange' },
    { name: 'Teamwork', icon: '👥', description: 'Collaborative efforts towards common goals' }
  ];

  return (
    <SkillsSection id="skills" ref={ref}>
      <Container>
        <SectionTitle
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          My <span>Skills</span>
        </SectionTitle>
        
        <SkillsContainer>
          <TechnicalSkills
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <SkillsSubtitle>Technical Skills</SkillsSubtitle>
            
            {techSkills.map((skill, index) => (
              <SkillBar key={skill.name}>
                <SkillInfo>
                  <SkillName>{skill.name}</SkillName>
                  <SkillPercentage>{skill.level}%</SkillPercentage>
                </SkillInfo>
                <SkillProgress>
                  <SkillProgressBar
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    style={{ background: skill.color }}
                  />
                </SkillProgress>
              </SkillBar>
            ))}
          </TechnicalSkills>
          
          <SoftSkillsContainer
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SkillsSubtitle>Soft Skills</SkillsSubtitle>
            
            <SoftSkillsGrid>
              {softSkills.map((skill, index) => (
                <SoftSkillCard 
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: '0 10px 25px rgba(114, 9, 183, 0.3)',
                    background: 'rgba(114, 9, 183, 0.1)'
                  }}
                >
                  <SoftSkillIcon>{skill.icon}</SoftSkillIcon>
                  <SoftSkillName>{skill.name}</SoftSkillName>
                  <SoftSkillDescription>{skill.description}</SoftSkillDescription>
                </SoftSkillCard>
              ))}
            </SoftSkillsGrid>
          </SoftSkillsContainer>
        </SkillsContainer>
        
        <SkillsNote
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <NoteHighlight>Constantly learning and exploring new technologies!</NoteHighlight>
          <p>As a high school student, I'm passionate about expanding my skills and knowledge in computer science and AI.</p>
        </SkillsNote>
      </Container>
      
      <BackgroundElement top="10%" left="-5%" color="var(--color-primary)" />
      <BackgroundElement bottom="20%" right="-5%" color="var(--color-accent)" />
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
  padding: 6rem 0;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  z-index: 1;
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

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const TechnicalSkills = styled(motion.div)``;

const SkillsSubtitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--color-text);
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50%;
    height: 3px;
    background: var(--color-accent);
    border-radius: 2px;
  }
`;

const SkillBar = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: 500;
`;

const SkillPercentage = styled.span`
  color: var(--color-accent);
  font-weight: 600;
`;

const SkillProgress = styled.div`
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const SkillProgressBar = styled(motion.div)`
  height: 100%;
  border-radius: 10px;
`;

const SoftSkillsContainer = styled(motion.div)``;

const SoftSkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SoftSkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: var(--transition-medium);
`;

const SoftSkillIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const SoftSkillName = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--color-accent);
`;

const SoftSkillDescription = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: 0;
`;

const SkillsNote = styled(motion.div)`
  margin-top: 4rem;
  padding: 2rem;
  background: rgba(114, 9, 183, 0.1);
  border-radius: 10px;
  border-left: 4px solid var(--color-primary);
  
  p {
    margin-bottom: 0;
  }
`;

const NoteHighlight = styled.h4`
  margin-bottom: 0.5rem;
  color: var(--color-accent);
`;

const BackgroundElement = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: ${props => props.color || 'var(--color-primary)'};
  opacity: 0.05;
  filter: blur(100px);
  z-index: 0;
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
`;

export default Skills; 