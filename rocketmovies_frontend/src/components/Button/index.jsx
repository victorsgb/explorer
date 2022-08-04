import { Container } from './styles';

export function Button({ title, ...rest }){
  return (
    <Container>
      <button {...rest}>
        {title}
      </button>
    </Container>
  );
}