import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Color palette */
    --color-bg: #0f0e17;
    --color-primary: #7209b7;
    --color-secondary: #4361ee;
    --color-accent: #4cc9f0;
    --color-neon: #b5179e;
    --color-text: #ffffff;
    --color-text-secondary: #a7a9be;
    
    /* Font variables */
    --font-primary: 'Outfit', sans-serif;
    --font-secondary: 'Space Grotesk', sans-serif;
    
    /* Transitions */
    --transition-slow: 0.5s ease-in-out;
    --transition-medium: 0.3s ease-in-out;
    --transition-fast: 0.2s ease-in-out;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-primary);
    background-color: var(--color-bg);
    color: var(--color-text);
    line-height: 1.6;
    overflow-x: hidden;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-secondary);
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4.5rem);
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3.5rem);
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
  }

  p {
    margin-bottom: 1.5rem;
    font-size: clamp(1rem, 2vw, 1.125rem);
  }

  a {
    text-decoration: none;
    color: var(--color-accent);
    transition: var(--transition-fast);
    
    &:hover {
      color: var(--color-neon);
    }
  }

  button {
    font-family: var(--font-primary);
    cursor: pointer;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  section {
    padding: 4rem 0;
  }

  .container {
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    section {
      padding: 3rem 0;
    }
  }
`;

export default GlobalStyles; 