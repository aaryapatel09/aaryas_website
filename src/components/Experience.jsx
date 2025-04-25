import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCalendarAlt, FaCode, FaLaptop, FaUserFriends, FaTrophy } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const experienceItems = [
    {
      id: 1,
      title: 'Robotics Club',
      role: 'Team Member',
      period: '2022 - Present',
      description: 'Working with a team to design, build, and program competitive robots. Developed skills in mechanical design, electronics, and programming.',
      icon: <FaCode />,
      color: '#7209b7'
    },
    {
      id: 2,
      title: 'Science Olympiad',
      role: 'Participant',
      period: '2023 - Present',
      description: 'Participated in various science and engineering events, with a focus on computer science and robotics competitions.',
      icon: <FaTrophy />,
      color: '#4361ee'
    },
    {
      id: 3,
      title: 'AI Hackathon',
      role: 'Participant',
      period: 'Summer 2023',
      description: 'Participated in a weekend-long AI hackathon, developing a prototype app that uses machine learning to solve environmental challenges.',
      icon: <FaLaptop />,
      color: '#4cc9f0'
    },
    {
      id: 4,
      title: 'CS Peer Mentor',
      role: 'Volunteer',
      period: '2023 - Present',
      description: 'Assisting younger students with learning programming concepts and helping them develop their own coding projects.',
      icon: <FaUserFriends />,
      color: '#b5179e'
    }
  ];

  return (
    <ExperienceSection id="experience" ref={ref}>
      <Container>
        <SectionTitle
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <span>Experience</span> & Activities
        </SectionTitle>
        
        <TimelineContainer>
          {experienceItems.map((item, index) => (
            <TimelineItem 
              key={item.id}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              position={index % 2 === 0 ? 'left' : 'right'}
            >
              <TimelineItemContent position={index % 2 === 0 ? 'left' : 'right'}>
                <TimelineLine color={item.color} />
                <TimelineIcon color={item.color}>
                  {item.icon}
                </TimelineIcon>
                
                <TimelineCard
                  whileHover={{ 
                    y: -5, 
                    boxShadow: `0 10px 25px rgba(0, 0, 0, 0.2)` 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <TimelineDate>
                    <FaCalendarAlt /> {item.period}
                  </TimelineDate>
                  <TimelineTitle>{item.title}</TimelineTitle>
                  <TimelineRole>{item.role}</TimelineRole>
                  <TimelineDescription>{item.description}</TimelineDescription>
                </TimelineCard>
              </TimelineItemContent>
            </TimelineItem>
          ))}
        </TimelineContainer>
      </Container>
      
      <ExperienceNote
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        I'm always looking for new opportunities to learn and grow in technology and AI fields! If you have suggestions for clubs, competitions, or projects that might interest me, please reach out.
      </ExperienceNote>
      
      <BackgroundElement top="15%" right="-5%" color="var(--color-primary)" />
      <BackgroundElement bottom="10%" left="-5%" color="var(--color-secondary)" />
    </ExperienceSection>
  );
};

const ExperienceSection = styled.section`
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

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  
  &:after {
    content: '';
    position: absolute;
    width: 6px;
    background: rgba(255, 255, 255, 0.05);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    border-radius: 10px;
    
    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  left: ${props => props.position === 'right' ? '50%' : '0'};
  
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;
  }
`;

const TimelineItemContent = styled.div`
  padding: 0 20px;
  position: relative;
  text-align: ${props => props.position === 'left' ? 'right' : 'left'};
  
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const TimelineLine = styled.div`
  position: absolute;
  width: 25px;
  height: 3px;
  background-color: ${props => props.color || 'var(--color-primary)'};
  top: 25px;
  right: ${props => props.position === 'left' ? '0px' : 'auto'};
  left: ${props => props.position === 'right' ? '0px' : 'auto'};
  z-index: 1;
  
  @media (max-width: 768px) {
    left: -25px;
    right: auto;
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.color || 'var(--color-primary)'};
  top: 0;
  right: ${props => props.position === 'left' ? '-75px' : 'auto'};
  left: ${props => props.position === 'right' ? '-75px' : 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: white;
  z-index: 1;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    left: -75px;
    right: auto;
  }
`;

const TimelineCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 1.5rem;
  transition: var(--transition-medium);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
`;

const TimelineDate = styled.div`
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(114, 9, 183, 0.1);
  border-radius: 20px;
  font-size: 0.85rem;
  margin-bottom: 1rem;
  color: var(--color-accent);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
`;

const TimelineTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`;

const TimelineRole = styled.h4`
  font-size: 1rem;
  color: var(--color-accent);
  margin-bottom: 1rem;
  font-weight: 500;
`;

const TimelineDescription = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 0;
`;

const ExperienceNote = styled(motion.div)`
  width: 90%;
  max-width: 800px;
  margin: 4rem auto 0;
  text-align: center;
  padding: 1.5rem;
  background: rgba(114, 9, 183, 0.1);
  border-radius: 10px;
  font-style: italic;
  color: var(--color-text-secondary);
  font-size: 1rem;
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

export default Experience; 