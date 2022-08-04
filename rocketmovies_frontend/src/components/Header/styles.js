import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 11.6rem;
  
  display: flex;
  align-items: center;
  
  gap: 6.4rem;

  padding: 0 12.3rem;

  border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK_100};
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
  }

  > div img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`;