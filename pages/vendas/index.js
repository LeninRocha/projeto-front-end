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
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    setVendas(getAll());
  }, []);

  function getAll() {
    return JSON.parse(window.localStorage.getItem("vendas")) || [];
  }

  function excluir(id) {
    if (confirm("Deseja realmente excluir o registro?")) {
      const vendas = getAll();
      vendas.splice(id, 1);
      window.localStorage.setItem("estoque", JSON.stringify(estoque));
      setVendas(vendas);
    }
  }
  return (
    <Container>
      <h1
        className="title display-3 text-center mb-5"
        style={{ fontSize: 56 }}
      >
        Vendas
      </h1>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Vendedor </th>
              <th>Cliente</th>
              <th>Produto </th>
              <th>Preço</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {vendas.map((item, i) => (
              <tr key={uuid()}>
                <td>{item.vendedor}</td>
                <td>{item.cliente}</td>
                <td>{item.produto}</td>
                <td>{Number(item.preco).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
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
          href={"/vendas/form"}
          className="btn btn-primary mb-2 title display-3 text-center mb-5"
        >
          Nova Venda
        </Link>
      </p>
    </Container>
  );

}
