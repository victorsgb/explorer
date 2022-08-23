import { Container } from './styles';

export function Button({title, icon: Icon, enabled = true, isDelete, ...rest}) {
  return (
    <Container 
      type='button'
      isdelete={isDelete}
      enabled={enabled}
      disabled={!enabled}
      {...rest}
    >
      {Icon && <Icon />}
      {title}
    </Container>
  );
}