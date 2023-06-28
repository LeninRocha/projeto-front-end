import funcionariosValidator from "@/validators/funcionariosValidator";
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
    const funcionarios = JSON.parse(window.localStorage.getItem("funcionarios")) || [];
    funcionarios.push(dados);
    window.localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
    push("/funcionarios");
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
          <Form.Control type="text" {...register("nome", funcionariosValidator.nome)} />
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
          <Form.Control type="text" {...register("email", funcionariosValidator.email)} />
          {errors.email && (
            <small style={{ color: "red" }}>{errors.email.message}</small>
          )}
        </Form.Group>

        <Form.Group
          className="mb-3 title display-3  mb-5"
          style={{ fontSize: 25 }}
          controlId="codigo"
        >
          <Form.Label>Código do funcionário: </Form.Label>
          <Form.Control
            type="text"
            {...register("codigo", funcionariosValidator.codigo)}
            onChange={handleChange}
            
          />
            {errors.codigo && (
            <small style={{ color: "red" }}>{errors.codigo.message}</small>
          )}
        </Form.Group>
        <p className="text-center">
          <Button variant="primary" onClick={handleSubmit(salvar)}>
            <AiOutlineCheck className="me-1" />
            Salvar Usuário
          </Button>
        </p>
      </Form>
    </Container>
  );
};

export default form;
