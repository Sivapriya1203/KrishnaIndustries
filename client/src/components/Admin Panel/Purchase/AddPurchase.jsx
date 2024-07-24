import { Button, Grid, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import config from '../../../config';

const AddPurchase = ({ onClose }) => {
  const [purchaseData, setPurchaseData] = useState({
    pro_name: '',
    specification: '',
    purch_address: '',
    quantity: '',
    price: '',
    total: '',
    gst: '',
    cgst: '',
    sgst: ''
  });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setPurchaseData({ ...purchaseData, [name]: value });
    if (name === 'price' || name === 'quantity' || name === 'gst') {
      calculateTotal({ ...purchaseData, [name]: value });
    }
  };

  // const calculateTotal = (data) => {
  //   const quantity = parseFloat(data.quantity) || 0;
  //   const price = parseFloat(data.price) || 0;
  //   const gst = parseFloat(data.gst) || 0;
  //   const total = quantity * price;
  //   const cgst = (total * gst) / 200; // 50% of GST
  //   const sgst = (total * gst) / 200; // 50% of GST
  //   setPurchaseData({ ...data, total: total + cgst + sgst, cgst, sgst });
  // };
  const calculateTotal = (data) => {
    const quantity = parseFloat(data.quantity) || 0;
    const price = parseFloat(data.price) || 0;
    const gst = parseFloat(data.gst) || 0;
  
    // Calculate total before GST
    const totalBeforeGst = quantity * price;
  
    // Calculate CGST and SGST
    const cgst = Math.round((totalBeforeGst * gst) / 200); // 50% of GST
    const sgst = Math.round((totalBeforeGst * gst) / 200); // 50% of GST
  
    // Calculate total including GST
    const total = Math.round(totalBeforeGst + cgst + sgst);
  
    // Update the state with whole numbers
    setPurchaseData({ ...data, total, cgst, sgst });
  };
  const handleAddPurchase = (e) => {
    e.preventDefault();
    axios.post(`${config.apiUrl}/purchase/savePurchase`, purchaseData)
      .then((res) => {
        onClose();
      })
      .catch((err) => {
        console.log('Purchase Data is not added.', err);
      });
  };

  return (
    <div>
      <h1 className='text-center'>Add Purchase</h1>
      <Grid container spacing={3} className='mt-3'>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='pro_name'
            label='Product Name'
            onChange={handleChangeInput}
            value={purchaseData.pro_name}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='specification'
            label='Specification'
            onChange={handleChangeInput}
            value={purchaseData.specification}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='purch_address'
            label='Address'
            onChange={handleChangeInput}
            value={purchaseData.purch_address}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='quantity'
            label='Quantity'
            onChange={handleChangeInput}
            value={purchaseData.quantity}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='price'
            label='Price'
            onChange={handleChangeInput}
            value={purchaseData.price}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='gst'
            label='GST'
            onChange={handleChangeInput}
            value={purchaseData.gst}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='total'
            label='Total'
            value={purchaseData.total}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='cgst'
            label='CGST'
            value={purchaseData.cgst}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            name='sgst'
            label='SGST'
            value={purchaseData.sgst}
            disabled
          />
        </Grid>
        <Grid item xs={12} display='flex' justifyContent='center'>
          <Button onClick={handleAddPurchase}>Submit</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddPurchase;
