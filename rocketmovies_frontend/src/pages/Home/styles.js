import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

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

  .emptyList {

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;

    color: ${({ theme }) => theme.COLORS.PINK_100}
  }
`;

export const Title = styled.div`
  padding: 5.0rem 10.6rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  > h1 {
    font-weight: 400;
    font-size: 3.2rem;
    line-height: 4.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  
  > button {
    max-width: 20.7rem;
  }

  @media (max-width: 650px) {
    padding: 5.0rem 3.6rem;
  }
`;

export const Content = styled.div`
  padding: 0 3.2rem;
  width: 100vw;

  > ul {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  li {
    list-style: none;
  }
`;