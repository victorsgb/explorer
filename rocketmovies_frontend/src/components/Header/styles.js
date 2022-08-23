import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
  width: 100%;
  height: 11.6rem;
  
  display: flex;
  align-items: center;
  
  gap: 6.4rem;

  padding: 0 clamp(8px, 1.0rem + 5vw, 12.3rem);

  border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK_100};
    font-size: clamp(1.0rem, 1.0rem + 1vw, 2.0rem);
  }

  > div {
    display: flex;
    align-items: center;

    gap: 9px;
  }

  > div div {
    display: flex;
    flex-direction: column;
    text-align: end;
    align-items: end;
  }

  > div img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }

  > div div button {
    &:focus {
      outline: none;
    }
  }

  @media (max-width: 650px) {
    padding-right: 0;
    gap: 1.4rem;

    > div {
      gap: 0;
    }

    > div img {
      border-radius: 50% 0 0 50%;
      border-right: none; 
    }

  }
`;