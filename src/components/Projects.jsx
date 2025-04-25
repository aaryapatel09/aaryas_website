import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [activeProject, setActiveProject] = useState(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const projects = [
    {
      id: 1,
      title: 'EcoTracker AI',
      description: 'A machine learning-powered app that helps users track and reduce their carbon footprint through personalized recommendations.',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React Native'],
      image: '#4361ee', // Placeholder color
      link: 'https://github.com/',
      icon: <FaMobileAlt />
    },
    {
      id: 2,
      title: 'Study Buddy',
      description: 'A web application that uses AI to help students organize study materials, create flashcards, and generate practice quizzes.',
      technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      image: '#7209b7', // Placeholder color
      link: 'https://github.com/',
      icon: <FaLaptopCode />
    },
    {
      id: 3,
      title: 'Smart Home Hub',
      description: 'An IoT project that connects and manages various smart home devices through a centralized dashboard with voice commands.',
      technologies: ['Raspberry Pi', 'Python', 'MQTT', 'React'],
      image: '#b5179e', // Placeholder color
      link: 'https://github.com/',
      icon: <FaCode />
    }
  ];

  const handleProjectClick = (id) => {
    if (activeProject === id) {
      setActiveProject(null);
    } else {
      setActiveProject(id);
    }
  };

  return (
    <ProjectsSection id="projects" ref={ref}>
      <Container>
        <SectionTitle
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          My <span>Projects</span>
        </SectionTitle>
        
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              onClick={() => handleProjectClick(project.id)}
              active={activeProject === project.id}
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(114, 9, 183, 0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              <ProjectImageContainer>
                <ProjectImagePlaceholder color={project.image}>
                  <ProjectIcon>{project.icon}</ProjectIcon>
                </ProjectImagePlaceholder>
                <ProjectLinks>
                  <ProjectLink 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub />
                  </ProjectLink>
                  <ProjectLink 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt />
                  </ProjectLink>
                </ProjectLinks>
              </ProjectImageContainer>
              
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>
                  {project.description}
                </ProjectDescription>
                
                <AnimatePresence>
                  {activeProject === project.id && (
                    <ProjectTechnologies
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.technologies.map(tech => (
                        <TechTag key={tech}>{tech}</TechTag>
                      ))}
                    </ProjectTechnologies>
                  )}
                </AnimatePresence>
                
                <ProjectExpand active={activeProject === project.id}>
                  {activeProject === project.id ? 'Show Less' : 'Show Tech Stack'}
                </ProjectExpand>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
        
        <ProjectsNote
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          These are some of the projects I've worked on so far. More exciting projects coming soon!
        </ProjectsNote>
      </Container>
      
      <BackgroundElement top="20%" left="-5%" color="var(--color-primary)" />
      <BackgroundElement bottom="10%" right="-5%" color="var(--color-accent)" />
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  transition: var(--transition-medium);
  
  ${props => props.active && `
    border-color: var(--color-primary);
    background: rgba(114, 9, 183, 0.1);
  `}
`;

const ProjectImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 200px;
`;

const ProjectImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.color || 'var(--color-primary)'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-medium);
`;

const ProjectIcon = styled.div`
  font-size: 4rem;
  color: rgba(255, 255, 255, 0.8);
`;

const ProjectLinks = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
`;

const ProjectLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  backdrop-filter: blur(5px);
  
  &:hover {
    color: white;
    background: var(--color-primary);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-text);
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectTechnologies = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  overflow: hidden;
`;

const TechTag = styled.span`
  background: rgba(76, 201, 240, 0.1);
  color: var(--color-accent);
  border-radius: 20px;
  padding: 0.3rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectExpand = styled.button`
  font-size: 0.85rem;
  color: var(--color-primary);
  background: transparent;
  padding: 0;
  text-decoration: underline;
  font-weight: 500;
  display: block;
  margin-left: auto;
  transition: var(--transition-fast);
  
  &:hover {
    color: var(--color-accent);
  }
  
  ${props => props.active && `
    color: var(--color-accent);
  `}
`;

const ProjectsNote = styled(motion.div)`
  width: 90%;
  max-width: 800px;
  margin: 4rem auto 0;
  text-align: center;
  padding: 1.5rem;
  background: rgba(114, 9, 183, 0.1);
  border-radius: 10px;
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

export default Projects; 