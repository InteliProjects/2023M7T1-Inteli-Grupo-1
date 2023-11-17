import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
display: flex;
align-items: center;
height: 4rem;
padding: 0 2rem;
gap: 4rem;
width: 100%;
position: fixed;
z-index: 2;
background-color: var(--green);
box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;

@media (max-width: 1114px) {
    gap: 2.5rem;
}

`
export const LinkButton = styled.button`
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: inherit;
  font-size: 24px;
`;

export const Menu = styled.div`
  position: absolute;
  top: 4rem;
  left: 0rem;
  right: 0;
  background-color: var(--green);
  border-radius: 0 0 .5rem .5rem;
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media(max-width: 768px) {
    width: 100vw;
    left: 0;
    border-radius: 0;
  }
`;

export const MenuItem = styled(Link)`
text-decoration: none;
display: flex;
align-items: center;
padding: .8rem 2rem;
cursor: pointer;

svg {
width: 24px;
height: 24px;
margin-right: 10px;
}

span {
font-size: 16px;
color: #fff;
}

&:hover {
background-color:#108554;
}
`;

