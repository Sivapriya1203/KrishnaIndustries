// // import React from 'react';

// // const Totals = () => {
// //   return (
// //     <div className="totals">
// //       <div>Total: 0.00</div>
// //       <div>Purchase Discount: 0.00</div>
// //       <div>Total Discount: 0.00</div>
// //       {/* <div>Total VAT: 0.00</div> */}
// //       <div>Grand Total: 0.00</div>
// //     </div>
// //   );
// // };

// // export default Totals;




// import React, { useState } from 'react';

// const Totals = () => {
//   const [totals, setTotals] = useState({
//     total: 0.00,
//     purchaseDiscount: 0.00,
//     totalDiscount: 0.00,
//     grandTotal: 0.00,
//   });

//   const calculateTotals = () => {
//     const total = 0.00; // Replace with your logic to calculate the total
//     const purchaseDiscount = 10; // Replace with your logic to calculate the purchase discount
//     const totalDiscount = 5; // Replace with your logic to calculate the total discount
//     const grandTotal = total - purchaseDiscount - totalDiscount; // Example calculation for grand total

//     setTotals({
//       total,
//       purchaseDiscount,
//       totalDiscount,
//       grandTotal,
//     });
//   };

//   return (
//     <div className="totals">
//       <div>Total: {totals.total.toFixed(2)}</div>
//       <div>Purchase Discount: {totals.purchaseDiscount.toFixed(2)}</div>
//       <div>Total Discount: {totals.totalDiscount.toFixed(2)}</div>
//       <div>Grand Total: {totals.grandTotal.toFixed(2)}</div>
//       <button onClick={calculateTotals}>Calculate Totals</button>
//     </div>
//   );
// };

// export default Totals;



import React, { useState, useEffect } from 'react';

const Totals = () => {
  const [values, setValues] = useState({
    total: 0.00,
    purchaseDiscount: 0.00,
    totalDiscount: 0.00,
  });

  const [totals, setTotals] = useState({
    grandTotal: 0.00,
  });

  // Calculate totals whenever values change
  useEffect(() => {
    const { total, purchaseDiscount, totalDiscount } = values;
    const grandTotal = total - purchaseDiscount - totalDiscount;

    setTotals({ grandTotal });
  }, [values]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: parseFloat(value) || 0,
    }));
  };

  return (
    <div className="totals">
      <div>
        <label>Total:</label>
        <input
          type="number"
          name="total"
          value={values.total}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Purchase Discount:</label>
        <input
          type="number"
          name="purchaseDiscount"
          value={values.purchaseDiscount}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Total Discount:</label>
        <input
          type="number"
          name="totalDiscount"
          value={values.totalDiscount}
          onChange={handleChange}
        />
      </div>
      <div>Grand Total: {totals.grandTotal.toFixed(2)}</div>
    </div>
  );
};

export default Totals;
