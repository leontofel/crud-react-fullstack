import { HeaderWrapper } from "./stylesHeader";
import logo from '../../assets/img/logo.jpg';
import { Link } from "react-router-dom";



export default function Header() {

    return (
        <>
            <HeaderWrapper>
                <Link to='/'>
                    <img src={logo} alt="Logo da empresa" />
                </Link>
                <h1>LT Shop</h1>
                <ul>
                    <Link to='/'>
                        <li>Início</li>
                    </Link>
                    <Link to='/register-products'>
                        <li>Cadastro de Produtos</li>
                    </Link>
                    <li>Sobre Nós</li>
                </ul>
            </HeaderWrapper>
        </>
    );
}