// import React, { useState, useEffect } from 'react';
// import {
//   Grid,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
//   Button,
//   Typography,
//   Toolbar,
//   AppBar,
//   CssBaseline,
// } from '@mui/material';
// import axios from 'axios';
// import config from 'config';

// function PurchaseReport() {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [reportData, setReportData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`${config.apiUrl}/purchase/getPurchase`, {
//         params: {
//           startDate,
//           endDate,
//         },
//       });
//       setReportData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleFind = () => {
//     fetchData();
//   };

//   const calculateTotalPurchase = () => {
//     return reportData.reduce((total, item) => total + (item.total || 0), 0);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <CssBaseline />
//       <main style={{ flexGrow: 1, padding: '24px' }}>
//         <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
//           <Toolbar>
//             <Typography variant="h6" noWrap>
//               Purchase Report
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Paper sx={{ padding: '24px', marginTop: '16px' }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 label="Start Date"
//                 type="date"
//                 fullWidth
//                 InputLabelProps={{ shrink: true }}
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 sx={{ backgroundColor: '#f5f5f5' }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 label="End Date"
//                 type="date"
//                 fullWidth
//                 InputLabelProps={{ shrink: true }}
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//                 sx={{ backgroundColor: '#f5f5f5' }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={2}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 sx={{ marginTop: '8px' }}
//                 onClick={handleFind}
//               >
//                 Find
//               </Button>
//             </Grid>
//             <Grid item xs={12} sm={2}>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 fullWidth
//                 sx={{ marginTop: '8px' }}
//               >
//                 Print
//               </Button>
//             </Grid>
//           </Grid>
//           <TableContainer component={Paper} sx={{ marginTop: '24px' }}>
//             <Table>
//               <TableHead>
//                 <TableRow sx={{ backgroundColor: '#e0f7fa' }}>
//                   <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Purchase Address</TableCell>
//                   <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Product Name</TableCell>
//                   <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Price</TableCell>
//                   <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Total</TableCell>
//                   <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Purchase Date</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {reportData.map((data, index) => (
//                   <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? '#f1f8e9' : '#ffffff' }}>
//                     <TableCell>{data.purch_address}</TableCell>
//                     <TableCell>{data.pro_name}</TableCell>
//                     <TableCell>{data.price}</TableCell>
//                     <TableCell>{data.total}</TableCell>
//                     <TableCell>{data.created_at}</TableCell> {/* Ensure this field exists in your API response */}
//                   </TableRow>
//                 ))}
//                 <TableRow>
//                   <TableCell colSpan={3} sx={{ fontWeight: 'bold', textAlign: 'right' }}>
//                     Total:
//                   </TableCell>
//                   <TableCell colSpan={2} sx={{ fontWeight: 'bold', color: '#d32f2f' }}>
//                     {Math.round(calculateTotalPurchase())}
//                   </TableCell>
//                 </TableRow>
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Paper>
//       </main>
//     </div>
//   );
// }

// export default PurchaseReport;




// import React, { useState, useEffect } from 'react';
// import {
//   Grid,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
//   Button,
//   Typography,
//   Toolbar,
//   AppBar,
//   CssBaseline,
// } from '@mui/material';
// import axios from 'axios';
// import config from 'config';

// function PurchaseReport() {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [reportData, setReportData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`${config.apiUrl}/purchase/getPurchase`, {
//         params: {
//           startDate,
//           endDate,
//         },
//       });
//       setReportData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleFind = () => {
//     fetchData();
//   };

//   const calculateTotalPurchase = () => {
//     return reportData.reduce((total, item) => total + (item.total || 0), 0);
//   };

//   const calculateProductTotal = (price, quantity) => {
//     return price * quantity;
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <CssBaseline />
//       <main style={{ flexGrow: 1, padding: '24px' }}>
//         <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
//           <Toolbar>
//             <Typography variant="h6" noWrap>
//               Purchase Report
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Paper sx={{ padding: '24px', marginTop: '16px' }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 label="Start Date"
//                 type="date"
//                 fullWidth
//                 InputLabelProps={{ shrink: true }}
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 sx={{ backgroundColor: '#f5f5f5' }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 label="End Date"
//                 type="date"
//                 fullWidth
//                 InputLabelProps={{ shrink: true }}
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//                 sx={{ backgroundColor: '#f5f5f5' }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={2}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 sx={{ marginTop: '8px' }}
//                 onClick={handleFind}
//               >
//                 Find
//               </Button>
//             </Grid>
//             <Grid item xs={12} sm={2}>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 fullWidth
//                 sx={{ marginTop: '8px' }}
//               >
//                 Print
//               </Button>
//             </Grid>
//           </Grid>
//           <TableContainer component={Paper} sx={{ marginTop: '24px' }}>
//             <Table>
//               <TableHead>
//                 <TableRow sx={{ backgroundColor: '#e0f7fa' }}>
//                   <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Purchase Address</TableCell>
//                   <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Product Name</TableCell>
//                   <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Price</TableCell>
//                   <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Quantity</TableCell>
//                   <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Total</TableCell>
//                   <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Purchase Date</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {reportData.map((data, index) => (
//                   <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? '#f1f8e9' : '#ffffff' }}>
//                     <TableCell>{data.purch_address}</TableCell>
//                     <TableCell>{data.pro_name}</TableCell>
//                     <TableCell>{data.price}</TableCell>
//                     <TableCell>{data.quantity}</TableCell> {/* Assuming quantity is a field in your data */}
//                     <TableCell>{Math.round(calculateProductTotal(data.price, data.quantity))}</TableCell>
//                     <TableCell>{data.created_at}</TableCell>
//                   </TableRow>
//                 ))}
//                 <TableRow>
//                   <TableCell colSpan={4} sx={{ fontWeight: 'bold', textAlign: 'right' }}>
//                     Total:
//                   </TableCell>
//                   <TableCell sx={{ fontWeight: 'bold', color: '#d32f2f' }}>
//                     {Math.round(calculateTotalPurchase())}
//                   </TableCell>
//                   <TableCell />
//                 </TableRow>
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Paper>
//       </main>
//     </div>
//   );
// }

// export default PurchaseReport;





// import React, { useState, useEffect } from 'react';
// import {
//   Grid,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
//   Button,
//   Typography,
//   Toolbar,
//   AppBar,
//   CssBaseline,
// } from '@mui/material';
// import axios from 'axios';
// import config from 'config';

// function PurchaseReport() {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [reportData, setReportData] = useState([]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`${config.apiUrl}/purchase/getPurchase`, {
//         params: {
//           startDate,
//           endDate,
//         },
//       });
//       setReportData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleFind = () => {
//     fetchData();
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   const calculateTotalPurchase = () => {
//     return reportData.reduce((total, item) => total + (item.total || 0), 0);
//   };

//   const calculateProductTotal = (price, quantity) => {
//     return price * quantity;
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <CssBaseline />
//       <main style={{ flexGrow: 1, padding: '24px' }}>
//         <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
//           <Toolbar>
//             <Typography variant="h6" noWrap>
//               Purchase Report
//             </Typography>
//           </Toolbar>
//         </AppBar>
//         <Paper sx={{ padding: '24px', marginTop: '16px' }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 label="Start Date"
//                 type="date"
//                 fullWidth
//                 InputLabelProps={{ shrink: true }}
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 sx={{ backgroundColor: '#f5f5f5' }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={4}>
//               <TextField
//                 label="End Date"
//                 type="date"
//                 fullWidth
//                 InputLabelProps={{ shrink: true }}
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//                 sx={{ backgroundColor: '#f5f5f5' }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={2}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 sx={{ marginTop: '8px' }}
//                 onClick={handleFind}
//               >
//                 Find
//               </Button>
//             </Grid>
//             <Grid item xs={12} sm={2}>
//               <Button
//                 variant="contained"
//                 color="secondary"
//                 fullWidth
//                 sx={{ marginTop: '8px' }}
//                 onClick={handlePrint}
//               >
//                 Print
//               </Button>
//             </Grid>
//           </Grid>
//           <TableContainer component={Paper} sx={{ marginTop: '24px' }}>
//             <Table>
//               <TableHead>
//                 <TableRow sx={{ backgroundColor: '#e0f7fa' }}>
//                   <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Purchase Address</TableCell>
//                   <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Product Name</TableCell>
//                   <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Price</TableCell>
//                   <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Quantity</TableCell>
//                   <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Total</TableCell>
//                   <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Purchase Date</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {reportData.map((data, index) => (
//                   <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? '#f1f8e9' : '#ffffff' }}>
//                     <TableCell>{data.purch_address}</TableCell>
//                     <TableCell>{data.pro_name}</TableCell>
//                     <TableCell>{data.price}</TableCell>
//                     <TableCell>{data.quantity}</TableCell> {/* Assuming quantity is a field in your data */}
//                     <TableCell>{Math.round(calculateProductTotal(data.price, data.quantity))}</TableCell>
//                     <TableCell>{data.created_at}</TableCell>
//                   </TableRow>
//                 ))}
//                 <TableRow>
//                   <TableCell colSpan={4} sx={{ fontWeight: 'bold', textAlign: 'right' }}>
//                     Total:
//                   </TableCell>
//                   <TableCell sx={{ fontWeight: 'bold', color: '#d32f2f' }}>
//                     {Math.round(calculateTotalPurchase())}
//                   </TableCell>
//                   <TableCell />
//                 </TableRow>
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Paper>
//       </main>
//     </div>
//   );
// }

// export default PurchaseReport;




import React, { useState, useEffect, useRef } from 'react';
import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Typography,
  Toolbar,
  AppBar,
  CssBaseline,
} from '@mui/material';
import axios from 'axios';
import config from 'config';

function PurchaseReport() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reportData, setReportData] = useState([]);
  const printRef = useRef();

  const fetchData = async () => {
    try {
      const response = await axios.get(`${config.apiUrl}/purchase/getPurchase`, {
        params: {
          startDate,
          endDate,
        },
      });
      setReportData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFind = () => {
    fetchData();
  };

  const handlePrint = () => {
    window.print();
  };

  const calculateTotalPurchase = () => {
    return reportData.reduce((total, item) => total + calculateProductTotal(item.price, item.quantity), 0);
  };

  const calculateProductTotal = (price, quantity) => {
    return price * quantity;
  };

  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <main style={{ flexGrow: 1, padding: '24px' }}>
        <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Purchase Report
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper sx={{ padding: '24px', marginTop: '16px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Start Date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                sx={{ backgroundColor: '#f5f5f5' }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="End Date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                sx={{ backgroundColor: '#f5f5f5' }}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: '8px' }}
                onClick={handleFind}
              >
                Find
              </Button>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{ marginTop: '8px' }}
                onClick={handlePrint}
              >
                Print
              </Button>
            </Grid>
          </Grid>
          <TableContainer component={Paper} sx={{ marginTop: '24px' }} ref={printRef} id="printArea">
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#e0f7fa' }}>
                  <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Purchase Address</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Product Name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Price</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Quantity</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Total</TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#00796b' }}>Purchase Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reportData.map((data, index) => (
                  <TableRow key={index} sx={{ backgroundColor: index % 2 === 0 ? '#f1f8e9' : '#ffffff' }}>
                    <TableCell>{data.purch_address}</TableCell>
                    <TableCell>{data.pro_name}</TableCell>
                    <TableCell>{data.price}</TableCell>
                    <TableCell>{data.quantity}</TableCell> {/* Assuming quantity is a field in your data */}
                    <TableCell>{Math.round(calculateProductTotal(data.price, data.quantity))}</TableCell>
                    <TableCell>{data.created_at}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={4} sx={{ fontWeight: 'bold', textAlign: 'right' }}>
                    Total:
                  </TableCell>
                  <TableCell sx={{ fontWeight: 'bold', color: '#d32f2f' }}>
                    {Math.round(calculateTotalPurchase())}
                  </TableCell>
                  <TableCell />
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </main>
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printArea, #printArea * {
            visibility: visible;
          }
          #printArea {
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default PurchaseReport;
