import styled from "styled-components";

const ProductsListContainer = styled.div`

    form {

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .button-container {
        margin: 1rem;
        
        display: flex;
        align-items: center;
        justify-content: center;
        button {
            padding: 1rem;
            margin: 1rem;
            font-size: 1rem;
        }
    }
`;

const FormContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form {
        margin: 1rem;
        label, input {
            margin: 0.5rem;
        }
        input:last-child {
            margin-left: 8rem;
            margin-top: 2rem;
        }
    }
`;

export { ProductsListContainer, FormContainer }