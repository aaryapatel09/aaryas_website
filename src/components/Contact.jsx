import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setFormSubmitted(true);
    // In a real application, you would send the form data to a server
    // For this demo, we'll just show a success message
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'aarya.patel@example.com',
      link: 'mailto:aarya.patel@example.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Cupertino, California'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/aaryapatel',
      link: 'https://linkedin.com/in/'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'github.com/aaryapatel',
      link: 'https://github.com/'
    }
  ];

  return (
    <ContactSection id="contact" ref={ref}>
      <Container>
        <SectionTitle
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          Get In <span>Touch</span>
        </SectionTitle>
        
        <ContactContent>
          <ContactInfo
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactInfoTitle>Let's Connect</ContactInfoTitle>
            <ContactInfoText>
              I'm always interested in hearing about new opportunities, projects, or just connecting with fellow tech enthusiasts. Feel free to reach out!
            </ContactInfoText>
            
            <ContactInfoItems>
              {contactInfo.map((info, index) => (
                <ContactInfoItem 
                  key={info.title}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ContactInfoIcon>{info.icon}</ContactInfoIcon>
                  <ContactInfoContent>
                    <ContactInfoSubtitle>{info.title}</ContactInfoSubtitle>
                    {info.link ? (
                      <ContactInfoLink href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </ContactInfoLink>
                    ) : (
                      <ContactInfoValue>{info.value}</ContactInfoValue>
                    )}
                  </ContactInfoContent>
                </ContactInfoItem>
              ))}
            </ContactInfoItems>
          </ContactInfo>
          
          <ContactFormContainer
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {formSubmitted ? (
              <SuccessMessage
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <SuccessIcon>✓</SuccessIcon>
                <SuccessTitle>Message Sent!</SuccessTitle>
                <SuccessText>Thank you for reaching out. I'll get back to you as soon as possible.</SuccessText>
                <ResetButton onClick={() => setFormSubmitted(false)}>Send Another Message</ResetButton>
              </SuccessMessage>
            ) : (
              <ContactForm onSubmit={handleSubmit}>
                <FormGroup>
                  <FormLabel>Your Name</FormLabel>
                  <FormInput
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    whileFocus={{ borderColor: 'var(--color-primary)' }}
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Your Email</FormLabel>
                  <FormInput
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    whileFocus={{ borderColor: 'var(--color-primary)' }}
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Subject</FormLabel>
                  <FormInput
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    whileFocus={{ borderColor: 'var(--color-primary)' }}
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel>Message</FormLabel>
                  <FormTextarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    whileFocus={{ borderColor: 'var(--color-primary)' }}
                  />
                </FormGroup>
                
                <SubmitButton
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </SubmitButton>
              </ContactForm>
            )}
          </ContactFormContainer>
        </ContactContent>
      </Container>
      
      <BackgroundElement top="10%" right="-5%" color="var(--color-primary)" />
      <BackgroundElement bottom="10%" left="-5%" color="var(--color-accent)" />
    </ContactSection>
  );
};

const ContactSection = styled.section`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const ContactInfo = styled(motion.div)``;

const ContactInfoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
`;

const ContactInfoText = styled.p`
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const ContactInfoItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactInfoItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ContactInfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(114, 9, 183, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ContactInfoContent = styled.div``;

const ContactInfoSubtitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: var(--color-text);
`;

const ContactInfoValue = styled.p`
  color: var(--color-text-secondary);
  margin-bottom: 0;
`;

const ContactInfoLink = styled.a`
  color: var(--color-accent);
  text-decoration: none;
  transition: var(--transition-fast);
  
  &:hover {
    color: var(--color-primary);
  }
`;

const ContactFormContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 10px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text);
`;

const FormInput = styled(motion.input)`
  padding: 0.8rem 1rem;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-text);
  font-family: var(--font-primary);
  transition: var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const FormTextarea = styled(motion.textarea)`
  padding: 0.8rem 1rem;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--color-text);
  font-family: var(--font-primary);
  resize: vertical;
  transition: var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  border-radius: 5px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-neon));
  color: white;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(114, 9, 183, 0.3);
  transition: var(--transition-fast);
  border: none;
  
  &:hover {
    box-shadow: 0 6px 20px rgba(114, 9, 183, 0.5);
  }
`;

const SuccessMessage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 2rem;
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const SuccessTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--color-text);
`;

const SuccessText = styled.p`
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
`;

const ResetButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  background: transparent;
  color: var(--color-accent);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition-fast);
  border: 1px solid var(--color-accent);
  
  &:hover {
    background: rgba(76, 201, 240, 0.1);
  }
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

export default Contact; 