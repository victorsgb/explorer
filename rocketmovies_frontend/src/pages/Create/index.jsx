import { Container, Content, Form } from './styles';

import { Header } from '../../components/Header';
import { FiArrowLeft } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NewTag } from '../../components/NewTag';

export function Create(){
  return (
    <Container>
      <Header />
      <Content>
        <header>
          <FiArrowLeft size={20} />
          <a href='#'>Voltar</a>
        </header>
        
        <Form>
          <h1>Novo filme</h1>
          
          <Input type='text' placeholder='Título' />
          <Input type='number' min='0' max='5' placeholder='Sua nota (de 0 a 5)' />
          <TextArea placeholder='Observações'/>

          <h2>Marcadores</h2>
          <div className="tagArea">
            <NewTag title='React' />
            <NewTag isNew />
          </div>

        </Form>
      </Content>

    </Container>
  );
}