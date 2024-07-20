import React from 'react';

const ItemRow = ({ item }) => {
  return (
    <tr>
      <td><input type="text" placeholder="Product Name" /></td>
      <td><input type="number" placeholder="0.00" /></td>
      {/* <td><input type="date" /></td> */}
      <td><input type="text" placeholder="Batch" /></td>
      {/* <td><input type="number" placeholder="0.00" /></td> */}
      <td><input type="number" placeholder="0.00" /></td>
      <td><input type="number" placeholder="0.00" /></td>
      {/* <td><input type="number" placeholder="0.00" /></td> */}
      <td><input type="number" placeholder="0.00" /></td>
      {/* <td><input type="number" placeholder="0.00" /></td> */}
      <td><input type="number" placeholder="0.00" /></td>
      <td><button>Remove</button></td>
    </tr>
  );
};

export default ItemRow;
