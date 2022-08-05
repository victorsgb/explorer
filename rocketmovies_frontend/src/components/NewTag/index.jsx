import { Container } from './styles';

import { FiX, FiPlus } from 'react-icons/fi';

export function NewTag({ title, isNew, ...rest }){
  return (
    <Container 
      isNew={isNew}
      {...rest}
    >
      {title ? title : 'Novo marcador'}
      {isNew ? <FiPlus size={20}/> : <FiX size={20}/>}
    </Container>
  );
}