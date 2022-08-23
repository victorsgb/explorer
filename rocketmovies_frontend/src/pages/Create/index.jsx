import { useState } from 'react';

import { Container, Content, Form } from './styles';
import { Link, useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { FiArrowLeft } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NewTag } from '../../components/NewTag';
import { Button } from '../../components/Button';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

export function Create(){
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const navigate = useNavigate();

  function handleAddTag() {
    if (newTag) {
      setTags(prevState => [...prevState, newTag]);
      setNewTag('');
    }
  };

  function handleDeleteTag(tagName) {
    setTags(prevState => prevState.filter((tag) => tag !== tagName));
  }

  async function handleAddMovieData() {

    try {

      if (title && rating) {

        if (rating < 0 || rating > 5) {
          return alert('Invalid rating value');
        }

        const response = await api.post('/notes', {title, rating, description, tags});
        alert('Movie registered with success!');

        navigate(`/edit/${response.data.note_id}`);

      } else {
        return alert('You cannot register movies with blank information');
      }

    } catch(error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Server unavailable. You could not register this movie.');
      }
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <header>
          <FiArrowLeft size={20} />
          <Link to={-1}>Voltar</Link>
        </header>
        
        <Form>
          <h1>Novo filme</h1>
          
          <div className="inputArea">
            <Input
              id='title'
              type='text'
              placeholder='Título'
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              id='rating'
              type='number'
              min='0'
              max='5'
              placeholder='Sua nota (de 0 a 5)'
              onChange={(e) => setRating(e.target.value)}
            />
            <TextArea
              id='observations'
              placeholder='Observações'
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <h2>
            Marcadores
            <span>
              {tags.length > 0 ? `: ${tags.length} selecionado${tags.length > 1 ? 's' : ''}` : ': Nenhum selecionado'}
            </span>
          </h2>
          <div className="tagsArea">
            {
              tags.map((tag, index) => (
                <NewTag
                  key={String(index)}
                  value={tag}
                  onClick={() => handleDeleteTag(tag)}
                />
              ))              
            }
            <NewTag
              isNew
              placeholder='Novo marcador'
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onClick={handleAddTag}
            />
          </div>

          <div className="buttonsArea">
            <Button
              title='Excluir filme'
              isDelete
              enabled={false}
            />
            <Button
              title='Salvar filme'
              onClick={handleAddMovieData}
              enabled={title && rating && description ? true: false}
            />
          </div>
        </Form>
      </Content>

    </Container>
  );
}