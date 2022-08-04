import { Container } from './styles';

import { Input } from '../Input';

export function Header(){
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Input placeholder='Pesquisar pelo título'/>
      <div>
        <div>
          <span>Victor Baptista</span>
          <a href="#">sair</a>
        </div>
        <img src="https://github.com/victorsgb.png" alt="Imagem do usuário" />
      </div>
    </Container>
  );
}