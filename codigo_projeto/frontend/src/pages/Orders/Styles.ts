import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  height: 100vh;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;

  th, td {
    padding: 1rem;
    text-align: left;

  }

  tr:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  td:first-child, th:first-child {
    border-radius: 1rem 0 0 0;
  }

  td:last-child, th:last-child {
    text-align: right;
    border-radius: 0 1rem 0 0;
  }

  @media(max-width: 768px) {

    box-shadow: none;

    & tr:first-child {
      display: none;
    }
  
    & tr:not(:first-child) {
      display: flex;
      flex-direction: column;
      padding: .5rem;
      border-radius: 1rem;
      box-shadow: 2px 8px 24px rgba(103,116,129,.15);
      margin: 1rem 0;
      border: 1px solid rgba(102,112,125, .2);
    } 

  }
`;

export const StyledLink = styled(Link)`
text-decoration: none;
text-decoration: underline;
`

export const Td = styled.td<{before?: string}>`
@media(max-width: 768px) {
  display: inline-flex;
  white-space: nowrap;
  
  ${props => props.before && 
    `&::before {
      font-weight: 700;
      content: '${props.before}:';
      width: 100%;
      text-align: left;
    }`
  }
}
`