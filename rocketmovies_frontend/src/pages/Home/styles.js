import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
  'header'
  'content';

  > main {
    grid-area: content;
    overflow-y: auto;
    max-width: 114.0rem;
    margin: 0 auto;
  }

`;

export const Title = styled.div`
  padding: 5.0rem 10.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 4.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  #button-create {
    max-width: 20.7rem;
  }

  @media (max-width: 650px) {
    padding: 5.0rem 3.6rem;
  }
`;

export const Content = styled.div`

  > ul {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  li {
    list-style: none;
  }
`;