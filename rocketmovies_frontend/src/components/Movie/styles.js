import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK_900};

  padding: 3.2rem;
  border-radius: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  > footer {
    display: flex;
    gap: 8px;
  }

`;