
import { useEffect, useState } from "react";
import { IProduct } from "../../types/IProduct";
import { ProductsListContainer } from "./stylesProductsListDisplay";
import data from '../../data/products.json';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';

export default function ProductsListDisplay() {

  const defaultProductsArray: IProduct[] = []
  const [products, setProducts] = useState(defaultProductsArray)
  const db = "http://localhost:8000/"
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");
  const [available, setAvailable] = useState(false);

  

  useEffect(() => {
    

  }, [])

  function handleClose() {
    setShow(!show);
  }

  function getProducts() {

    axios(db + 'products')
      .then(res => setProducts(res.data))
  }

  function handleDelete(idDelete: IProduct["_id"]) {
    axios.delete(`${db}products/${idDelete}`)
      .then(res => getProducts());
  }

  function handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log(description, price, type, brand, available);
    let [descriptionForm, priceForm, typeForm, brandForm, availableForm] = [description, price, type, brand, available];
    let registerTime = new Date();
    let productCode = products.length + 1;

    const options = {
      url: db + "products",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: {
        codigo: productCode,
        descricao: descriptionForm,
        preco: priceForm,
        data_cadastro: registerTime,
        status: (availableForm === true ? "disponivel" : "indisponivel"),
        categoria: typeForm,
        marca: brandForm
      }
    };

    axios(options)
      .then(response => {
        console.log(response.status);
      });
    setShow(!show);

  }

  return (
    <>
      <ProductsListContainer>
        <h1 className='text-center m-3 fs-2'>Produtos</h1>
        <Accordion defaultActiveKey="0">
          {products.map((item: IProduct) => {
            return (
              <Accordion.Item eventKey={item.codigo.toString()} key={item._id}>
                <Accordion.Header>Código: {item.codigo} - {item.descricao}</Accordion.Header>
                <Accordion.Body className='d-flex flex-row'>
                  <ul className="m-2">
                    <li>{item.codigo}</li>
                    <li>{item.descricao}</li>
                    <li>R$ {item.preco}</li>
                    <li>{item.data_cadastro.toString()}</li>
                    <li>{item.status}</li>
                    <li>{item.categoria}</li>
                    <li>{item.marca}</li>
                  </ul>
                  <div className="m-2">
                    <Button variant="outline-success" className="m-2" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                      </svg>
                    </Button>
                    <Button variant="outline-danger" className="m-2" onClick={() => handleDelete(item._id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>
                    </Button>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}

        </Accordion>
        <div className='button-container'>
          <button onClick={() => getProducts()}>Buscar produtos</button>
          <button onClick={() => setShow(true)} >Adicionar produtos</button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Adicionar Produto</Modal.Title>
            </Modal.Header>
            <Modal.Body id="productForm">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Descrição</Form.Label>
                  <Form.Control as="textarea" rows={3} required autoFocus onChange={(e) => setDescription(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Preço: R$</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="insira o valor do produto"
                    onChange={(e) => setPrice(Number(e.target.value))}
                  />
                  <Form.Select className="mb-2 mt-2" onChange={(e) => setType(e.target.value)}>
                    <option>Notebook</option>
                    <option>Celular</option>
                    <option>Acessório</option>
                  </Form.Select>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox" onChange={() => setAvailable(!available)}>
                    <Form.Check type="checkbox" label="Disponível" />
                  </Form.Group>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Marca</Form.Label>
                  <Form.Control
                    type="textarea"
                    placeholder="insira a marca do produto"
                    required
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Fechar
              </Button>
              <Button type="submit" value="productForm" target="productForm" variant="primary" onClick={(e) => handleSubmit(e)}>
                Salvar alterações
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </ProductsListContainer>
    </>
  );
}