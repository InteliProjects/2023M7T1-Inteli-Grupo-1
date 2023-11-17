import styled from "styled-components";

export interface PlanCardProps {
    title: string,
    subtitle: string,
    debit_fee: number,
    credit_fee: number,
    installments_fee: number
}

export const CardContainer = styled.div`
border-radius: 1rem;
color: #1d1d1f;
display: flex;
flex-direction: column;
gap: 1.5rem;
width: 100%;
cursor: pointer;
`;

export const CardImage = styled.img`
height: 4rem;
border-radius: 5px;
`;

export const CardHeader = styled.div`
display: inline-flex;
align-items: center;
gap: 1rem;
font-size: 1rem;
width: 100%;
margin: 10px 0;
`;

export const TitleSubtitleContainer = styled.div`
width: 100%;
`

export const CardTitle = styled.h3`
margin: .1rem 0;
`

export const CardSubtitle = styled.span`
color: #6e6e73;
font-size: 0.9rem;
`

export const CardFees = styled.div`
font-size: 14px;
display: flex;
text-align: center;
background: rgba(59,130,246, .15);
padding: .5rem;
border-radius: .5rem;
gap: 1rem;
`;

export const Fee = styled.span<{before: string}>`
color: var(--green);
width: 100%;
font-size: 1rem;
text-transform: uppercase;
display: inline-flex;
font-weight: 700;
flex-direction: column;

&::before {
    white-space: nowrap;
    font-weight: 500;
    font-size: .8rem;
    color: #1d1d1f;
    content: '${props => (props.before)}';
}
`