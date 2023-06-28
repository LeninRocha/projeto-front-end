import vendasValidator from "@/validators/vendasValidator";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiOutlineCheck } from "react-icons/ai";

const form = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [hasClienteVendedor, setHasClienteVendedor] = useState(false)



  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

  }

  function salvar(dados) {

    const vendedores = JSON.parse(window.localStorage.getItem("funcionarios")) || [];
    const estoque = JSON.parse(window.localStorage.getItem("estoque")) || [];
    const cliente = JSON.parse(window.localStorage.getItem("clientes")) || [];
    const existeVendedor = vendedores.some((item) => item.codigo.includes(dados.vendedor));
    const existeCliente = cliente.some((item) => item.cpf.includes(dados.cliente));
    const existeProduto = estoque.some((item) => item.codigo.includes(dados.codigo));


    const data = {
      vendedor: '',
      cliente: '',
      produto:'',
      preco: ''
    }

    if(existeVendedor && existeCliente){
      if(existeProduto){
        for (let index = 0; index < estoque.length; index++) {
          const element = estoque[index];
          if(element.codigo == dados.codigo){
            data.preco = element.valor
            data.produto = element.nome
            element.estoque -= 1
          }
        }
        window.localStorage.setItem("estoque", JSON.stringify(estoque));

        for (let index = 0; index < cliente.length; index++) {
          const element = cliente[index];
          if(element.cpf == dados.cliente){
            data.cliente = element.nome
          }

        }


        for (let index = 0; index < vendedores.length; index++) {
          const element = vendedores[index];
          if(element.codigo == dados.codigo){
            data.vendedor = element.nome
          }

        }

        const vendas = JSON.parse(window.localStorage.getItem("vendas")) || [];
        vendas.push(data);
        window.localStorage.setItem("vendas", JSON.stringify(vendas));
        push("/vendas");

      }
    }else{
      setHasClienteVendedor(true)
    }

  }


  console.log(hasClienteVendedor)
  return (
    <Container>
      <Form>
      <Form.Group
          className="mb-3 title display-3  mb-5"
          style={{ fontSize: 25 }}
          controlId="codigo"
        >
          <Form.Label>Cod. do Produto: </Form.Label>
          <Form.Control type="text" {...register("codigo", vendasValidator.codigo)} />
          {errors.codigo && (
            <small style={{ color: "red" }}>{errors.codigo.message}</small>
          )}
        </Form.Group>
        <Form.Group
          className="mb-3 title display-3  mb-5"
          style={{ fontSize: 25 }}
          controlId="vendedor"
        >
          <Form.Label>Cod. Vendedor: </Form.Label>
          <Form.Control type="text" {...register("vendedor", vendasValidator.codigo)} />
          {errors.codigo && (
            <small style={{ color: "red" }}>{errors.codigo.message}</small>
          )}
        </Form.Group>
        <Form.Group
          className="mb-3 title display-3  mb-5"
          style={{ fontSize: 25 }}
          controlId="cliente"
        >
          <Form.Label>CPF do cliente: </Form.Label>
          <Form.Control type="text" {...register("cliente", vendasValidator.cpf)} />
          {errors.nome && (
            <small style={{ color: "red" }}>{errors.cpf.message}</small>
          )}
        </Form.Group>
        {hasClienteVendedor && <p>Verifique o codigo do vendedor ou o cpf do cliente</p>}
        <p className="text-center">
          <Button variant="primary" onClick={handleSubmit(salvar)}>
            <AiOutlineCheck className="me-1" />
            Salvar Produto
          </Button>
        </p>
      </Form>
    </Container>
  );
};

export default form;
