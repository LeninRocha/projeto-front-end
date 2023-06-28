import estoqueValidator from "@/validators/estoqueValidator";
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

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

  }

  function salvar(dados) {
    const estoque = JSON.parse(window.localStorage.getItem("estoque")) || [];
    estoque.push(dados);
    window.localStorage.setItem("estoque", JSON.stringify(estoque));
    push("/estoque");
  }

  return (
    <Container>
      <Form>
      <Form.Group
          className="mb-3 title display-3  mb-5"
          style={{ fontSize: 25 }}
          controlId="codigo"
        >
          <Form.Label>Codigo do Produto: </Form.Label>
          <Form.Control type="text" {...register("codigo", estoqueValidator.codigo)} />
          {errors.codigo && (
            <small style={{ color: "red" }}>{errors.codigo.message}</small>
          )}
        </Form.Group>
        <Form.Group
          className="mb-3 title display-3  mb-5"
          style={{ fontSize: 25 }}
          controlId="nome"
        >
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register("nome", estoqueValidator.nome)} />
          {errors.nome && (
            <small style={{ color: "red" }}>{errors.nome.message}</small>
          )}
        </Form.Group>



        <Form.Group
          className="mb-3 title display-3  mb-5"
          style={{ fontSize: 25 }}
          controlId="valor"
        >
          <Form.Label>Valor: </Form.Label>
          <Form.Control
            type="text"
            {...register("valor", estoqueValidator.valor)}
            onChange={handleChange}
            
          />
            {errors.valor && (
            <small style={{ color: "red" }}>{errors.valor.message}</small>
          )}

        </Form.Group>
        <Form.Group
          className="mb-3 title display-3  mb-5"
          style={{ fontSize: 25 }}
          controlId="estoque"
        >
          <Form.Label>Estoque: </Form.Label>
          <Form.Control
            type="number"
            {...register("estoque", estoqueValidator.estoque)}
            onChange={handleChange}
            
          />
            {errors.estoque && (
            <small style={{ color: "red" }}>{errors.estoque.message}</small>
          )}
          </Form.Group>
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
