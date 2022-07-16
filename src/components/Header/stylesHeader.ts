import styled from "styled-components";
import { backgroundColor, largeSize, primaryColor, secondaryColor } from "../../styles/variables";

const HeaderWrapper = styled.header`

    width: 100vw;
    height: 30vh;
    background-color: ${primaryColor};
    color: ${backgroundColor};
    display: flex;
    align-items: center;
    justify-content: space-around;
    img {
        max-width: 10vw;
    }
    h1 {
        font-size: ${largeSize};
        font-weight: bold;
    }
    ul {
        display: flex;
        a {
           text-decoration: none; 
           color: inherit;
        }
        li {
            margin: 1rem;
            padding: 1rem;
            &:hover {
                cursor: pointer;
                transition: .5s;
                color: ${secondaryColor};
                background-color: ${backgroundColor};
            }
        }
    }
`;

export { HeaderWrapper }