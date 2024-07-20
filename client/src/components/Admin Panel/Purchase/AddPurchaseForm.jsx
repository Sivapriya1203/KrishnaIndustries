import React from 'react';
import PurchaseDetails from './PurchaseDetails';
import ItemTable from './ItemTable';
import Totals from './Totals';
import PaymentDetails from './PaymentDetails';
import SubmitButton from './SubmitButton';
import './Style.css';

const AddPurchaseForm = () => {
  return (
    <div className="add-purchase-form">
      <h2>Add Purchase</h2>
      <PurchaseDetails />
      <ItemTable />
      <Totals />
      <PaymentDetails />
      <SubmitButton />
    </div>
  );
};

export default AddPurchaseForm;
