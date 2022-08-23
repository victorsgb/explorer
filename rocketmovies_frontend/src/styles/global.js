import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    font-family: 'Roboto Slab', serif;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  input, textarea, img { 
    font-family: 'Roboto Slab', serif;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.4rem;

    background: none;
    border: none;
    outline: none;

    transition: all 200ms;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500}
    }

    &:focus, &:hover {
      /* outline: 16px solid ${({ theme }) => theme.COLORS.PINK_900}; */
      box-shadow: 0 0 1.6rem 1rem ${({ theme }) => theme.COLORS.PINK_900}, inset -1px -2px 108.6rem 1rem ${({ theme }) => theme.COLORS.PINK_900};
    } 
  }

  button { 
    font-family: 'Roboto Slab', serif;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.4rem;

    background: none;
    border: none;
    outline: none;

    transition: all 200ms;
  }

  a {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    text-decoration: none;

    &:hover {
      filter: brightness(1.1);
    }
  
    &:focus {
      outline: none;
      box-shadow: 0 0 1.6rem 1rem ${({ theme }) => theme.COLORS.PINK_900}, inset -1px -2px 108.6rem 1rem ${({ theme }) => theme.COLORS.PINK_900};
    }
  }



/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: ${({ theme }) => theme.COLORS.PINK_100} none;
  }
  
  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 18px;
  }
  
  *::-webkit-scrollbar-track {
    background: none;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK_100};
    border-radius: 8px;
    border: 6px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

`;