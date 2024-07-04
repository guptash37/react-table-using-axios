import React, { useEffect, useState } from "react";
import Tableapi from "../Api/Tableapi";
import { Table } from 'react-bootstrap';

const TableData = () => {
  const [rows, setRows] = useState([]);
  const [checkboxes, setCheckboxes] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Tableapi();
        setRows(data);
      } catch (err) {
        console.log("Error fetching data");
      }
    };
    fetchData();
  }, []);

  const handleCheck = (event, row) => {
    const updatedCheckboxes = {
      ...checkboxes,
      [row.id]: event.target.checked
    };
    setCheckboxes(updatedCheckboxes);

    if (event.target.checked) {
      console.log('Checked row:', row);
    } else {
      console.log('All rows:', rows);
    }
  };

  return (
    <div className="container mt-4">
      <h1>User Table</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>

          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <td>
                <input
                  type="checkbox"
                  checked={checkboxes[row.id] || false}
                  onChange={(event) => handleCheck(event, row)}
                />
              </td>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.username}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableData;
