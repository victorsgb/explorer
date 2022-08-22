import styled from 'styled-components';

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 400;

  cursor: pointer;
`;