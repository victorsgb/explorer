import styled from 'styled-components';
import theme from '../../styles/theme';

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
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  > input {
    width: 100%;
    padding-left: 1.0rem;

    &:out-of-range {
      background-color: ${({ theme }) => theme.COLORS.PINK_900};

      color: ${({ theme }) => theme.COLORS.PINK_100};
    }
    
    &:focus, &:hover {
      box-shadow: 0 0 1.6rem 1rem ${({ theme }) => theme.COLORS.PINK_900}, inset -1px -2px 1.6rem 1rem ${({ theme }) => theme.COLORS.PINK_900};
    } 

  }

`;