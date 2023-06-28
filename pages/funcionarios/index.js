import Link from "next/link";
import React, { useEffect, useState } from "react";
import uuid from 'react-uuid';
import {
  Row,
  Container,
  Table
} from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
export default function Index() {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    setFuncionarios(getAll());
  }, []);

  function getAll() {
    return JSON.parse(window.localStorage.getItem("funcionarios")) || [];
  }

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const funcionarios = getAll();
      funcionarios.splice(id, 1);
      window.localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
      setFuncionarios(funcionarios);
    }
  }

  console.log(funcionarios)
  return (
    <Container>
      <h1
        className="title display-3 text-center mb-5"
        style={{ fontSize: 56 }}
      >
        Funcionários
      </h1>
      <Row>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Cod. Vendedor</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
          {funcionarios.map((item, i) => (
             <tr key={uuid()}>
             <td>{item.codigo}</td>
             <td>{item.nome}</td>
             <td>{item.email}</td>
             <td>                      <AiOutlineDelete
                        onClick={() => excluir(i)}
                        className="text-dark"
                      /></td>
           </tr>
          ))}
      </tbody>
        </Table>
      </Row>
      <p className="text-center">
        <Link
          href={"/funcionarios/form"}
          className="btn btn-primary mb-2 title display-3 text-center mb-5"
        >
          Novo Funcionário
        </Link>
      </p>
    </Container>
  );

}
