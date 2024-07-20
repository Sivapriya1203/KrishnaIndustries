import React, { useState } from 'react';
import ItemRow from './ItemRow';

const ItemTable = () => {
  const [items, setItems] = useState([{ id: 1 }]);

  const addItem = () => {
    setItems([...items, { id: items.length + 1 }]);
  };

  return (
    <div className="item-table">
      <table>
        <thead>
          <tr>
            <th>Item Information *</th>
            <th>Stock/Qnt</th>
            {/* <th>Expiry Date</th> */}
            <th>Batch No *</th>
            {/* <th>Qnty *</th> */}
            <th>Rate *</th>
            <th>Discount %</th>
            {/* <th>Dis. Value</th> */}
            <th>GST %</th>
            {/* <th>VAT Value</th> */}
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ItemRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};

export default ItemTable;
