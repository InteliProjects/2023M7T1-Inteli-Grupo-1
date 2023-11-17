// Importing necessary components and modules
import { useState } from "react";
import { Container, InputBox, Content, FormsContainer, BackBtn } from "./Styles";
import Title from "../../components/Common/Title/Title";
import Input from "../../components/Common/Input/Input";
import Button from "../../components/Common/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { GLOBAL_CONFIG } from "../../config";
import { FaArrowLeft } from 'react-icons/fa';

// Defining the main functional component
export default function Confirm() {
   // Inicialização do gancho de navegação
    const navigate = useNavigate();

    // Uso do gancho de localização para acessar dados da rota
    const location = useLocation();

    // Definição de uma variável de estado para o email (atualmente comentada)
    const [email, setEmail] = useState("");

    // Descomente o seguinte bloco se location.state for necessário
    // Verificar se há dados de estado na localização
    if (!location.state) {
        return <div>No data available.</div>;
    }
    setEmail(location.state.email);

    /**
     * Função para verificar o OTP (One-Time Password)
     * @returns {void}
     */
    const verifyOTP = async () => {
        // Navega para a página principal
        navigate("/");

        // Descomente as linhas seguintes se o estado de email for usado
        setEmail(location.state.email);
        const userData = {
            email: email
        };

        // Faz uma solicitação fetch para gerar o OTP
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

            // Verifica o status da resposta e navega de acordo
            if (response.status === 200) {
                // setIsOTPGenerated(true);
                navigate("/confirm-email", { state: userData });
            } else {
                console.error("Error generating OTP:", response.error);
            }
        })
        .catch(error => {
            console.error("Error generating OTP:", error);
        });
    };


    // Rendering the JSX
    return (
        <Container>
            <Content>
                <BackBtn>
                    {/* Using an ion-icon for the back button */}
                    <FaArrowLeft />
                </BackBtn>
                <Title size={1} margin="8vh 0 0 0" content="Verificação OTP" />
                <Title size={4} margin="3vh 0 0 0" color="gray" content="Insira o código de verificação que acabamos de enviar no seu email." />
            </Content>
            
            {/* OTP input form */}
            <form>
                <InputBox>
                    {/* Four input fields for the OTP */}
                    <Input value="" variant="otp" onChange={() => {}} size="1.5rem" placeholder="0" type="int" borderradius="9px" width="20px" />
                    <Input value="" variant="otp" onChange={() => {}} size="1.5rem" placeholder="0" type="int" borderradius="9px" width="20px" />
                    <Input value="" variant="otp" onChange={() => {}} size="1.5rem" placeholder="0" type="int" borderradius="9px" width="20px" />
                    <Input value="" variant="otp" onChange={() => {}} size="1.5rem" placeholder="0" type="int" borderradius="9px" width="20px" />
                </InputBox>
                <FormsContainer>
                    {/* Button to verify OTP */}
                    <Button
                        margin="30px 0 0 0"
                        value="Verificar"
                        variant="primary"
                        width="100%"
                        height="7vh"
                        onClick={verifyOTP}
                    />
                </FormsContainer>
            </form>

            {/* Resend OTP section */}
            <Title size={6} margin="1vh 0 0 0" color="gray" content="Reenviar OTP em 2s" />
            <Title size={7} margin="1vh 0 0 0" color="gray" content="Reenviar OTP" />
        </Container>
    );
}
