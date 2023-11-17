import { styled } from "styled-components";

export const Container = styled.div`

    @media(min-width: 768px) {
        padding: 4.5rem 3rem;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    gap: 1rem;
`

export const Text = styled.p`
    font-size: 0.8rem;
    display: flex;
    justify-content: right;
    color: #00A868;
    margin:30px 0 -15px 0;
    font-weight: 600;
    text-decoration: none;

    &:hover {
        transform: scale(1.05);
    }
`;

export const InputBox = styled.div`
    margin: 6.5rem ;
    height: 100%;
    width: 30vw;
    text-decoration: none;

    @media (max-width: 768px) {
        width: 80vw;
    }
`;



export const CheckBox = styled.input`
    cursor: pointer;
    width: 1.15em;
    height: 1.15em;
`;

export const Check = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 0 0 0;
    gap: 10px;
`;

export const Label = styled.label`
    font-size: 0.95rem;
    text-align:right;
    color: #191D23;
    font-weight: 400;
`;

export const LabelOr = styled.label`
    font-size: 0.8rem;
    text-align:center;
    color: #999DA3;
    margin: 0 5px 0 5px;
    font-weight: 400;
    width: max-content; 
    white-space: nowrap;
`;


export const Line = styled.hr`
    display: flex;
    align-items: center;
    width: 100%;
    color: #999DA3;
`;

export const ButtonGoogle = styled.button`
    background-color: #E4E7EB; /* Google Red */
    border: none;
    width: 100%;
    height: max-content;
    color: #4B5768;
    padding: .5rem 1rem;
    border-radius: .5rem; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0 0 0;

    @media(min-width: 768px) {
        transition: .2s ease-in-out;

        &:hover {
            transform: scale(1.05);
        }
    }
`;

export const StyledLink = styled.a`
    
    color: var(--green);
    font-size: 0.9rem; 
    text-decoration: none;
    font-weight: 600;
    white-space: nowrap;

    &:hover {
        transform: scale(1.05);
    }
`;

export const Image = styled.img`
    height: 25px;
    width: 25px;
    margin-right: 10px;
`;

export const LabelConta = styled.label`
    font-size: 0.95rem;
    text-align:right;
    color: #191D23;
    font-weight: 400;
    white-space: nowrap;
`;

export const JaPossuiConta = styled.div`
    margin-top: 30px;
    display:flex;
    justify-content:center;
    font-weight: 400;
    gap: 5px;
`;

export const Alert = styled.p`
    font-size: 0.8rem;
    display: flex;
    color: "red";
    margin:5px 0 0 0;
    font-weight: 600;
    text-decoration: none;
`;

export const Termos = styled.div`
    margin-top: 10px;
    display:flex;
    flex-direction: column;
    justify-content:left;
    font-weight: 400;
    gap: 5px;

    @media(min-width: 768px) {
        flex-direction: row;
    }
`;

export const LabelTermo = styled.label`
    font-size: 0.95rem;
    color: #191D23;
    font-weight: 300;
`;