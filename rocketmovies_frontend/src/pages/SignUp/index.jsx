import { useState } from 'react';
import { Container, Form, Background } from './styles';
import {  Link, useNavigate } from 'react-router-dom'

import { Input } from '../../components/Input';
import { FiUser, FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';

import { Button } from '../../components/Button';

import { api } from '../../services/api';

export function SignUp(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function handleSignUp() {
    await api.post('/users', {name, email, password})
      .then(() => {
        alert('You created your account with success! You will be redirected back to login.')
        navigate(-1);
      });
  }

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
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type='text' 
            placeholder='E-mail' 
            icon={ FiMail }
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type='password' 
            placeholder='Senha' 
            icon={ FiLock }
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            title='Entrar'
            onClick={handleSignUp}
          />

        </Form>
        
        <Link to={-1}>
          <FiArrowLeft size={20} />
          <span>Voltar para o login</span>
        </Link>
      </section>
      <Background />

    </Container>
  );
}