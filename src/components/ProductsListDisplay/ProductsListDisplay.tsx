import { useState } from "react";
import { IProduct } from "../../types/IProduct";
import { FormContainer, ProductsListContainer } from "./stylesProductsListDisplay";
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { useForm, SubmitHandler } from "react-hook-form"


export default function ProductsListDisplay() {

  const defaultProductsArray: IProduct[] = []
  const [products, setProducts] = useState(defaultProductsArray);
  const db = "http://localhost:8000/";
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const defaultProduct: IProduct = {
    _id: "",
    codigo: 0,
    descricao: "",
    preco: 0,
    data_cadastro: new Date()
  }
  const [editProduct, setEditProduct] = useState(defaultProduct);
  const [newProduct, setNewProduct] = useState(defaultProduct);

  const { register, handleSubmit, formState: { errors } } = useForm<IProduct>();


  const onSubmit: SubmitHandler<IProduct> = data => {
    setEditProduct({ _id: editProduct._id, data_cadastro: editProduct.data_cadastro, codigo: data["codigo"], preco: data["preco"], descricao: data["descricao"] });
    let teste = editProduct;
    console.log(teste);
    handleEdit(teste);

  }
  const onNewProduct: SubmitHandler<IProduct> = data => {
    setNewProduct({ _id: newProduct._id, data_cadastro: newProduct.data_cadastro, codigo: data["codigo"], preco: data["preco"], descricao: data["descricao"] });
    let teste = newProduct;
    handleNewProduct(teste);

  }

  function handleClose() {
    setShow(!show);
  }

  //Create 
  function handleNewProduct(productSubmited: IProduct) {
    //let productCode = products.length + 1;
    axios.post(db + "products/new", {
      codigo: productSubmited.codigo,
      descricao: productSubmited.descricao,
      preco: productSubmited.preco,
      data_cadastro: productSubmited.data_cadastro,
    })
      .then(response => {
        setShow(!show);
        response.status === 201 ? alert("Produto foi criado com sucesso") : alert("Algo deu errado, por favor tente novamente");
        getProducts();
      });

  }

  //Read
  function getProducts() {
    axios(db + 'products')
      .then(res => setProducts(res.data))
  }

  //Update
  function handleEdit(product: IProduct) {
    axios.put(`${db}products/${product._id}`, {
      codigo: (!!product.codigo ? product.codigo : undefined),
      descricao: (!product.descricao ? undefined : product.descricao),
      preco: (!product.preco ? undefined : product.preco),
      data_cadastro: (!product.data_cadastro ? undefined : product.data_cadastro.toString())
    })
      .then(response => {
        getProducts();
        setShowEdit(!showEdit);
        response.status === 200 ? alert("Produto foi editado com sucesso") : alert("Algo deu errado, por favor tente novamente");
      });
  }

  //Delete
  function handleDelete(idDelete: IProduct["_id"]) {
    axios.delete(`${db}products/${idDelete}`)
      .then(res => getProducts());
    alert("Produto foi deletado")
  }

  return (
    <>
      <ProductsListContainer>
        <h1 className='text-center m-3 fs-2'>Produtos</h1>
        <Accordion defaultActiveKey="0" >
          {products.map((item: IProduct) => {
            return (
              <Accordion.Item eventKey={item.codigo.toString()} key={item._id} >
                <Accordion.Header onClick={() => setEditProduct(item)} >C??digo: {item.codigo} - {item.descricao}</Accordion.Header>
                <Accordion.Body className='d-flex flex-row'>
                  <ul className="m-2">
                    <li>C??digo: {item.codigo}</li>
                    <li>Descri????o: {item.descricao}</li>
                    <li>Pre??o: R$ {item.preco}</li>
                    <li>Data de Cadastro: {item.data_cadastro.toString()}</li>
                  </ul>
                  <div className="m-2">
                    <Button variant="outline-success" className="m-2" onClick={() => {
                      setShowEdit(true);
                    }}>
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
                  <Modal show={showEdit} onHide={() => setShowEdit(!showEdit)}>
                    <Modal.Header closeButton>
                      <Modal.Title>Editar Produto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="productForm">
                      <FormContainer>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <label>Mude o c??digo:</label>
                          <input type="number" {...register("codigo", { pattern: /[0-9]{1,}/ })} />
                          <br />
                          <label>Mude a descri????o</label>
                          <input type="text" {...register("descricao")} />
                          <br />
                          <label>Mude o pre??o</label>
                          <input type="number"  {...register("preco", { pattern: /[0-9]{1,}/ })} />
                          <br />
                          <input className="edit-button" type="submit" value="Salvar altera????es" />
                        </form>
                      </FormContainer>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="danger" onClick={() => {
                        setShowEdit(!showEdit)
                      }}>
                        Fechar
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>

        <div className='button-container'>
          <Button variant="primary" onClick={() => getProducts()}>Buscar produtos</Button>
          <Button variant="success" onClick={() => setShow(true)} >Adicionar produtos</Button>


          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Adicionar Produto</Modal.Title>
            </Modal.Header>
            <Modal.Body id="productForm">
              <FormContainer>
                <form onSubmit={handleSubmit(onNewProduct)}>
                  <label>Insira o c??digo:</label>
                  <input type="number" {...register("codigo", { required: "Por favor preencha o c??digo para continuar", pattern: /[0-9]{1,}/ })} />
                  {errors.codigo && <p>Preencha o c??digo para continuar</p>}
                  <br />
                  <label>Insira a descri????o</label>
                  <input type="text" {...register("descricao", { required: "Por favor preencha a descri????o para continuar" })} />
                  {errors.descricao && <p>Preencha a descri????o para continuar</p>}
                  <br />
                  <label>Insira o pre??o</label>
                  <input type="number"  {...register("preco", { required: "Por favor preencha o pre??o para continuar", pattern: /[0-9]{1,}/ })} />
                  {errors.preco && <p>Preencha o pre??o para continuar</p>}
                  <br />
                  <input value="Criar Produto" className="create-button" type="submit" />
                </form>

              </FormContainer>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Fechar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </ProductsListContainer>
    </>
  );
}