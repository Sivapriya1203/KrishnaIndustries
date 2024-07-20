import React from 'react';

const PaymentDetails = () => {
  return (
    <div className="payment-details">
      <div>
        <label>Payment Type</label>
        <select>
        <option>Select Payment</option>
          <option>Cash in Hand</option>
          <option>Credit Purchase</option>
          <option>Debit Purchase</option>
        </select>
      </div>
      <div>
        <label>Paid Amount</label>
        <input type="number" placeholder="0" />
      </div>
      <button>Add New Payment Method</button>
    </div>
  );
};

export default PaymentDetails;
