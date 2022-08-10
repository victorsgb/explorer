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
    grid-area: content;
    overflow-y: auto;
    max-width: 113.7rem;
    margin: 0 auto;

    margin-top: 4.0rem;
    margin-bottom: 6.0rem;

    > header {
        display: flex;
        align-items: center;

        color: ${({ theme }) => theme.COLORS.PINK_100};
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.1rem;

        > a {
            color: ${({ theme }) => theme.COLORS.PINK_100};
        }
    }

    > .tagsArea {
        display: flex;
        gap: 8px;
        margin-bottom: 4.0rem;
    }

    > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.1rem;
        text-align: justify;
    }

    padding-right: 0;
    gap: 1.4rem;

    @media (max-width: 1130px) {
        padding: 0 3.0rem;
    }

`;

export const TitleAndRating = styled.div`
    display: flex;
    align-items: center;
    gap: 2.4rem;
    margin: 2.4rem 0 2.4rem;

    > h1 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-weight: 500;
        font-size: 3.6rem;
        line-height: 4.8rem;
    }

    > .rating {
        display: flex;
        align-items: center;
        gap: 1.0rem;

        svg {
            height: 1.8rem;
            width: 1.8rem;
            color: ${({ theme }) => theme.COLORS.PINK_100};
        }
    }
`;

export const Description = styled.div`
    display: flex;
    gap: 1.0rem;
    margin-bottom: 4.0rem;

    > img {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
    }

    > p {
        font-family: 'Roboto', sans-serif;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem;
    }

    > svg {
        height: 1.6rem;
        width: 1.6rem;
        color: ${({ theme }) => theme.COLORS.PINK_100};
    }
`;