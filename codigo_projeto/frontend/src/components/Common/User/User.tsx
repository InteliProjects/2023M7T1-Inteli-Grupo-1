import { ReactSVG } from "react-svg";
import { Container, Image, ContainerNoImage, NoImage} from "./Styles";
import Title from '../Title/Title';
import { useAuth } from "../../../contexts/AuthContext";
import person from '../../../assets/img/person2.svg';

// criando contrato IUser
export interface IUser {
    id?: number,
    image?: string,
    name?: string,
    picture?: number,
}

export default function User() {

    // Verificar se o usuário está conectado utilizando o hook useAuth()
    const { isLoggedIn } = useAuth();

    // Verificar se o usuário está conectado
    if (isLoggedIn) {
    // Se o usuário estiver conectado, renderizar o seguinte conteúdo
    return (
        <Container>
        <Image src="https://www.suno.com.br/wp-content/uploads/2021/12/Elon-Musk-1-edited.jpg"/>
        </Container>
    );
    } else {
    // Se o usuário não estiver conectado, o código continua aqui

        return (
            <ContainerNoImage to={'/login'}>
                <NoImage>
                    <ReactSVG src={person} />
                </NoImage>
                <Title
                 content="Fazer Login"
                 size={8}
                 color="#fff" 
                 textalign="center"
                 margin="auto 6px"
                />
            </ContainerNoImage>
        );
    }
}


