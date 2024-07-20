import React from 'react';

const PurchaseDetails = () => {
  return (
    <div className="purchase-details">
      <div>
        <label>Supplier *</label>
        <select>
          <option>Select One</option>
          {/* Add options dynamically */}
        </select>
      </div>
      <div>
        <label>Chalan No *</label>
        <input type="text" />
      </div>
      <div>
        <label>Purchase Date *</label>
        <input type="date" />
      </div>
    </div>
  );
};

export default PurchaseDetails;
