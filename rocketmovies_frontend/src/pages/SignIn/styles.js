import styled from 'styled-components';

import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  
  display: flex;

  > section {
    max-width: 60.7rem;
    padding: 13.5rem 13.7rem 5.0rem;

    display: flex;
    flex-direction: column;
    gap: 4.8rem;

    header {
      
      h1 {
        font-weight: 700;
        font-size: 4.8rem;
        line-height: 6.4rem;
        color: ${({ theme }) => theme.COLORS.PINK_100};
      }
    
      p {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.9rem;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
      }
    }
  
    button:nth-child(3) {
      margin-top: -6px;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.1rem;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.PINK_100};
    }
  }

  @media (max-width: 650px) {
    > section {
      padding: 13.5rem 3.0rem 5.0rem;
    }
  }
`;

export const Form = styled.form`

  max-width: 34.0rem;

  > h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin-bottom: 4.8rem;
  }

  > div {
    margin-bottom: 8px;
  }

  > button {
    margin-top: 1.6rem;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100vh;

  background: url(${ backgroundImg}) no-repeat center;
  background-size: cover;

`;