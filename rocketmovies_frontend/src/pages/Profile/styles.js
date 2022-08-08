import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const UniqueHeader = styled.div`
    width: 100%;
    height: 14.4rem;

    background-color: ${({ theme }) => theme.COLORS.PINK_900};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    padding: 6.4rem 0 5.9rem 14.4rem;

    display: flex;
    align-items: center;
    justify-content: start;
    gap: 8px;

    > svg {
        width: 1.6rem;
        height: 1.6rem;
        color: ${({ theme }) => theme.COLORS.PINK_100};
    }

    > a {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.1rem;
        color: ${({ theme }) => theme.COLORS.PINK_100};
    }

    @media (max-width: 650px) {
        padding: 6.4rem 0 5.9rem 3.0rem;
    }

`;

export const Form = styled.div`
    width: 34.0rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
        border-bottom: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

        margin: -10.0rem auto 0;
    }

    > #username {
        margin: 6.4rem 0 8px;
    }

    > #old_password {
        margin: 2.4rem 0 8px;
    }

    > button {
        margin: 2.4rem 0 0.3rem;
    }
`;