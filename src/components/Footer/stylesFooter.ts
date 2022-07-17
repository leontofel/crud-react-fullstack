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

    @media only screen and (max-width: 425px){
        flex-direction: column;
        img {
            min-width: 40vw;
        }
    }
    @media only screen and (max-width: 600px){
        flex-direction: column;
        img {
            min-width: 20vw;
        }
    }
    @media only screen and (max-width: 1200px){
        flex-direction: column;
        img {
            width: 20vw;
        }
    }      

`;

export { FooterContainer }