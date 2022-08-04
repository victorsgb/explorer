import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  padding: 1.9rem 2.4rem;
  border-radius: 1.0rem;
  gap: 1.6rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  > input {
    width: 100%;
  } 
`;