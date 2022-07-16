import { FooterContainer } from "./stylesFooter";
import logo from '../../assets/img/logo.jpg'

export default function Footer() {

    return (
        <>
            <FooterContainer>
                <img src={logo} alt="Logo da empresa" />
                <h4>LT Shop</h4>
                <p> &copy; Leonardo Töfel - 2022</p>
            </FooterContainer>

        </>
    );
}