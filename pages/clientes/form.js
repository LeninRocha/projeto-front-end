import clienteValidator from "@/validators/clientesValidator";
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
    const clientes = JSON.parse(window.localStorage.getItem("clientes")) || [];
    clientes.push(dados);
    window.localStorage.setItem("clientes", JSON.stringify(clientes));
    push("/clientes");
  }

  return (
    <Container>
      <Form>
        <Form.Group
          className="mb-3 title display-3  mb-5"
          style={{ fontSize: 25 }}
          controlId="nome"
        >
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register("nome", clienteValidator.nome)} />
          {errors.nome && (
            <small style={{ color: "red" }}>{errors.nome.message}</small>
          )}
        </Form.Group>

        <Form.Group
          className="mb-3 title display-3  mb-5"
          style={{ fontSize: 25 }}
          controlId="email"
        >
          <Form.Label>Email: </Form.Label>
          <Form.Control type="text" {...register("email", clienteValidator.email)} />
          {errors.email && (
            <small style={{ color: "red" }}>{errors.email.message}</small>
          )}
        </Form.Group>

        <Form.Group
          className="mb-3 title display-3  mb-5"
          style={{ fontSize: 25 }}
          controlId="cpf"
        >
          <Form.Label>CPF: </Form.Label>
          <Form.Control
            type="text"
            {...register("cpf", clienteValidator.cpf)}
            onChange={handleChange}
            
          />
            {errors.cpf && (
            <small style={{ color: "red" }}>{errors.cpf.message}</small>
          )}

        </Form.Group>
        <Form.Group
          className="mb-3 title display-3  mb-5"
          style={{ fontSize: 25 }}
          controlId="telefone"
        >
          <Form.Label>Telefone: </Form.Label>
          <Form.Control
            type="text"
            {...register("telefone", clienteValidator.telefone)}
            onChange={handleChange}
            
          />
            {errors.telefone && (
            <small style={{ color: "red" }}>{errors.telefone.message}</small>
          )}
          </Form.Group>
        <p className="text-center">
          <Button variant="primary" onClick={handleSubmit(salvar)}>
            <AiOutlineCheck className="me-1" />
            Salvar Cliente
          </Button>
        </p>
      </Form>
    </Container>
  );
};

export default form;
