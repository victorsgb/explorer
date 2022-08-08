import { Container, Form, Background } from './styles';
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input';
import { FiMail, FiLock } from 'react-icons/fi';

import { Button } from '../../components/Button';

export function SignIn(){
  return (
    <Container>
      
      <section>       
        <header>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </header>

        <Form>
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

        </Form>
        
        <Link to='/signup'>
          Criar conta
        </Link>
      </section>
      <Background />

    </Container>
  );
}