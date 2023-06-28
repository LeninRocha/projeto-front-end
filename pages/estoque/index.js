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
  const [estoque, setEstoque] = useState([]);

  useEffect(() => {
    setEstoque(getAll());
  }, []);

  function getAll() {
    return JSON.parse(window.localStorage.getItem("estoque")) || [];
  }

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const estoque = getAll();
      estoque.splice(id, 1);
      window.localStorage.setItem("estoque", JSON.stringify(estoque));
      setEstoque(estoque);
    }
  }
  return (
    <Container>
      <h1
        className="title display-3 text-center mb-5"
        style={{ fontSize: 56 }}
      >
        Estoque
      </h1>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Codigo do Produto</th>
              <th>Nome</th>
              <th>Valor</th>
              <th>Estoque</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {estoque.map((item, i) => (
              <tr key={uuid()}>
                <td>{item.codigo}</td>
                <td>{item.nome}</td>
                <td>{item.valor}</td>
                <td>{item.estoque}</td>
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
          href={"/estoque/form"}
          className="btn btn-primary mb-2 title display-3 text-center mb-5"
        >
          Novo Produto
        </Link>
      </p>
    </Container>
  );

}
