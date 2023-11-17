import styled from "styled-components";

export const Container = styled.div`

    @media(min-width: 768px) {
        padding: 4.5rem 3rem;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const BackBtn = styled.div`
    background-color: #ebebeb;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    @media(max-width: 768px) {
        margin-top: 10vh;
    }
`

export const Alert = styled.p`
    font-size: 0.8rem;
    display: flex;
    color: "red";
    margin:5px 0 0 0;
    font-weight: 600;
    text-decoration: none;
`;

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
    height: 100%;
    width: 30vw;
    text-decoration: none;

    @media (max-width: 768px) {
        width: 80vw;
    }
`;

export const InformBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    color: #4B5768;
    background-color: #E4E7EB; /* Google Red */
    border: none;
    width: 100%;
    height: max-content;
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
    align-items: center;
    width: 100%;
    color: var(--green);
    margin-top: 15vh;
    display: flex;
    justify-content: center;
    font-size: 0.9rem; 
    text-decoration: none;
    font-weight: 600;

    &:hover {
        transform: scale(1.05);
    }
`;

export const Image = styled.img`
    margin-top: 5vh;
    height: 30vh;
    width: 40vw;
    
`;