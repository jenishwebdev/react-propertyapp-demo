import React from "react";
import { data } from "../../data/data";
import classes from "./Table.module.css";
const Table = () => {
  const price = (data) => {
    return `$${data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Image</th>
          <th>Address</th>
          <th>sqft/area</th>
          <th>bds/ba</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr key={item.propertyId}>
              <td>{item.propertyId}</td>
              <td>
                <img src={item.primaryPhoto} alt="" />
              </td>
              <td>{item.address}</td>
              <td>{item.sqft}</td>
              <td>{`${item.beds} bds / ${item.baths} baths`}</td>
              <td>{price(item.listPrice)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
