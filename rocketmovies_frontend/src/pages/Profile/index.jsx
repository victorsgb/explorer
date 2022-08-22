import { useState } from 'react';

import { Container, UniqueHeader, Form } from './styles';
import  { Link } from 'react-router-dom';
import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { useAuth } from '../../hooks/auth';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from '../../services/api';

export function Profile(){
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: oldPassword,
            new_password: newPassword
        };

        await updateProfile({user: updated});
    }

    return (
        <Container>
            <UniqueHeader>
                <FiArrowLeft size={20} />
                <Link to={-1}>Voltar</Link>
            </UniqueHeader>
            <Form>
                <div className="img-wrapper">
                    <img 
                        src={avatarPlaceholder}
                        alt={`Imagem de ${user.name}`}
                    />
                    <Button
                        icon={FiCamera}
                    />
                </div>
                <Input
                    id='username'
                    type='text'
                    value={name}
                    placeholder='Nome' 
                    icon={ FiUser }
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    id='email'
                    type='text'
                    value={email}
                    placeholder='E-mail' 
                    icon={ FiMail }
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    id='old_password'
                    type='password' 
                    placeholder='Senha atual' 
                    icon={ FiLock }
                    onChange={(e) => setOldPassword(e.target.value)}
                />
                <Input
                    id='new_password'
                    type='password' 
                    placeholder='Nova senha' 
                    icon={ FiLock }
                    onChange={(e) => setNewPassword(e.target.value)}
                /> 
                <Button
                    title='Salvar'
                    onClick={handleUpdate}
                />               
            </Form>
         </Container>
    );
}