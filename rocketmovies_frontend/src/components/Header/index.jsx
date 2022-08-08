import { Container } from './styles';
import { Link } from 'react-router-dom';
import { Input } from '../Input';

export function Header(){
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder='Pesquisar pelo título'/>
      <div>
        <div>
          <span>Victor Baptista</span>
          <Link to='/'>sair</Link>
        </div>
        <Link to='/profile'>
          <img src="https://github.com/victorsgb.png" alt="Imagem do usuário" />
        </Link>
      </div>
    </Container>
  );
}