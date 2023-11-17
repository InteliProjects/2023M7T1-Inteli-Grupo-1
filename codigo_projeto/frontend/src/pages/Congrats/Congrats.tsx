// Importing necessary components and modules
import {
    Container,
    InputBox,
    BackBtn,
    InformBox,
    StyledLink,
    Image
} from "./Styles";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Common/Title/Title";
import Img from "../../../src/assets/img/Illustration.svg";
import { GLOBAL_CONFIG } from "../../config";
import { useState } from "react";
import { FaArrowLeft } from 'react-icons/fa';

// Defining the main functional component
export default function Congrats() {
   // Inicializando o gancho de navegação
    const navigate = useNavigate();

    // Estado para armazenar o e-mail do usuário para a geração de OTP
    const [email, setEmail] = useState("");

    // Função para gerar OTP e navegar
    const generateOTP = async () => {
        // Navegando para a página de confirmação
        navigate("/confirm-email");

        // Descomente as linhas a seguir se o estado de e-mail for usado
        setEmail("");
        // const userData = {
        //     email: email
        // };

        // Fazendo uma solicitação fetch para gerar OTP
        fetch(`${GLOBAL_CONFIG.API_URL}/generate-otp`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email }),
        })
        .then(response => response.json())
        .then(response => {

            // Verificando o status da resposta e navegando de acordo
            if (response.status === 200) {
                // setIsOTPGenerated(true);
                navigate("/confirm-email", { state: email });
            } else {
                console.error("Error generating OTP:", response.error);
            }
        })
        .catch(error => {
            console.error("Error generating OTP:", error);
        });
    };

    // JSX rendering
    return (
        <Container>
            {/* Input box containing information */}
            <InputBox>
                {/* Back button */}
                <BackBtn>
                    <FaArrowLeft />
                </BackBtn>
                {/* Box with congratulatory message and instructions */}
                <InformBox>
                    {/* Image */}
                    <Image src={Img} />
                    {/* Main title */}
                    <Title
                        textalign="center"
                        size={2}
                        content="Muito Bem!"
                        margin="2vh 0 0 0"
                    />
                    {/* Instructional messages */}
                    <Title
                        size={6}
                        color="gray"
                        textalign="center"
                        margin="2vh 0 0 0"
                        content="Te enviamos um email de verificação, dá uma olhada na caixa de entrada e segue as instruções pra ativar sua conta!"
                    />
                    <Title
                        size={6}
                        color="gray"
                        textalign="center"
                        margin="2vh 0 0 0"
                        content="Obrigado por se juntar a nós!"
                    />
                    {/* Button for making login */}
                    <StyledLink onClick={generateOTP}>
                        Fazer Login
                    </StyledLink>
                </InformBox>
            </InputBox>
        </Container>
    );
}
