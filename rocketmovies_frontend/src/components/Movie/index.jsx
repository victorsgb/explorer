import { Container, Rating } from './styles';

import { FiStar } from 'react-icons/fi';
import { Tag } from '../../components/Tag';

import theme from '../../styles/theme';

export function Movie({ data, ...rest }) {
  return (
    <Container {...rest}>
    <h1>{data.title}</h1>
    <Rating>
      <FiStar fill={data.rating >= 1 ? theme.COLORS.PINK_100 : theme.COLORS.PINK_900 }/>
      <FiStar fill={data.rating >= 2 ? theme.COLORS.PINK_100 : theme.COLORS.PINK_900 }/>
      <FiStar fill={data.rating >= 3 ? theme.COLORS.PINK_100 : theme.COLORS.PINK_900 }/>
      <FiStar fill={data.rating >= 4 ? theme.COLORS.PINK_100 : theme.COLORS.PINK_900 }/>
      <FiStar fill={data.rating >= 5 ? theme.COLORS.PINK_100 : theme.COLORS.PINK_900 }/>
    </Rating>
    <p>{data.description}</p>
    {
      data.tags && <footer>
        {
          data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
        }
      </footer>
    }
  </Container>
  );
}