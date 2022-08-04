import { Container } from './styles';

import { Input } from '../../components/Input';
import { FiMail, FiLock } from 'react-icons/fi';

import { Button } from '../../components/Button';

export function SignIn(){
  return (
    <Container>
      <h1>RocketMovies</h1>
      <p>Aplicação para acompanhar tudo que assistir.</p>

      <h2>Faça seu login</h2>

      <Input
        type='text' 
        placeholder='E-mail' 
        icon={ FiMail }
      />
      <Input
        type='password' 
        placeholder='Senha' 
        icon={ FiLock }
      />

      <Button title='Entrar' />

    </Container>
  );
}