import { Container, Form, Background } from './styles';

import { Input } from '../../components/Input';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import { Button } from '../../components/Button';

export function SignUp(){
  return (
    <Container>
      
      <section>       
        <header>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </header>

        <Form>
          <h2>Crie sua conta</h2>
          <Input
            type='text' 
            placeholder='Nome' 
            icon={ FiUser }
          />
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
        
        <a href="#">
          <FiArrowLeft size={20} />
          <span>Voltar para o login</span>
        </a>
      </section>
      <Background />

    </Container>
  );
}