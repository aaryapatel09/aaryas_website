import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', target: 'home' },
    { name: 'About', target: 'about' },
    { name: 'Skills', target: 'skills' },
    { name: 'Experience', target: 'experience' },
    { name: 'Projects', target: 'projects' },
    { name: 'Contact', target: 'contact' }
  ];

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <NavContainer scrolled={scrolled}>
      <NavWrapper>
        <Logo
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span>Aarya</span> Patel
        </Logo>

        <NavLinks>
          {navLinks.map((link, index) => (
            <NavItem
              key={link.name}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <NavLink
                to={link.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
                activeClass="active"
              >
                {link.name}
              </NavLink>
            </NavItem>
          ))}
        </NavLinks>

        <MobileNavToggle onClick={toggleMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileNavToggle>

        <AnimatePresence>
          {mobileMenuOpen && (
            <MobileMenu
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <MobileNavItem
                  key={link.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <MobileNavLink
                    to={link.target}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={700}
                    activeClass="active"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </MobileNavLink>
                </MobileNavItem>
              ))}
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavWrapper>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all var(--transition-medium);
  background: ${props => props.scrolled ? 'rgba(15, 14, 23, 0.9)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${props => props.scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'};
  height: 80px;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  padding: 0 1rem;
`;

const Logo = styled(motion.div)`
  font-family: var(--font-secondary);
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  
  span {
    color: var(--color-primary);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(motion.li)``;

const NavLink = styled(Link)`
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-accent);
    transition: width var(--transition-medium);
  }
  
  &:hover:after, &.active:after {
    width: 100%;
  }
  
  &.active {
    color: var(--color-accent);
  }
`;

const MobileNavToggle = styled.button`
  display: none;
  background: transparent;
  font-size: 1.5rem;
  color: var(--color-text);
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.ul)`
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  background: rgba(15, 14, 23, 0.95);
  backdrop-filter: blur(10px);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavItem = styled(motion.li)`
  margin: 1rem 0;
  width: 100%;
  text-align: center;
`;

const MobileNavLink = styled(Link)`
  color: var(--color-text);
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem;
  display: inline-block;
  width: 100%;
  
  &.active {
    color: var(--color-accent);
    background: rgba(76, 201, 240, 0.1);
  }
`;

export default Navbar; 