import React from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

export const What = () => {
  const learn = ["react-native", "node", "graph-ql", "python"];
  const understand = ["compilers", "browsers", "cryptography"];
  return (
    <div className="what">
      <Table responsive>
        <tbody>
          <th>
            <tr> What i'll be learning</tr>
            {learn.map((item) => (
              <tr key={item}> {item}</tr>
            ))}
          </th>
        </tbody>
      </Table>
      <br></br>
      <Table>
        <tbody>
          <th>
            <tr>What i'll be studing</tr>
            {understand.map((item) => (
              <tr key={item}> {item}</tr>
            ))}
          </th>
        </tbody>
      </Table>
      <Link to="/blog">back</Link>
    </div>
  );
};
