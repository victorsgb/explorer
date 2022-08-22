import { useState } from 'react';

import { Container, Form, Background } from './styles';
import { useNavigate } from 'react-router-dom';

import { Input } from '../../components/Input';
import { FiMail, FiLock } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { signIn } = useAuth();
  const navigate = useNavigate();

  function handleSignIn() {
    signIn({email, password});   
  }

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
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type='password' 
            placeholder='Senha' 
            icon={ FiLock }
            onChange={e => setPassword(e.target.value)}
          />

          <Button
            title='Entrar'
            onClick={handleSignIn}
          />

        </Form>
        
        <ButtonText
          className='button-text'
          title='Criar conta'
          onClick={() => navigate('/signup')}
        />
        
      </section>
      <Background />

    </Container>
  );
}