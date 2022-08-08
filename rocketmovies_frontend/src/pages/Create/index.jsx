import { Container, Content, Form } from './styles';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { FiArrowLeft } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NewTag } from '../../components/NewTag';
import { Button } from '../../components/Button';

export function Create(){
  return (
    <Container>
      <Header />
      <Content>
        <header>
          <FiArrowLeft size={20} />
          <Link to='/'>Voltar</Link>
        </header>
        
        <Form>
          <h1>Novo filme</h1>
          
          <div className="inputArea">
            <Input id='title' type='text' placeholder='Título' />
            <Input id='rating' type='number' min='0' max='5' placeholder='Sua nota (de 0 a 5)' />
            <TextArea id='observations' placeholder='Observações'/>
          </div>

          <h2>Marcadores</h2>
          <div className="tagsArea">
            <NewTag title='React' />
            <NewTag isNew />
          </div>

          <div className="buttonsArea">
            <Button title='Excluir filme' isDelete/>
            <Button title='Salvar alterações'/>
          </div>
        </Form>
      </Content>

    </Container>
  );
}