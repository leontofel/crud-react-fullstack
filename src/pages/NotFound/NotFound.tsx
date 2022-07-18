import styled from "styled-components";

export default function NotFound() {
    const Style404 = styled.section`
        font-size: 5rem;
        text-align: center;
        margin-top: 10rem;
    `;

    return (
        <section>
            <Style404>
                <h1>Erro 404! Página não encontrada!</h1>
            </Style404>

        </section>
    )
}