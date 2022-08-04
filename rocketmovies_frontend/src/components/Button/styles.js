import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  
  padding: 1.7rem 0;
  background-color: ${({ theme }) => theme.COLORS.PINK_100};
  border-radius: 1.0rem;
  cursor: pointer;
  
  > button {
    width: 100;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  }
`;