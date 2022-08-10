import styled, { ThemeConsumer } from 'styled-components';

export const Container = styled.button`
  width: 100%;
 
  background-color: ${({ isdelete, theme }) => isdelete ? theme.COLORS.BACKGROUND_900 : theme.COLORS.PINK_100};
  padding: 1.3rem 3.2rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.1rem;
  color: ${({ isdelete, theme }) => isdelete ? theme.COLORS.PINK_100 : theme.COLORS.BACKGROUND_800 }

`;