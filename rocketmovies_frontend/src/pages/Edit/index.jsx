import { useState, useEffect } from 'react';

import { Container, Content, Form } from './styles';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { Header } from '../../components/Header';
import { FiArrowLeft } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NewTag } from '../../components/NewTag';
import { Button } from '../../components/Button';

import { api } from '../../services/api';

export function Edit(){
  const params = useParams();
  const [note, setNote] = useState('');

  const [title, setTitle] = useState(note.title);
  const [rating, setRating] = useState(note.rating);
  const [description, setDescription] = useState(note.description);
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
  
  async function handleUpdateMovieData() {
    try {

      if (title && rating) {

        if (rating < 0 || rating > 5) {
          return alert('Invalid rating value');
        }

        await api.put('/notes', {
          title,
          rating,
          description,
          tags,
          note_id: Number(params.id)
        });
        alert('Movie updated with success!');

      } else {
        return alert('You cannot update movies with blank titles and/or ratings');
      }

    } catch(error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('Server unavailable. You could not update this movie.');
      }
    }
  }

  async function handleDeleteMovieData() {

    const confirm = window.confirm('Are you sure that you want to delete this entry? This action cannot be undone!');

    if (confirm) {

      try {
        await api.delete(`/notes/${Number(params.id)}`);
        alert('Movie deleted with success!');
        navigate('/');
      } catch(error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert('Server unavailable. You could not update this movie.');
        }
      }
  
    }

  }

  useEffect(() => {
      async function fetchNote() {
          const response = await api.get(`/notes/${params.id}`);
          setNote(response.data);

          setTitle(response.data.title);
          setRating(response.data.rating);
          setDescription(response.data.description);
          setTags(response.data.tags.map(tag => tag.name));
      }

      fetchNote();
  }, []);


  return (
    <Container>
      <Header />
      <Content>
        <header>
          <FiArrowLeft size={20} />
          <Link to={-1}>Voltar</Link>
        </header>
        
        <Form>
          <h1>Editar filme</h1>
          
          <div className="inputArea">
            <Input
              id='title'
              type='text'
              placeholder='Título'
              defaultValue={note.title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              id='rating'
              type='number'
              min='0'
              max='5'
              placeholder='Sua nota (de 0 a 5)'
              defaultValue={note.rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <TextArea
              id='observations'
              placeholder='Observações'
              defaultValue={note.description}
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
              onClick={handleDeleteMovieData}
              enabled={true}
            />
            <Button
              title='Salvar alterações'
              onClick={handleUpdateMovieData}
              enabled={title && rating ? true: false}
            />
          </div>
        </Form>
      </Content>

    </Container>
  );
}