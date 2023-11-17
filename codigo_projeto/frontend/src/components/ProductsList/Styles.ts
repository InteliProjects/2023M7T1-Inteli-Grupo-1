import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 75rem;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 2rem 1rem;

    @media(max-width: 880px) {

        justify-content: center;

    }
`;
