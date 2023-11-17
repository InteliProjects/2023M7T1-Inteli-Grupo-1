import styled from "styled-components";

export const Overlay = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: fixed;
left: 0;
right: 0;
top: 0;
bottom: 0;
z-index: 3;
background: rgba(0, 0, 0, .8);

`

export const Content = styled.div`
background: #fff;
height: 30vw;
width: 50vw;
border-radius: 1rem;
position: relative;
display: flex;
flex-direction: column;
padding: 1rem;  

@media(max-width: 768px) {
    position: absolute;
    width: 100vw;
    bottom: 0;
    height: max-content;
    z-index: 4;
    scroll: auto;
}
`

export const ButtonsRow = styled.div`
display: flex;
width: 100%;
align-items: flex-end;
justify-content: flex-end;
gap: 2rem;
`
