import { Container } from './styles';

import { FiStar } from 'react-icons/fi';
import { Tag } from '../../components/Tag';

import { Rating } from '../../components/Rating';

export function Movie({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Rating value={data.rating} size={12}/>
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