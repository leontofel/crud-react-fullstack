import { useEffect, useState } from "react";
import { IProduct } from "../../types/IProduct";
import { ProductsListContainer } from "./stylesProductsListDisplay";
import data from '../../data/products.json';
import axios from 'axios';

export default function Test() {

    const defaultProductsArray: IProduct[] = []
    const [products, setProducts] = useState(defaultProductsArray)
    const db = "http://localhost:8000/"
    let addPanelOpen = false;

    useEffect(() => {


        
        
    }, [])

    function getProducts() {

        axios(db+'products')
            .then(res => setProducts(res.data))
            console.log(products)
    }

    return (
        <>
            <ProductsListContainer>


                <div className="container">
                    <h1 className="heading-lv1">Produtos</h1>

                            {!products.length &&
                                <p className="no-results">
                                    Nenhum resultado encontrado
                                </p>
                            }

                    <div className="table-app" id="product-table-app">
                        <div className="table-handler">
                            <div className="table-handler-dropdown-cell">
                                <div className="dropdown">
                                    <h3 className="dropdown-heading">
                                        <i className="fas fa-filter"></i> Marca
                                    </h3>
                                    <select
                                        className="select js-handle-table js-filter"
                                        id="filter-brand"
                                    >
                                        <option value="all">Todas</option>
                                    </select>
                                </div>
                            </div>

                            <div className="table-handler-dropdown-cell">
                                <div className="dropdown">
                                    <h3 className="dropdown-heading">
                                        <i className="fas fa-filter"></i> Categoria
                                    </h3>
                                    <select
                                        className="select js-handle-table js-filter"
                                        id="filter-category"
                                    >
                                        <option value="all">Todas</option>
                                    </select>
                                </div>
                            </div>

                            <div className="table-handler-dropdown-cell">
                                <div className="dropdown">
                                    <h3 className="dropdown-heading">
                                        <i className="fas fa-sort-amount-up-alt"></i> Filtrar por
                                    </h3>
                                    <select className="select js-handle-table" id="sort-by">
                                        <option value="none"> - </option>
                                        <option value="price">Preço</option>
                                        <option value="created_at">Criado em</option>
                                        <option value="updated_at">Atualizado em</option>
                                    </select>
                                </div>
                            </div>

                            <div className="table-handler-dropdown-cell">

                                <input
                                    type="checkbox"
                                    className="js-handle-table"
                                    id="toggle"
                                    value="hiding-out-of-stock"
                                />
                                <label htmlFor="toggle">Ocultar produtos esgotados</label>
                            </div>
                        </div>


                        <div className="table-wrapper">
                            <table className="table" id="table">
                                <thead>
                                    <tr className="table-head">
                                        <th className="table-cell align-right">Código</th>
                                        <th className="table-cell align-left">Marca</th>
                                        <th className="table-cell align-left">Descrição</th>
                                        <th className="table-cell align-left">Categoria</th>
                                        <th className="table-cell align-right">Preço</th>
                                        <th className="table-cell align-left">Status</th>
                                        <th className="table-cell align-left">Criado em</th>
                                        <th className="table-cell align-left">Ações</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {products.map((item: IProduct) => {
                                        return (
                                            <tr className="table-row">
                                                <td className="table-cell">
                                                    {item.codigo}
                                                </td>
                                                <td className="table-cell">
                                                    {item.marca}
                                                </td>
                                                <td className="table-cell">
                                                    {item.descricao}
                                                </td>
                                                <td className="table-cell">
                                                    {item.categoria}
                                                </td>
                                                <td className="table-cell">
                                                    {item.preco}
                                                </td>
                                                <td className="table-cell">
                                                    {item.status}
                                                </td>
                                                <td className="table-cell">
                                                    {item.data_cadastro.toString()}
                                                </td>
                                                <td className="table-cell">
                                                    
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>

                            <div className='button-container'>
                                <button onClick={() => getProducts()}>Buscar produtos</button>
                                <button >Adicionar produtos</button>
                            </div>

                        </div>

                    </div>

                </div>
            </ProductsListContainer>
        </>
    );
}