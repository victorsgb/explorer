import styled from 'styled-components';

// import { Link } from 'react-router-dom';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK_900};

  padding: 3.2rem;
  border-radius: 1.6rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  grid-template-rows: 11.6rem auto;

  cursor: pointer;

  > p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-align: justify;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    max-height: 7.6rem;
    margin-bottom: 1.0rem;
  }

  > footer {
    display: flex;
    gap: 8px;

    width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;