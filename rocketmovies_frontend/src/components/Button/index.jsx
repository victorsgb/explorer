import { Container } from './styles';

export function Button({title, icon: Icon, isDelete, ...rest}) {
  return (
    <Container isdelete={isDelete} {...rest}>
      {Icon && <Icon />}
      {title}
    </Container>
  );
}