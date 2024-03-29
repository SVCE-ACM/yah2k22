import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Tooltip } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomSnackbar from 'common/CustomSnackbar';
import { snackBarStore } from 'stores/snackbarStore';
import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
} from 'firebase/firestore/lite';
import { db } from 'db/firebaseapp';
import * as XLSX from 'xlsx';

const downloadExcel = (data) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  XLSX.writeFile(workbook, 'DataSheet.xlsx');
};

const SelectionPage = () => {
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  const [participantsDetails, setParticipantsDetails] = useState([]);

  const snackbar = snackBarStore((state) => state);

  useEffect(() => {
    async function initialiseData() {
      const collectionRef = collection(db, 'yah_entry');
      const temp = [];
      const temp1 = [];
      const querySnapshot = await getDocs(collectionRef);
      querySnapshot.forEach((doc) => {
        const docData = doc.data();
        temp.push({
          abstract: docData.abstract,
          prob_st: docData.prob_st,
          domain: docData.domain,
          team_name: docData.team_name,
          team_leader_name: docData.player1.name,
          team_leader_phno: docData.player1.phone,
          team_leader_email: docData.player1.email,
          team_leader_college: docData.player1.college,
          team_leader_yof: docData.player1.yearOfStudy,
          team_leader_code_profile: docData.player1.github_url ?? 'no profile',
          team_count: docData.count,
          member_details: [...Array(docData.count)].map((_,index)=>docData[`player${index+1}`]),
        });
        [...Array(docData.count)].forEach((_,index)=>{
          if(docData[`player${index+1}`])
          temp1.push(docData[`player${index+1}`]);
        });
        console.log(temp1)
      });
      setData(temp);
      setParticipantsDetails(temp1)
    }

    initialiseData();
  }, []);

  if (password === process.env.REACT_APP_passwordForSelection)
    return (
      <div>
         <p>All Registrations</p>
        {console.log(data)}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
              <TableCell>S.No.</TableCell>
                <TableCell>Select</TableCell>
                <TableCell>Team name</TableCell>
                <TableCell>College name</TableCell>
                <TableCell>Team leader name</TableCell>
                <TableCell>Team leader phno</TableCell>
                <TableCell>Year of study(TL)</TableCell>
                <TableCell>Coding profiles</TableCell>
                <TableCell>Domain</TableCell>
                <TableCell sx={{ width: 500 }}>Problem Statement</TableCell>
                <TableCell sx={{ width: 600 }}>Abstract</TableCell>
                <TableCell>Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row,index) => (
                <TableRow key={row.prob_st}>
                  <TableCell sx={{ verticalAlign: 'top' }}>
                    {index+1}
                  </TableCell>
                  <TableCell sx={{ verticalAlign: 'top' }}>
                    <Tooltip title='Select the team for finale'>
                      <Button
                        variant='outlined'
                        onClick={async () => {
                          const collectionRef = collection(
                            db,
                            'yah_selected_entries'
                          );

                          const q = query(
                            collectionRef,
                            where(
                              'team_leader_phno',
                              '==',
                              row.team_leader_phno
                            )
                          );
                          const querySnapshot = await getDocs(q);
                          console.log(querySnapshot.docs.length);

                          if (querySnapshot.docs.length === 1) {
                            snackbar.setmessage(
                              'This team is already selected.'
                            );
                            snackbar.setIsError(true);
                            snackbar.setOpen(true);
                          } else {
                            const selectedRow = {
                              ...row,
                              source: process.env.REACT_APP_SOURCE,
                            };

                            await addDoc(collectionRef, selectedRow);
                            snackbar.setmessage('Selected✅');
                            snackbar.setIsError(false);
                            snackbar.setOpen(true);
                          }
                        }}
                      >
                        Select
                      </Button>
                    </Tooltip>
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
                    {row.team_leader_yof}
                  </TableCell>
                  <TableCell sx={{ verticalAlign: 'top' }}>
                    {row.team_leader_code_profile}
                  </TableCell>
                  <TableCell sx={{ verticalAlign: 'top' }}>
                    {row.domain}
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
                    {row.team_count}
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
        <Button
          variant='outlined'
          onClick={() => {
            console.log(participantsDetails);
            downloadExcel(participantsDetails);
          }}
        >
          Download Participants details as excel sheet
        </Button>
        <Button
          variant='outlined'
          onClick={() => {
            window.open(`${process.env.REACT_APP_SELECTED_ROUTE}`);
          }}
        >
          See Selected Teams
        </Button>
        <CustomSnackbar
          open={snackbar.open}
          handleClose={() => snackbar.setOpen(false)}
          message={snackbar.message ?? 'Server error'}
          severity={snackbar.isError ? 'error' : 'success'}
        />
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
export default SelectionPage;
