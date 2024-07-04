import React, { useEffect, useState } from "react";
import Tableapi from "../Api/Tableapi";
import { Table } from 'react-bootstrap';

const TableData = () => {
  const [row, setRow] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Tableapi();
        setRow(data)
      } catch (err) {
        console.log("err")
      }
    }
    fetchData()
  }, [])

  return (
    <div className="container mt-4">
      <h1>User Table</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {row.map(rows => (
            <tr key={rows.id}>
              <td>{rows.id}</td>
              <td>{rows.name}</td>
              <td>{rows.username}</td>
              <td>{rows.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
export default TableData;