import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  
  padding: 1.7rem 0;
  background-color: ${({ theme }) => theme.COLORS.PINK_100};
  border-radius: 1.0rem;
  cursor: pointer;
  
  color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  > svg {
    color: ${({ theme }) => theme.COLORS.BLACK};
  }

`;