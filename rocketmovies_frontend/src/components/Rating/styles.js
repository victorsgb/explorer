import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 3px;

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }
`;