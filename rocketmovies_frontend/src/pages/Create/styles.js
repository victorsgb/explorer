import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
  'header'
  'content';

`;

export const Content = styled.div`
  margin: 4.0rem 12.3rem 8.5rem;

  grid-area: content;
  overflow-y: auto;

  padding: 0 1.0rem 0 1.0rem;

  > header {

    display: flex;
    align-items: center;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.PINK_100};

    a {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.1rem;
      color: ${({ theme }) => theme.COLORS.PINK_100};
    }   
  }

  @media (max-width: 650px) {
    margin: 4.0rem 3.0rem 8.5rem;
  }

`;

export const Form = styled.div`
  width: 100%;
  
  margin-top: 2.4rem;

  > .inputArea {
    display: grid;
    gap: 4.0rem;

    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    'input-title input-rating'
    'observations observations';

    #title {
      grid-area: input-title;  
    }

    #rating {
      grid-area: input-rating;
    }

    #observations {
      grid-area: observations;
    }
  }

  > h1 {
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.8rem;

    margin-bottom: 4.0rem;
  }

  > h2 {
    font-weight: 400;
    font-size: 2.0rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};

    margin: 4.0rem 0 2.4rem;

    span {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.PINK_100};
    }
  }

  > .tagsArea {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 8px;
    padding: 1.6rem;

    display: flex;
    gap: 2.4rem;

    margin: 2.4rem 0 4.0rem;
    overflow-x: scroll;
  }
  
  > .buttonsArea {
    display: flex;
    gap: 4.0rem;

    padding-bottom: 2.4rem;
  }
`;