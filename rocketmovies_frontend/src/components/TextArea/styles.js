import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  padding: 1.9rem 2.4rem;
  border-radius: 1.0rem;
  gap: 1.6rem;

  > textarea {
    width: 100%;
    height: 27.4rem;

    resize: none;
  } 
`;