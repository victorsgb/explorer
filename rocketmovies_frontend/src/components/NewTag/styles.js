import styled from 'styled-components';

export const Container = styled.div`
  height: 2.4rem;
  min-width: 14.0rem;
  padding: 2.0rem 1.2rem 2.0rem 0;

  background-color: ${({theme, isNew}) => isNew ? 'none' : theme.COLORS.BACKGROUND_700};
  border: ${({theme, isNew}) => isNew ? `3px dashed ${theme.COLORS.GRAY_500}` : `3px solid ${theme.COLORS.BACKGROUND_700}`};
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.0rem;
  
  > input {
    width: 100%;
    padding: 1.2rem;

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.8rem;
    text-transform: capitalize;
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_500 : theme.COLORS.WHITE};

    &:focus, &:hover {
      box-shadow: none;
      color: ${({ theme }) => theme.COLORS.PINK_100};

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.PINK_100};
      }
    }
  }

  > button {
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.PINK_100};   
    
    &:focus, &:hover {
      outline: none;
      box-shadow: 0 0 1.6rem 1rem ${({ theme }) => theme.COLORS.PINK_900}, inset -1px -2px 1.6rem 1rem ${({ theme }) => theme.COLORS.PINK_900};    
    }   
  }
`;