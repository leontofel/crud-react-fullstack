import styled from "styled-components";
import { largeSize, mediumSize, secondaryColor, tertiaryColor } from "../../styles/variables";


const ApplicationStartContainer = styled.section`
    width: 100vw;
    height: 60vh;
    h2 {
        font-size: calc(${largeSize} - 5px);
        color: white;
        width: 42vw;
        padding: 1.5rem;
        margin: 1.5rem 1.5rem 1.5rem 1rem;
        background-color: ${secondaryColor};
    }
    p, a {
        padding: 1rem;
        font-size: ${mediumSize};
        text-align: center;
    }
    a {
        margin-left: 30rem;
        color: ${tertiaryColor};
    }
`;

export { ApplicationStartContainer }