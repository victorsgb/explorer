import { Container, UniqueHeader, Form } from './styles';
import  { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Header } from '../../components/Header';

export function Profile(){

    return (
        <Container>
            <UniqueHeader>
                <FiArrowLeft size={20} />
                <Link to='/'>Voltar</Link>
            </UniqueHeader>
            <Form>
                <img src="https://github.com/victorsgb.png" alt="Imagem do usuário" />
                <Input
                    id='username'
                    type='text' 
                    placeholder='Nome' 
                    icon={ FiUser }
                />
                <Input
                    id='email'
                    type='text' 
                    placeholder='E-mail' 
                    icon={ FiMail }
                />
                <Input
                    id='old_password'
                    type='password' 
                    placeholder='Senha atual' 
                    icon={ FiLock }
                />
                <Input
                    id='new_password'
                    type='password' 
                    placeholder='Nova senha' 
                    icon={ FiLock }
                /> 
                <Button title='Salvar'/>               
            </Form>
         </Container>
    );
}