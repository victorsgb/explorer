import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Container, Content, TitleAndRating, Description } from './styles';

import { Header } from '../../components/Header';
import { FiArrowLeft, FiArrowRight, FiClock } from 'react-icons/fi';
import { Tag } from '../../components/Tag';
import { Rating } from '../../components/Rating';

import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { useAuth } from '../../hooks/auth';

export function Preview(){
    const params = useParams();
    const { user } = useAuth();
        
    const [note, setNote] = useState('');

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`);
            setNote(response.data);
        }

        fetchNote();
    }, []);

    return (
        <Container>
            <Header />
            <Content>
                <header>
                    <div>
                        <FiArrowLeft size={20} />
                        <Link to={-1}>Voltar</Link>
                    </div>
                    
                    <div>
                        <Link to={`/edit/${params.id}`}>Editar</Link>
                        <FiArrowRight size={20} />
                    </div>
                </header>
                <TitleAndRating>
                    <h1>{note.title}</h1>
                    <Rating value={note.rating} size={25} />
                </TitleAndRating>
                <Description>
                    <img
                        src={avatarURL}
                        alt={`Imagem de ${user.name}`}
                    />
                    <p>Por <span>{user.name}</span></p>
                    <FiClock />
                    <p>{note.created_at}</p>
                </Description>
                {
                    note.tags && 
                    <div className="tagsArea">
                        {
                            note.tags.map((tag) => (
                                <Tag title={tag.name} />
                            ))                           
                        }
                    </div>
                }
                <h2>{note.description}</h2>

            </Content>

        </Container>
    );
}