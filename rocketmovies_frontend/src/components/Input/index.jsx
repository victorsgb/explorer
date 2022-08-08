import { Container } from './styles';

export function Input({id, icon: Icon, ...rest }){
  return (
    <Container id={id}>
      {Icon && <Icon size={20} />}
      <input {...rest}/>
    </Container>
  );
}