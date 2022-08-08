import { Container } from './styles';

export function TextArea({id, ...rest }){
  return (
    <Container id={id}>
      <textarea {...rest}/>
    </Container>
  );
}