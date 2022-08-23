import styled from 'styled-components';

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 400;

  cursor: pointer;

  &:hover, &:focus {
    outline: none;
    box-shadow: ${({ theme}) => `0 0 1.6rem 1rem ${theme.COLORS.PINK_900}, inset -1px -2px 108.6rem 1rem ${theme.COLORS.PINK_900}`};
  }

`;