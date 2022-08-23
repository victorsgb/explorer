import styled, { ThemeConsumer } from 'styled-components';

export const Container = styled.button`
  width: 100%;
 
  background-color: ${({ isdelete, enabled, theme }) => isdelete 
    ? enabled ? theme.COLORS.BACKGROUND_900 : theme.COLORS.BACKGROUND_600 
    : enabled ? theme.COLORS.PINK_100 : theme.COLORS.BACKGROUND_600};
  padding: 1.3rem 3.2rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.1rem;
  color: ${({ isdelete, enabled, theme }) => isdelete
    ? enabled ? theme.COLORS.PINK_100 : theme.COLORS.BACKGROUND_800
    : theme.COLORS.BACKGROUND_800 };

  filter: ${({ enabled }) => enabled ? 'brightness(1.0)' : 'brightness(1.1)' };

  cursor: ${({ enabled}) => enabled ? 'pointer' : 'click'};

  &:hover, &:focus {
    outline: ${({ enabled, theme }) => enabled ? `1px solid ${theme.COLORS.PINK_100}` : `none` };
    box-shadow: ${({ enabled, theme}) => enabled ? `0 0 1.6rem 1rem ${theme.COLORS.PINK_900}, inset -1px -2px 108.6rem 1rem ${theme.COLORS.PINK_900}` : `none` };  

    background-color: ${({ isdelete, enabled, theme }) => isdelete 
    ? enabled ? theme.COLORS.BACKGROUND_600 : theme.COLORS.BACKGROUND_600
    : enabled ? theme.COLORS.BACKGROUND_600 : theme.COLORS.BACKGROUND_600};

    color: ${({ isdelete, enabled, theme }) => isdelete
      ? enabled ? theme.COLORS.PINK_100 : theme.COLORS.BACKGROUND_800
      : enabled ? theme.COLORS.PINK_100 : theme.COLORS.BACKGROUND_800 };

  }
`;