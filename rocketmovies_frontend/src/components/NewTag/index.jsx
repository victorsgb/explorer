import { Container } from './styles';

import { FiX, FiPlus } from 'react-icons/fi';

export function NewTag({ isNew = false, value, onClick, ...rest }){
  return (
    <Container 
      isNew={isNew}
    >
      <input
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />
      <button
        type='button'
        onClick={onClick}
      >
        {isNew ? <FiPlus size={20}/> : <FiX size={20}/>}
      </button>
    </Container>
  );
}