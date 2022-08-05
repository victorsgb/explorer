import styled from 'styled-components';

export const Container = styled.div`
  height: 2.4rem;
  padding: 5px 1.6rem;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  font-family: 'Roboto', sans-serif;
  text-transform: capitalize;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;