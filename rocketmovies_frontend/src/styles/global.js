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

  button, input { 
    font-family: 'Roboto Slab', serif;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.4rem;

    background: none;
    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_400}
    }
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-decoration: none;
  }

  a:hover, button:hover {
    filter: brightness(1.1);
  }

`;