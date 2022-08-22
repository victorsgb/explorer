import { Container, Title, Content } from './styles';

import { Header } from '../../components/Header'; 
import { Button } from '../../components/Button'; 
import { FiPlus, FiSmile } from 'react-icons/fi';

import { Movie } from '../../components/Movie'; 

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

export function Home(){
  const { user } = useAuth();

  const navigate = useNavigate();

  function handleCreateNote() {
    navigate('/create');
  }

  function handlePreviewNote(note_id) {
    navigate(`/preview/${note_id}`);
  }

  return (
    <Container>
      <Header />
      <main>
        <Title>
            <h1>Meus filmes</h1>
            <Button
              title='Adicionar filme'
              icon={FiPlus}
              onClick={handleCreateNote}
            />
        </Title>

        <Content>
          {
            user.notes &&
            <ul>
              {
                user.notes.map((note) => (
                  <li key={note.id}>
                    <Movie
                      data={note}
                      onClick={()=> handlePreviewNote(note.id)}
                    />
                  </li>
                ))
              }
            </ul>
          }
          {
            typeof user.notes === 'undefined' &&
            <h1 className='emptyList'>
              No movies to show yet!
              <FiSmile size={24} />
            </h1>

          }

        </Content>

      </main>

    </Container>
  );
}