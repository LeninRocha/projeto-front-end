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
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    setClientes(getAll());
  }, []);

  function getAll() {
    return JSON.parse(window.localStorage.getItem("clientes")) || [];
  }

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const clientes = getAll();
      clientes.splice(id, 1);
      window.localStorage.setItem("clientes", JSON.stringify(clientes));
      setClientes(clientes);
    }
  }

  console.log(clientes)
  return (
    <Container>
      <h1
        className="title display-3 text-center mb-5"
        style={{ fontSize: 56 }}
      >
       Cliente
      </h1>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>CPF</th>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((item, i) => (
              <tr key={uuid()}>
                <td>{item.cpf}</td>
                <td>{item.nome}</td>
                <td>{item.email}</td>
                <td>{item.telefone}</td>
                <td>
                  <AiOutlineDelete
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
          href={"/clientes/form"}
          className="btn btn-primary mb-2 title display-3 text-center mb-5"
        >
          Novo Cliente
        </Link>
      </p>
    </Container>
  );

}
