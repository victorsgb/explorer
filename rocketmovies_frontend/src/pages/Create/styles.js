import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

`;

export const Content = styled.div`
  margin: 4.0rem 12.3rem 8.5rem;

  > header {

    display: flex;
    align-items: center;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.PINK_100};

    a {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.1rem;
      color: ${({ theme }) => theme.COLORS.PINK_100};
    }   
  }

`;

export const Form = styled.div`
  width: 100%;
  
  margin-top: 2.4rem;
  
`;