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

    .img-wrapper {

        margin: 0 auto;
        position: relative;

        img {
            width: 18.6rem;
            height: 18.6rem;
            border-radius: 50%;
            border-bottom: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
   
            margin: -10.0rem auto 0;
        }

        label {
            position: absolute;
            right: 1.0rem;
            top: 4.0rem;
            
            width: 4.0rem;
            height: 4.0rem;
            border-radius: 50%;
            border: 1px solid ${({ theme }) => theme.COLORS.PINK_100};
            background-color: ${({ theme }) => theme.COLORS.PINK_100};
            
            display: flex;
            align-items: center;
            justify-content: center;

            transition: all 200ms;
            
            cursor: pointer;

            &:hover, &:focus {
                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

                svg {
                    color: ${({ theme }) => theme.COLORS.PINK_100};;
                }
            }

            input {
                
                &::-webkit-file-upload-button {
                   visibility: hidden;
                }

                &:hover, &:focus {
                    opacity: 0.8;
                    width: 4.0rem;
                    height: 4.0rem;
                    border-radius: 50%;
                    background: none;
                    border: none;                   

                    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
                }
 
            }

            svg {
                position: absolute;

                color: ${({ theme }) => theme.COLORS.BACKGROUND_600};;

                height: 1.5rem;
                width: 1.8rem;
                cursor: pointer;

            }
        }
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

    @media (max-width: 650px) {
        padding: 0 3.0rem;        
    }


`;