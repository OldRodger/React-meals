import styled from 'styled-components';

export const FlexBox = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding: 1rem 0;

    &:not(:last-child){
        border-bottom: 1px solid var(--color-primary-light);
    }

    h2{
        color: var(--color-secondary);
        font-size: 2rem;
    }

    i{
        font-size: 1.4rem
    }

    strong{
        font-size: 1.6rem;
        font-weight: 700;
        color: var(--color-secondary-dark);
    }
    
`;

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ButtonBrown = styled.button`
    border: none;
    padding: .8rem 4rem;
    border-radius: 2.5rem;
    background-color: var(--color-secondary-dark);
    color: white;
    font-weight: 700;
    cursor: pointer;
    margin-top: 5px;
`