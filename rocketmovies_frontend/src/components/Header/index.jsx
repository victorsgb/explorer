import { useState, useEffect } from 'react';
import { Container } from './styles';
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../Input';
import { ButtonText} from '../ButtonText';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Header(){
  const { user, fetchNotes, signOut } = useAuth();
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleSignOut() {
    signOut();
    navigate('/');
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {

      if (typeof user.notes !== 'undefined' && user.notes.length === 1) {
        navigate(`/preview/${user.notes[0].id}`);
      }
    }
  }

  useEffect(() => {
    fetchNotes({user, search});
  }, [search]);

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input
        placeholder='Pesquisar pelo título ou marcador'
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
/>
      <div>
        <div>
          <span>{user.name}</span>
         
          <ButtonText
            title='sair'
            onClick={handleSignOut}
          />
        </div>
        <Link to='/profile'>
          <img
           src={avatarURL}
           alt={`Imagem de ${user.name}`}
          />
        </Link>
      </div>
    </Container>
  );
}