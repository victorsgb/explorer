import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  
  padding: 1.7rem 0;
  background-color: ${({ isDelete, theme }) => isDelete ? theme.COLORS.BACKGROUND_900 : theme.COLORS.PINK_100};
  border-radius: 1.0rem;
  cursor: pointer;

  color: ${({ isDelete, theme }) => isDelete ? theme.COLORS.PINK_100 : theme.COLORS.BACKGROUND_600};
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  > svg {
    color: ${({ theme }) => theme.COLORS.BLACK};
  }

`;