import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography} from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  collection,
  getDocs,
} from 'firebase/firestore/lite';
import { db } from 'db/firebaseapp';
import * as XLSX from 'xlsx';


const downloadExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  
    XLSX.writeFile(workbook, 'DataSheet.xlsx');
  };

  const SelectedPage = () => {
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);
  
    useEffect(() => {
      async function initialiseData() {
        const collectionRef = collection(db, 'yah_selected_entries');
        const temp = [];
        const querySnapshot = await getDocs(collectionRef);
        querySnapshot.forEach((doc) => {
          temp.push(doc.data());
        });
        setData(temp);
      }
  
      initialiseData();
    }, []);
  
    if (password === process.env.REACT_APP_passwordForSelection)
      return (
        <div>
            <p>Selected Teams</p>
          {console.log(data)}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                <TableCell>S.No.</TableCell>
                  <TableCell>Team name</TableCell>
                  <TableCell>College name</TableCell>
                  <TableCell>Team leader name</TableCell>
                  <TableCell>Team leader phno</TableCell>
                  <TableCell>Team count</TableCell>
                  <TableCell sx={{ width: 500 }}>Problem Statement</TableCell>
                  <TableCell sx={{ width: 600 }}>Abstract</TableCell>
                  <TableCell>Domain</TableCell>
                  <TableCell>Year of study(TL)</TableCell>
                  <TableCell>Coding profiles</TableCell>
                  <TableCell>Member details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row,index) => (
                  <TableRow key={row.prob_st}>
                    <TableCell sx={{ verticalAlign: 'top' }}>
                      {index+1}
                    </TableCell>
                    <TableCell sx={{ verticalAlign: 'top' }}>
                      {row.team_name}
                    </TableCell>
                    <TableCell sx={{ verticalAlign: 'top' }}>
                      {row.team_leader_college}
                    </TableCell>
                    <TableCell sx={{ verticalAlign: 'top' }}>
                      {row.team_leader_name}
                    </TableCell>
                    <TableCell sx={{ verticalAlign: 'top' }}>
                      {row.team_leader_phno}
                    </TableCell>
                    <TableCell sx={{ verticalAlign: 'top' }}>
                      {row.team_count}
                    </TableCell>
                    <TableCell sx={{ verticalAlign: 'top', minWidth: 500 }}>
                      {row.prob_st}
                    </TableCell>
                    <TableCell
                      sx={{
                        verticalAlign: 'top',
                        textAlign: 'left',
                        minWidth: 600,
                      }}
                    >
                      {row.abstract}
                    </TableCell>
                    <TableCell sx={{ verticalAlign: 'top' }}>
                      {row.domain}
                    </TableCell>
                    <TableCell sx={{ verticalAlign: 'top' }}>
                      {row.team_leader_yof}
                    </TableCell>
                    <TableCell sx={{ verticalAlign: 'top' }}>
                      {row.team_leader_code_profile}
                    </TableCell>
                    <TableCell sx={{ verticalAlign: 'top' }}>
                     { [...Array(row.team_count)].map((_, index)=><Typography>
                      
                    {`${index ===0 ? 'Leader': 'Member'} ${index ===0 ? '':`${index}`} name:`}  {row.member_details[index].name}
                     </Typography>)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant='outlined'
            onClick={() => {
              downloadExcel(data);
            }}
          >
            Download as excel sheet
          </Button>
        </div>
      );
  
    return (
      <div>
        <Typography
          sx={{
            padding: '10px 0px',
            fontSize: '1.5rem',
            width: '100%',
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: '50px',
          }}
        >
          Enter password to reveal the secret
        </Typography>
  
        <TextField
          variant='outlined'
          sx={{ width: '25%' }}
          label='Password'
          type={'password'}
          helperText={'Type the password and press enter.'}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              setPassword(e.target.value);
            }
          }}
        />
      </div>
    );
  };
  export default SelectedPage;