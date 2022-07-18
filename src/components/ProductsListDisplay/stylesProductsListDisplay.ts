import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../styles/variables";

const ProductsListContainer = styled.div`

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
        p {
            color: red;
        }
    }
    .edit-button, .create-button{
        padding: 0.8rem;
        color: white;
        background-color: ${secondaryColor};
    }
`;

export { ProductsListContainer, FormContainer }