import styled from 'styled-components';

export const Container = styled.div`
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

export const Rating = styled.div`
  width: 100%;
  display: flex;
  gap: 6px;

  color: ${({ theme }) => theme.COLORS.PINK_100};
  font-size: 1.0rem;
`;