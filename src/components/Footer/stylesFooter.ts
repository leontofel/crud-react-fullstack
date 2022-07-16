import styled from "styled-components";
import { mediumSize, secondaryColor } from "../../styles/variables";

const FooterContainer = styled.footer`
    width: 100vw;
    height: 40vh;
    color: white;
    background-color: ${secondaryColor};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    img {
        width: 10vw;
        height: 20vh;
    }
    h4 {
        font-size: ${mediumSize};
    }

`;

export { FooterContainer }