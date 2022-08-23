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

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    // State to exhibit the image on the interface
    const [avatar, setAvatar] = useState(avatarURL);

    // State to save the file directory
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: oldPassword,
            new_password: newPassword
        };

        const userUpdated = Object.assign(user, updated);
        await updateProfile({ user: userUpdated, avatarFile });
    }

    function handleAvatarChange(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    };

    function handleFocusToInput() {
        document.querySelector('#avatar').focus();
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
                        src={avatar}
                        alt={`Imagem de ${user.name}`}
                    />
                    <label 
                        htmlFor="avatar"
                        tabIndex={0}
                        onFocus={handleFocusToInput}
                    >
                        <FiCamera />
                        <input
                            id='avatar'
                            type='file'
                            onChange={handleAvatarChange}
                        />
                    </label>
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