import { Link } from "react-router-dom";
import { ApplicationStartContainer } from "./stylesApplicationStart";

export default function ApplicationStart() {

    return (
        <>
            <ApplicationStartContainer>
                <h2>Bem-vindo ao cadastro de produtos da LT Shop</h2>
                <p>Aqui você poderá inserir novos produtos, assim como acessar, atualizar e detelar os já existentes.</p>
                <Link to='/register-products'>Para começar clique aqui!</Link>
            </ApplicationStartContainer>

        </>
    );
}