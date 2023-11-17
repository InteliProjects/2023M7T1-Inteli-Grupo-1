import { keyframes, styled } from "styled-components";

const fadeInAnimation = keyframes`
    from {
        opacity: 0;
        transform: translateX(-40px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 5rem 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
`;

export const ProgressBarBg = styled.div`
    height: 1rem;
    position: absolute;
    background: #E7E7E7;
    top: 0;
    left: 0;
    right: 0;
`

export const ProgressBar = styled.div<{progress: number}>`
    position: absolute;
    top: 0;
    left: 0;
    background: var(--green);
    height: 1rem;
    width: ${(props) => props.progress * 100}%;
    transition: .2s ease-in-out;
`;

export const Title = styled.h1`
`;

export const TitleInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    animation: ${fadeInAnimation} .3s ease-in-out;
`

export const Hint = styled.span<{valid: boolean}>`
    color: ${(props) => props.valid ? "#E1454D" : "var(--green)"};
    font-size: .8rem;
`

export const ButtonsRow = styled.div`
    display: flex;
    gap: 1rem;
`;

export const Button = styled.button`
    padding: 1rem;
    border
`;