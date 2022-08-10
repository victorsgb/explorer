import { Container } from './styles';

import { FiStar } from 'react-icons/fi';
import theme from '../../styles/theme';

export function Rating({value, size}) {
  return (
    <Container>

      <FiStar fill={value >= 1 ? theme.COLORS.PINK_100 : theme.COLORS.PINK_900 } size={size}/>
      <FiStar fill={value >= 2 ? theme.COLORS.PINK_100 : theme.COLORS.PINK_900 } size={size}/>
      <FiStar fill={value >= 3 ? theme.COLORS.PINK_100 : theme.COLORS.PINK_900 } size={size}/>
      <FiStar fill={value >= 4 ? theme.COLORS.PINK_100 : theme.COLORS.PINK_900 } size={size}/>
      <FiStar fill={value >= 5 ? theme.COLORS.PINK_100 : theme.COLORS.PINK_900 } size={size}/>

    </Container>
  );
}