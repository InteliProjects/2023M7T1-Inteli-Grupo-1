/* eslint-disable @typescript-eslint/no-explicit-any */
// Importando os componentes e módulos necessários
import { useState } from "react";
import { Container, Content, FormsContainer, Alert, Img, StyledLink } from "./Styles";
import Title from "../../components/Common/Title/Title";
import Input from "../../components/Common/Input/Input";
import Button from "../../components/Common/Button/Button";
import password from '../../assets/img/password.png';
import { GLOBAL_CONFIG } from "../../config";
import { useNavigate } from "react-router-dom";

// Definindo o componente funcional principal
export default function PasswordRecovery() {

    // Definindo os estados iniciais
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("");
    const navigate = useNavigate();
    let alertColor = "red";

    // Função para enviar o e-mail de recuperação de senha
    const sendEmail = async () => {
        
        // Limpar erros anteriores
        setEmailError("");
        alertColor = "red";

        // Interface para erros de validação

        // Validações para o campo de e-mail
        if (!email) {
            setEmailError("O campo de email é obrigatório.");
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Por favor, insira um email válido.");
            return;
        }

        // Enviar solicitação para redefinir a senha via API
        fetch(`${GLOBAL_CONFIG.API_URL}/user/reset-pass`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email }),
        })
            .then(response => response.json())
            .then(response => {

                if (!(response.status === 200)) {
                    setEmailError("E-mail inválido, tente novamente.");
                    return;
                } 
                alertColor = "green"
                setEmailError("E-mail de verificação enviado com sucesso!");
            })
            .catch(error => {
                console.error("Erro ao enviar o e-mail:", error);
            });
    };

    // Renderização do JSX
    return (
        <Container>
            <Content>

                <Img src={password} />
                <Title size={2} margin="4vh 0 0 0" content="Esqueceu sua senha?"
                    textalign="center"
                />  
                <p
                    style={{
                        "fontWeight": "400",
                        "fontSize": "16px",
                        "textAlign": "center"
                    }}
                >
                    Digite um e-mail cadastrado para te enviarmos um link de alteração da sua senha.
                </p>
            </Content>

            <div style={{ width: "80%" }}>
                <Input
                    label="Email de recuperação"
                    variant="gray"
                    margin="30px 0 0 0"
                    placeholder="email@exemplo.com"
                    type="text"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                />
                {emailError && <Alert style={{ color: alertColor, justifyContent: "left" }}>{emailError}</Alert>}
                <FormsContainer>
                    <Button
                        margin="30px 0 0 0"
                        value="Enviar"
                        variant="primary"
                        width="100%"
                        height="5vh"
                        onClick={sendEmail}
                    />
                </FormsContainer>
            </div>

            <StyledLink to={"/login"} onClick={() => {navigate(-1)}}>
                Voltar para o login
            </StyledLink>
        </Container >
    );
}
