// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import { styled } from '@mui/material/styles';
// import { Button, Dialog, DialogActions, DialogContent, FormControl, Grid, MenuItem, Select, TextField } from '@mui/material';
// import { Link } from 'react-router-dom';
// import config from '../../../config';

// function UploadExcel() {
//   const [file, setFile] = useState(null);
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (!file) {
//       setError('Please select a file to upload');
//       return;
//     }
//     setError(null);
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await Axios.post(`${config.apiURL}/upload/upload`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       setData(response.data);
//     } catch (err) {
//       setError('Error uploading file');
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <Grid container spacing={3} className="p-4">
//         <div className="upload-wrapper">
//           <h3>Upload & View Excel Sheets</h3>
//           <form onSubmit={handleUpload}>
//             <input type="file" onChange={handleFileChange} />
//             <button type="submit">Upload</button>
//           </form>
//           {error && <div className="error">{error}</div>}
//         </div>
//       </Grid>
//     </div>
//   );
// }

// export default UploadExcel;



import React, { useState } from 'react';
import axios from 'axios';
import config from '../../../config';

const UploadExcel = () => {
  const [file, setFile] = useState(null);
  const [uploadResult, setUploadResult] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(`${config.apiUrl}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', response.data);
      setUploadResult(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
      if (error.response) {
        console.log('Response data:', error.response.data);
        console.log('Response status:', error.response.status);
        console.log('Response headers:', error.response.headers);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
      {uploadResult && (
        <div>
          <h3>Upload Result:</h3>
          <pre>{JSON.stringify(uploadResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default UploadExcel;
